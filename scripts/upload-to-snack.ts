import { Snack } from "snack-sdk";
import { promises as fs } from "fs";
import path from "path";
import uiPackageJson from "../packages/ui/package.json";

const PATHS = require("./paths");

const UI_VERSION = uiPackageJson.version;
const APP_JS_PATH = path.join(PATHS.EXAMPLE_ROOT, "App.js");
const APP_SRC_PATH = path.join(PATHS.EXAMPLE_ROOT, "src");
// NOTE: If you feel like getting image/font uploads working via nodejs, uncomment this
// const APP_FONTS = path.join(PATHS.EXAMPLE_ROOT, "src", "assets", "fonts");
// const APP_IMAGES = path.join(PATHS.EXAMPLE_ROOT, "src", "assets", "images");

// NOTE: If images/fonts stop working, re-upload them to snack, open up the Network tab and copy/paste the URLs from the
// uploadAsset calls. Much easier than getting uploads working manually because its only supposed to be used client-side
// so uploading assets is wonky
const IMAGES = [
  {
    name: "icon.png",
    contents:
      "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/584cdf36ea2c2af97016be538d2ef650",
  },
  {
    name: "hamburger.png",
    contents:
      "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/45bc8d3b83f5bb71cbeba1bee2bcd2ca",
  },
  {
    name: "splash.png",
    contents:
      "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/650e22399f96d0c23619e15a1b408ba5",
  },
];

const FONTS = [
  {
    name: "FiraCode-Bold.otf",
    contents:
      "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/3d5a0f2330bccd2b6fd9a7bc3bad9174",
  },
  {
    name: "Sriracha-Regular.ttf",
    contents:
      "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0847227b3c5baa567b6630e28f8cc0d8",
  },
];

// NOTE: If you feel like getting image/font uploads working via nodejs, uncomment this

// async function getSrcFonts() {
//   const fonts = await fs.readdir(APP_FONTS);
//   return fonts;
// }

// async function getSrcImages() {
//   const images = await fs.readdir(APP_IMAGES);
//   return images;
// }

async function getSrcFilenames() {
  const files = await fs.readdir(APP_SRC_PATH);
  return files.filter((name) => name.endsWith("js") || name.endsWith("tsx"));
}

async function getAppJsFile() {
  const file = await fs.readFile(APP_JS_PATH, "utf-8");
  return file;
}

async function getSrcFiles(filenames: string[]) {
  const folder: any = {};

  for (const filename of filenames) {
    const contents = await fs.readFile(APP_SRC_PATH + "/" + filename, "utf-8");
    folder[`src/${filename}`] = {
      type: "CODE",
      contents,
    };
  }

  return folder;
}

async function getAssets() {
  // const imageNames = await getSrcImages();
  // const fontNames = await getSrcFonts();

  const folder: any = {};

  IMAGES.reduce((prev, cur) => {
    prev[`src/assets/images/${cur.name}`] = {
      type: "ASSET",
      contents: cur.contents,
    };

    return prev;
  }, folder);

  FONTS.reduce((prev, cur) => {
    prev[`src/assets/fonts/${cur.name}`] = {
      type: "ASSET",
      contents: cur.contents,
    };

    return prev;
  }, folder);

  return folder;
}

async function getAllFiles() {
  const appJsContents = await getAppJsFile();
  const files = await getSrcFilenames().then(getSrcFiles);

  return {
    "App.js": {
      type: "CODE",
      contents: appJsContents,
    },
    ...files,
  };
}

async function uploadToSnack() {
  const files = await getAllFiles();
  const assets = await getAssets();
  const modules = getSnackSpecificDependencies();

  const dependencies = Object.entries(modules).reduce(
    (prev: any, [key, value]) => {
      prev[key] = {
        version: value,
      };

      return prev;
    },
    {}
  );

  const snack = new Snack({
    name: `draftbit/ui-${UI_VERSION}`,
    sdkVersion: "41.0.0",
    dependencies,
    codeChangesDelay: -1,
    files: {
      ...files,
    },
  });

  snack.updateFiles(assets);
  await snack.getStateAsync();

  const { id } = await snack.saveAsync();
  return `https://snack.expo.io/${id}`;
}

// NOTE: Dependencies come from saving a Snack inside Draftbit and copying and pasting the package.json. If you get an error,
// just replace the version with an asterik
function getSnackSpecificDependencies() {
  return {
    "expo-constants": "~10.1.3",
    "@draftbit/ui": `~${UI_VERSION}`,
    "@react-navigation/native": "*",
    "react-native-reanimated": "*",
    "react-native-screens": "*",
    "expo-app-loading": "*",
    "react-native-safe-area-context": "*",
    "expo-font": "*",
    "expo-av": "*",
    "react-native-svg": "*",
    "firebase": "8.2.3",
    "expo-blur": "*",
    "expo-asset": "*",
    "expo-linking": "*",
    "@firebase/app": "*",
    "react-request": "3.1.2",
    "@firebase/auth": "*",
    "expo-web-browser": "*",
    "react-fetch-hook": "1.8.5",
    "@firebase/app-types": "*",
    "@firebase/firestore": "*",
    "react-native-webview": "*",
    "@react-navigation/stack": "*",
    "react-native-typography": "1.4.1",
    "@react-navigation/bottom-tabs": "*",
    "@react-native-picker/picker": "1.9.11",
    "@react-native-community/slider": "3.0.3",
    "@react-native-community/datetimepicker": "3.2.0",
    "react-native-gesture-handler": "*",
    "@react-native-community/masked-view": "0.1.10",
    "@react-native-masked-view/masked-view": "0.2.4",
    "@react-navigation/drawer": "*",
    "@react-native-async-storage/async-storage": "*",
  };
}

uploadToSnack().then(console.log);
