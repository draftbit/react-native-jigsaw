const fs = require("fs");
const path = require("path");
const glob = require("glob");
const fetch = require("node-fetch");
const { promisify } = require("util");
const parser = require("./parser");
const qs = require("query-string");

const globAsync = promisify(glob);
const writeFileSync = promisify(fs.writeFile);
const readFileAsync = promisify(fs.readFile);

const LOCAL_API_URL = "http://localhost:3001";
const STAGING_API_URL = "https://api.stagingbit.com";
const PRODUCTION_API_URL = "https://api.draftbit.com";

const API_URL = LOCAL_API_URL;

const COMPONENT_PATH = path.resolve("./src/components");
const IGNORED_FILES = [];
const ERROR_FILES = [];
const COMPLETED_FILES = [];

const getFileName = file =>
  file
    .split("/")
    .pop()
    .split(".")[0];

async function getComponent(filePath) {
  try {
    let component = await parser(filePath);
    return component;
  } catch (e) {
    console.error(filePath, e.message);
    process.exit(1);
  }
}

function findPropFromLabel(props, label) {
  const prop = Object.entries(props).reduce(([key, value], prev) => {
    if (value.label === label) {
      prev[key] = valuye;
    }

    return prev;
  }, {});

  return prop;
}

async function main(airtableRecords) {
  let files = await globAsync(`${COMPONENT_PATH}/**/*.js`);
  files = files.filter(file => !IGNORED_FILES.includes(file));

  for (const record of airtableRecords) {
    const getTag = c => {
      if (c.indexOf("(") !== -1) return c.split("(")[0];
      return c.trim();
    };

    const getName = c => {
      if (c.indexOf("(") !== -1) {
        const name = c.split("(")[1].split(")")[0];
        return name.trim();
      }
    };

    const tag = getTag(record.component);
    const filePath = `${process.cwd()}/src/components/${tag.trim()}.js`;

    let component = await getComponent(filePath);
    let parsed = JSON.parse(component, null, 2);

    if (Array.isArray(parsed)) {
      if (record.component.indexOf("(") === -1) continue;
      const name = getName(record.component);
      parsed = parsed.find(c => c.name === name);
      if (!parsed) continue;
    }

    for (const key of Object.keys(parsed.props)) {
      const prop = parsed.props[key];
      if (prop.label === record.oldLabel && record.newLabel !== "") {
        prop.label = record.newLabel;
      }

      if (prop.description === record.oldDescription) {
        if (record.newDescription !== "") {
          if (record.newDescription === "NONE") {
            prop.description = null;
          } else {
            prop.description = record.newDescription;
          }
        }
      }
    }

    try {
      await uploadComponent(JSON.stringify(parsed));
      COMPLETED_FILES.push(filePath);
    } catch (error) {
      const fileName = getFileName(filePath);
      ERROR_FILES.push({ fileName, error: error.message });
      console.log("ERROR", fileName, error.message);
    }
  }

  await fs.writeFileSync(
    "completed.json",
    JSON.stringify(COMPLETED_FILES, null, 2)
  );

  await fs.writeFileSync("errors.json", JSON.stringify(ERROR_FILES, null, 2));
}

async function uploadComponent(component) {
  await fetch(`${API_URL}/components`, {
    method: "POST",
    body: component
  });
}

async function makeRequest() {
  let offset = true;
  const records = [];

  do {
    const params = {};

    if (offset && offset !== true) params.offset = offset;

    const query = qs.stringify(params);
    const url = "https://api.airtable.com/v0/appXGqhNmmLTdBDv1/Config?" + query;
    const data = await fetch(url, {
      headers: {
        Authorization: "Bearer keyrNUVpKgeWCvUXk"
      }
    }).then(res => res.json());

    offset = data.offset;
    records.push(...data.records);
  } while (offset);

  return records;
}

async function fetchFromAirtable() {
  const records = await makeRequest();
  const fieldsToUpdate = records
    .map(r => ({
      shouldSkip: r.fields["Status"] === "Needs Review",
      component: r.fields.Component,
      oldLabel: r.fields["Old Label"],
      newLabel: r.fields["New Label"] || "",
      oldDescription: r.fields["Old Description"],
      newDescription: r.fields["New Description"] || ""
    }))
    .filter(r => !r.shouldSkip)
    .map(r => {
      return {
        component: r.component.trim(),
        oldLabel: r.oldLabel.trim(),
        newLabel: r.newLabel.trim(),
        oldDescription: r.oldDescription.trim(),
        newDescription: r.newDescription.trim()
      };
    });

  return fieldsToUpdate;
}

fetchFromAirtable().then(main);
