const fs = require("fs");
const path = require("path");

const ROOT_PATH = path.join(__dirname, "..");
const nativePackageJsonPath = path.join(
  ROOT_PATH,
  "packages",
  "native",
  "package.json"
);

const nativePackageJsonContents = fs
  .readFileSync(nativePackageJsonPath)
  .toString();
const nativePackageJson = JSON.parse(nativePackageJsonContents);

delete nativePackageJson.devDependencies["react-native-webview"];

fs.writeFileSync(nativePackageJsonPath, JSON.stringify(nativePackageJson));
