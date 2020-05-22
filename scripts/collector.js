const fs = require("fs");
const path = require("path");
const glob = require("glob");
const fetch = require("node-fetch");
const { promisify } = require("util");
const parser = require("./parser");

const globAsync = promisify(glob);

const LOCAL_API_URL = "http://localhost:3001";
const STAGING_API_URL = "https://api.stagingbit.com";
const PRODUCTION_API_URL = "https://api.draftbit.com";

const COMPONENT_PATH = path.resolve("./src/components");
const IGNORED_FILES = [];
const ERROR_FILES = [];
const COMPLETED_FILES = [];

async function main() {
  console.log("Running on", getUrl(), "[warnings surpressed]");
  let files = await globAsync(`${COMPONENT_PATH}/**/*.js`);
  files = files.filter((file) => !IGNORED_FILES.includes(file));

  for (const file of files) {
    try {
      const component = await parser(file);
      const name = file.split("components/").pop().split(".js")[0];
      await uploadComponent(component, name);
      COMPLETED_FILES.push(file);
    } catch (error) {
      ERROR_FILES.push({ file, error: error.message });
    }
  }

  fs.writeFileSync("completed.json", JSON.stringify(COMPLETED_FILES, null, 2));
  fs.writeFileSync("errors.json", JSON.stringify(ERROR_FILES, null, 2));
}

function getUrl() {
  switch (process.env.target) {
    case "staging":
      return STAGING_API_URL;
    case "prod":
      return PRODUCTION_API_URL;
    default:
      return LOCAL_API_URL;
  }
}

async function uploadComponent(component, name) {
  fs.writeFileSync(`./mappings/${name}.json`, component);
}

main();
