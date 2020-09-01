const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const readFileAsync = promisify(fs.readFile);

const COMPONENT_TYPES_PATH = path.resolve("./src/core/component-types.ts");
const CLOUDINARY_URL =
  "https://res.cloudinary.com/altos/image/upload/draftbit/library/jigsaw-1.0/reps";

const IDENTIFIERS = {
  es6Export: "export const",
  commonJsExport: "const",
  extraPropsStart: "SEED_DATA_PROPS",
  seedDataStart: "SEED_DATA",
  seedDataEnd: "]",
  cloudinaryUrl: "{CLOUDINARY_URL}",
};

async function loadFile(file) {
  const res = await readFileAsync(file, { encoding: "utf-8" });
  return res;
}

function replaceIdentifiers(file, identifiers) {
  const regex = new RegExp(IDENTIFIERS.es6Export, "g");
  file = file.replace(regex, IDENTIFIERS.commonJsExport);
  file = file.replace(
    new RegExp(IDENTIFIERS.cloudinaryUrl, "g"),
    CLOUDINARY_URL
  );
  return file;
}

async function parseFileSeedData(file) {
  const lineStart = file.indexOf(IDENTIFIERS.seedDataStart);
  const extraPropsExist = file.indexOf(IDENTIFIERS.extraPropsStart) !== -1;

  if (lineStart !== -1) {
    file = replaceIdentifiers(file, IDENTIFIERS);
    const lines = file.split("\n");
    const codeStart = lines.findIndex(
      (l) => l.indexOf(IDENTIFIERS.seedDataStart) !== -1
    );

    if (extraPropsExist) {
      const extraPropsStart = lines.findIndex(
        (l) => l.indexOf(IDENTIFIERS.extraPropsStart) !== -1
      );
      const str = lines.slice(extraPropsStart).join("\n");
    }

    const str = lines.slice(codeStart).join("\n");
    return str;
  }

  throw new Error(`${IDENTIFIERS.seedDataStart} not found`);
}

async function main(filePath) {
  const typesFile = await loadFile(COMPONENT_TYPES_PATH).then(
    replaceIdentifiers
  );
  const componentFile = await loadFile(filePath);
  const parsedComponentFile = await parseFileSeedData(componentFile);

  const combinedFile = typesFile + parsedComponentFile;
  // eslint-disable-next-line
  const data = eval(`${combinedFile}\n JSON.stringify(SEED_DATA)`);
  return data;
}

// if (process.argv[2]) {
//   main(process.argv[2])
// } else {
//   console.log("Pass in a file as an argument")
//   process.exit(1)
// }

module.exports = main;
