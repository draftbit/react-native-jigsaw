/**
 * snackager fails whenever react-native-webview is a dependency, so we remove it
 * Fails with: Error: /tmp/snackager/snackager/buildStatus/1/@draftbit~core@49.4.4-a81bb6.2-ios,android,web/package/node_modules/react-native-webview/lib/RNCWebViewNativeComponent.js: Could not find component config for native component
 *
 * This package is still needed during development and when running tests, so we run this script on ci right before it's released
 *
 * To be removed if this snackager call can succeed without it
 * https://snackager.expo.io/bundle/@draftbit/core@VERSION_HERE?version_snackager=true&platforms=ios,android,web&bypassCache=true&sdkVersion=49.0.0
 */

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

const corePackageJsonPath = path.join(
  ROOT_PATH,
  "packages",
  "core",
  "package.json"
);

const corePackageJsonContents = fs.readFileSync(corePackageJsonPath).toString();
const corePackageJson = JSON.parse(corePackageJsonContents);

delete corePackageJson.devDependencies["react-native-youtube-iframe"];

fs.writeFileSync(corePackageJsonPath, JSON.stringify(corePackageJson));
