const fs = require("fs");
const path = require("path");
const glob = require("glob");
const fetch = require("node-fetch");
const { promisify } = require("util");
const parser = require("./parser");

const globAsync = promisify(glob);
const writeFileSync = promisify(fs.writeFile);

const LOCAL_API_URL = "http://localhost:3001";
const STAGING_API_URL = "https://api.stagingbit.com";
const PRODUCTION_API_URL = "https://api.draftbit.com";

const COMPONENT_PATH = path.resolve("./src/components");
const IGNORED_FILES = [];
const ERROR_FILES = [];
const COMPLETED_FILES = [];

async function main() {
  let files = await globAsync(`${COMPONENT_PATH}/**/*.js`);
  files = files.filter(file => !IGNORED_FILES.includes(file));

  for (const file of files) {
    try {
      const component = await parser(file);
      await uploadComponent(component);
      COMPLETED_FILES.push(file);
    } catch (error) {
      const name = file.split("jigsaw-component-library/")[1];
      ERROR_FILES.push({ file, error: error.message });
      console.log("ERROR", name, error.message);
    }
  }

  await fs.writeFileSync(
    "completed.json",
    JSON.stringify(COMPLETED_FILES, null, 2)
  );
  await fs.writeFileSync("errors.json", JSON.stringify(ERROR_FILES, null, 2));
}

async function uploadComponent(component) {
  await fetch(`${LOCAL_API_URL}/components`, {
    method: "POST",
    body: component
  });
}

main();
