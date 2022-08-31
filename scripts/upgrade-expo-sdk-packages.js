const fs = require("fs/promises");
const fetch = require("node-fetch");

async function fetchBundledNativeModules(version) {
  const json = await fetch(
    `https://raw.githubusercontent.com/expo/expo/sdk-${version}/packages/expo/bundledNativeModules.json`
  ).then((r) => r.json());
  return json;
}

function upgradeDependencies(nativeModules, packageJson) {
  const deps = packageJson.dependencies;
  const devDeps = packageJson.devDependencies;

  for (const key in deps) {
    let value = deps[key];

    if (nativeModules.hasOwnProperty(key)) {
      console.log("has key", key, nativeModules[key], deps[key]);
      packageJson.dependencies[key] = nativeModules[key];
    }
  }

  for (const key in devDeps) {
    let value = devDeps[key];

    if (nativeModules.hasOwnProperty(key)) {
      console.log("has key", key, nativeModules[key], deps[key]);
      packageJson.devDependencies[key] = nativeModules[key];
    }
  }

  return packageJson;
}

const main = async () => {
  if (process.argv.length !== 3) {
    console.log("Missing argument. node scripts/upgrade.js 46 <--");
    process.exit(1);
  }

  const version = process.argv.slice(2)[0];
  const expoSdkModules = await fetchBundledNativeModules(version);
  const folders = [
    "example",
    "packages/core",
    "packages/maps",
    "packages/native",
    "packages/types",
    "packages/ui",
    "packages/web-maps",
  ];

  for (const folder of folders) {
    const packageJsonPath = `./${folder}/package.json`;
    const json = JSON.parse(await fs.readFile(packageJsonPath, "utf-8"));
    const updatedJson = upgradeDependencies(expoSdkModules, json);
    await fs.writeFile(packageJsonPath, JSON.stringify(updatedJson, null, 2));
  }

  console.log("Done. Run yarn");
};

main();
