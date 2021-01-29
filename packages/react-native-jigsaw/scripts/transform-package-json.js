/* This file ensures that draftbit/ui and draftbit/web remains mostly clones, but with 2 differences:
  - "@expo/vector-icons" and "expo-av" aren't part of web
  - Icon and AudioPlayer are null components
 */
const fs = require("fs");
const path = require("path");
const packageJson = require("../package.json");

const ROOT_PATH = path.join(__dirname, "..");
const COMPONENT_PATH = path.join(ROOT_PATH, "src", "components");

const NULL_REACT_COMPONENT = "export default () => null;";

function changePackageName(package, name) {
  return {
    ...package,
    name: "@draftbit/" + name,
  };
}

function removeDependency(package, dependencyName) {
  const duplicatedPak = { ...package };
  delete duplicatedPak.dependencies[dependencyName];
  return duplicatedPak;
}

function overrideFile(path, content) {
  fs.writeFileSync(path, content, { encoding: "utf8", flag: "w" });
}

function overrideComponents(name, content) {
  return overrideFile(path.join(COMPONENT_PATH, name), content);
}

function main() {
  const packageWithChangedName = changePackageName(packageJson, "web");
  const pakWithoutIcons = removeDependency(
    packageWithChangedName,
    "@expo/vector-icons"
  );
  const draftbitWeb = removeDependency(pakWithoutIcons, "expo-av");
  console.log("@draftbit/web package.json:");
  console.log(draftbitWeb);

  const newPackageJson = path.join(ROOT_PATH, "package.json");

  fs.writeFileSync(
    newPackageJson,
    JSON.stringify(draftbitWeb, null, 2),
    "utf-8"
  );

  /* This overrides Icon and AudioPlayer to be null components on the draftbit/web package */
  overrideComponents("Icon.tsx", NULL_REACT_COMPONENT);
  overrideComponents("AudioPlayer.tsx", NULL_REACT_COMPONENT);
}

main();
