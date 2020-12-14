const fs = require("fs");
const pak = require("../package.json");

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

function changePackageName(package, name) {
  return JSON.stringify(
    {
      ...package,
      name: "@draftbit/" + name,
    },
    null,
    2
  );
}

function removeDependency(package, dependencyName) {
  return package.replace(new RegExp(` +"${dependencyName}"[^\n]+`), "");
}

function main() {
  console.log(`Changing name to "@draftbit/web"`);
  let json = pipe(
    changePackageName("web"),
    removeDependency("@expo/vector-icons")
  )(pak);
  fs.writeFileSync("package.json", json, "utf-8");
}

main(process.argv.slice(2));
