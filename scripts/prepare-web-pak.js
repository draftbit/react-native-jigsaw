const fs = require("fs");
const pak = require("../package.json");

function changePackageName(name) {
  return {
    ...pak,
    name: "@draftbit/" + name,
  };
}

function removeDependency(package, dependencyName) {
  const duplicatedPak = { ...package };
  delete duplicatedPak.dependencies[dependencyName];
  return duplicatedPak;
}

function main() {
  console.log(`Changing name to "@draftbit/web"`);
  const packageWithChangedName = changePackageName("web");
  const pakWithoutIcons = removeDependency(packageWithChangedName, "@expo/vector-icons");
  const draftbitWeb = removeDependency(pakWithoutIcons, "expo-av");
  fs.writeFileSync("package.json", JSON.stringify(draftbitWeb, null, 2), "utf-8");
}

main(process.argv.slice(2));
