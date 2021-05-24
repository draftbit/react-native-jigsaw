const fs = require("fs");
const path = require("path");
const glob = require("glob");
const { promisify } = require("util");
const parser = require("./parser");

const globAsync = promisify(glob);

const COMPONENT_PATH = path.resolve("./src/components");
const COMPONENTS = [];
const IGNORED_FILES = [];
const ERROR_FILES = [];

const THEME_PROPS = [
  "color",
  "style",
  "borderColor",
  "backgroundColor",
  "placeholderTextColor",
  "maximumTrackTintColor",
  "minimumTrackTintColor",
  "thumbTintColor",
  "children",
  "selectionColor",
  "textDecorationColor",
  "underlineColorAndroid",
  "selectedColor",
  "unselectedColor",
  "stepStrokeCurrentColor",
  "stepIndicatorLabelCurrentColor",
  "unfinishedColor",
  "finishedColor",
  "stepNumberUnfinishedColor",
  "stepNumberFinishedColor",
  "activeColor",
  "inactiveColor",
  "contentColor",
  "unselectedContentColor",
  "disabledThumbTintColor",
  "stepIndicatorCurrentColor",
];

async function main() {
  let files = await globAsync(`${COMPONENT_PATH}/**/*.js`);
  files = files.filter((file) => !IGNORED_FILES.includes(file));

  for (const file of files) {
    try {
      const component = await parser(file);
      const parsed = JSON.parse(component, null, 2);
      for (const key of Object.keys(parsed.props)) {
        COMPONENTS.push(key);
      }
    } catch (error) {
      ERROR_FILES.push({ file, error: error.message });
    }
  }

  const UNIQUE = [...new Set(COMPONENTS)];
  const FILTERED = UNIQUE.filter((f) => !THEME_PROPS.includes(f));

  fs.writeFileSync("components.json", JSON.stringify(FILTERED, null, 2));
}

main();
