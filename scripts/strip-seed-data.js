const { promises: fs } = require("fs");

/**
 * component-types.ts has been moved to the draftbit repo. Consider modifying this script and moving it as well.
 * or delete if not needed
 */
const CLOUDINARY_URL =
  "https://res.cloudinary.com/altos/image/upload/draftbit/library/jigsaw-1.0/reps";

const IDENTIFIERS = {
  import: "component-types",
  es6Export: "export const",
  commonJsExport: "const",
  extraPropsStart: "SEED_DATA_PROPS",
  seedDataStart: "SEED_DATA",
  seedDataEnd: "]",
  cloudinaryUrl: "{CLOUDINARY_URL}",
};

async function loadFile(file) {
  const res = await fs.readFile(file, { encoding: "utf-8" });
  return res;
}

function replaceIdentifiers(file) {
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

    const str = lines
      .slice(0, codeStart)
      .filter((line) => !line.includes(IDENTIFIERS.import))
      .join("\n");
    return str;
  }

  throw new Error(`${IDENTIFIERS.seedDataStart} not found`);
}

async function main(filePath) {
  const componentFile = await loadFile(filePath);
  const parsedComponentFile = await parseFileSeedData(componentFile);
  return parsedComponentFile;
}

module.exports = main;
