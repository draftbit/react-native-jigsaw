/* This file ensures that draftbit/ui and draftbit/web remains mostly clones, but with 2 differences:
  - "@expo/vector-icons" and "expo-av" aren't part of web
  - Icon and AudioPlayer are null components
 */
const fs = require("fs");
const path = require("path");
const packageJson = require("../package.json");

const SRC_PATH = path.join(__dirname, "..");

function changePackageName(package, name) {
  return {
    ...package,
    name: "@draftbit/" + name,
  };
}

function changeEntrypoints(package, entryfile) {
  /* These replaces ensure that the entrypoint of the package is web.tsx,
  where we exclude the non-valid web components from the build */
  return {
    ...package,
    "main": package.main.replace("index", entryfile),
    "module": package.module.replace("index", entryfile),
    "types": package.types.replace("index", entryfile),
    "source": package.source.replace("index", entryfile),
    "react-native": package["react-native"].replace("index", entryfile),
  };
}

function removeDependency(package, dependencyName) {
  const duplicatedPak = { ...package };
  delete duplicatedPak.dependencies[dependencyName];
  return duplicatedPak;
}

function main() {
  const packageWithChangedName = changePackageName(packageJson, "web");
  const packageWithEntrypoints = changeEntrypoints(
    packageWithChangedName,
    "web"
  );
  const pakWithoutIcons = removeDependency(
    packageWithEntrypoints,
    "@expo/vector-icons"
  );
  const draftbitWeb = removeDependency(pakWithoutIcons, "expo-av");
  console.log("@draftbit/web package.json:");
  console.log(draftbitWeb);

  const newPackageJson = path.join(SRC_PATH, "package.json");

  fs.writeFileSync(
    newPackageJson,
    JSON.stringify(draftbitWeb, null, 2),
    "utf-8"
  );
}

main();
