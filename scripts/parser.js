const { promises: fs } = require("fs");
const { COMPONENT_TYPES_PATH } = require("./paths");

const IDENTIFIERS = {
  es6Export: {
    match: /export const/g,
    replace: "const",
  },
  cloudinaryUrl: {
    match: /\{CLOUDINARY_URL\}/g,
    replace:
      "https://res.cloudinary.com/altos/image/upload/draftbit/library/jigsaw-1.0/reps",
  },
  types: {
    match: /: any\)/g,
    replace: ")",
  },
  extraPropsStart: "SEED_DATA_PROPS",
  seedDataStart: "SEED_DATA",
  seedDataEnd: "]",
};

async function loadFile(file) {
  const res = await fs.readFile(file, { encoding: "utf-8" });
  return res;
}

function replaceIdentifiers(file) {
  file = file.replace(
    IDENTIFIERS.es6Export.match,
    IDENTIFIERS.es6Export.replace
  );
  file = file.replace(
    IDENTIFIERS.cloudinaryUrl.match,
    IDENTIFIERS.cloudinaryUrl.replace
  );
  file = file.replace(IDENTIFIERS.types.match, IDENTIFIERS.types.replace);
  return file;
}

async function parseFileSeedData(file) {
  const lineStart = file.indexOf(IDENTIFIERS.seedDataStart);
  const extraPropsExist = file.indexOf(IDENTIFIERS.extraPropsStart) !== -1;

  if (lineStart !== -1) {
    let str;
    file = replaceIdentifiers(file);
    const lines = file.split("\n");
    const codeStart = lines.findIndex(
      (l) => l.indexOf(IDENTIFIERS.seedDataStart) !== -1
    );

    if (extraPropsExist) {
      const extraPropsStart = lines.findIndex(
        (l) => l.indexOf(IDENTIFIERS.extraPropsStart) !== -1
      );
      str = lines.slice(extraPropsStart).join("\n");
    }

    str = lines.slice(codeStart).join("\n");
    return str;
  }

  throw new Error(`${IDENTIFIERS.seedDataStart} not found`);
}

module.exports = async function parser(filePath) {
  const typesFileRaw = await loadFile(COMPONENT_TYPES_PATH);
  const typesFile = replaceIdentifiers(typesFileRaw);
  const componentFile = await loadFile(filePath);
  const parsedComponentFile = await parseFileSeedData(componentFile);

  const combinedFile = typesFile + parsedComponentFile;
  // eslint-disable-next-line
  const data = eval(`${combinedFile}\n JSON.stringify(SEED_DATA)`);
  return data;
};
