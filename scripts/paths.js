const path = require("path");

const NATIVE_ROOT = path.join(__dirname, "..", "packages", "native", "src");
const NATIVE_COMPONENTS = path.join(NATIVE_ROOT, "components");
const CORE_PATH = path.join(__dirname, "..", "packages", "core", "src");
const COMPONENT_PATH = path.join(CORE_PATH, "components");
const MAPPING_PATH = path.join(CORE_PATH, "mappings");
const SCREEN_PATH = path.join(CORE_PATH, "screens");
const COMPONENT_TYPES_PATH = path.join(
  __dirname,
  "..",
  "packages",
  "types",
  "src",
  "component-types.ts"
);

const EXAMPLE_ROOT = path.join(__dirname, "..", "example");

module.exports = {
  NATIVE_ROOT,
  NATIVE_COMPONENTS,
  CORE_PATH,
  COMPONENT_PATH,
  MAPPING_PATH,
  SCREEN_PATH,
  COMPONENT_TYPES_PATH,
  EXAMPLE_ROOT,
};
