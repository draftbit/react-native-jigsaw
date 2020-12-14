const fs = require("fs");
const pak = require("../package.json");

function changePackageName(name) {
  return JSON.stringify(
    {
      ...pak,
      name: "@draftbit/" + name,
    },
    null,
    2
  );
}

function removeDependency(package, dependencyName) {
  return package.replace(new RegExp(` +"${dependencyName}"[^\n]+\n`), "");
}

function main() {
  console.log(`Changing name to "@draftbit/web"`);
  const packageWithChangedName = changePackageName("web");
  const draftbitWeb = removeDependency(packageWithChangedName, "@expo/vector-icons");
  fs.writeFileSync("package.json", draftbitWeb, "utf-8");
}

main(process.argv.slice(2));
