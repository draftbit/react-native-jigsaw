require("dotenv").config();
const fs = require("fs");
const glob = require("glob");
const fetch = require("node-fetch");
const { promisify } = require("util");
const parser = require("./parser");
const globAsync = promisify(glob);

const { MAPPING_PATH } = require("./paths");

const IGNORED_FILES = [
  "Query.js", // doesn't work at all
];

const ERROR_FILES = [];
const COMPLETED_FILES = [];

if (process.env.target && !process.env.GOOGLE_MAPS_API_KEY) {
  throw new Error(
    "GOOGLE_MAPS_API_KEY environment variable must be set when not uploading locally. See mappings/MapView.ts"
  );
}

async function main(list = []) {
  console.log("Running on", getUrl());

  if (Array.isArray(list) && list.length > 0) {
    console.log("ONLY running", JSON.stringify(list));
  }

  const mappingFiles = await globAsync(`${MAPPING_PATH}/**/*.ts`);

  const files = mappingFiles.filter((file) => {
    const name = file.split("/").pop();

    if (
      name.includes("web") ||
      name.includes("ios") ||
      name.includes("android")
    ) {
      console.log(`Ignoring... ${name}`);
      return false;
    }

    if (list.length > 0) {
      return list.includes(name);
    } else {
      return !IGNORED_FILES.includes(name);
    }
  });

  console.log("Num files:", files.length);

  for (const file of files) {
    const [name, category] = file.split("/").reverse();
    try {
      console.log("uploading", name, "from", category);
      const component = await parser(file);
      await uploadComponent(component);
      COMPLETED_FILES.push(file);
    } catch (error) {
      if (!error.message.includes("SEED_DATA")) {
        console.log("failed:", name, error);
        ERROR_FILES.push({ file, error: error.message });
        throw error;
      }
    }
  }

  fs.writeFileSync("completed.json", JSON.stringify(COMPLETED_FILES, null, 2));
  fs.writeFileSync("errors.json", JSON.stringify(ERROR_FILES, null, 2));
}

function getUrl() {
  const LOCAL_API_URL = "http://localhost:3001";
  const STAGING_API_URL = "https://api.stagingbit.com";
  const PRODUCTION_API_URL = "https://api.draftbit.com";

  const target = process.env.target || process.env.TARGET || "";
  switch (target) {
    case "staging":
      return STAGING_API_URL;
    case "prod":
      return PRODUCTION_API_URL;
    case "":
      return LOCAL_API_URL;
    default: {
      console.error(`Invalid target ${target}`);
      process.exit(1);
    }
  }
}

async function uploadComponent(component) {
  const url = getUrl();
  await fetch(`${url}/components`, {
    method: "POST",
    body: component,
    headers: {
      "Content-Type": "application/json",
      "Authorization": process.env.COLLECTOR_SCRIPT_TOKEN,
    },
  }).then(async (res) => {
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`${res.status} ${text}`);
    }
  });
}

main(process.argv.slice(2));
