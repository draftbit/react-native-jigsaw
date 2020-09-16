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

function main([name]) {
  console.log(`Changing name to "@draftbit/${name}"`);
  let json = changePackageName(name);
  fs.writeFileSync("package.json", json, "utf-8");
}

main(process.argv.slice(2));
