import fs from "fs/promises";

/**
 * When the @draftbit/ui is used with snack, we run into the error: 'r.g.__reanimatedWorkletInit is not a function'
 * The solution is to add a polyfill for the global.__reanimatedWorkletInit function
 * https://forums.expo.dev/t/react-native-reanimated-error-r-g-reanimatedworkletinit-is-not-a-function/68222/3
 *
 * This polyfill needs to be done at the first point of execution, placing at the top of index.tsx does not guarantee that
 * since the babel build reorders the code around which results in it not being the top most call.
 *
 * This script modifies the built code to add the polyfill at the start
 */

const INDEX_FILE = "./lib/commonjs/index.js";

async function polyfillReanimatedWorkletInitForSnack() {
  const indexFileContents = await fs.readFile(INDEX_FILE, "utf-8");
  const newContents =
    "if(!global.__reanimatedWorkletInit){global.__reanimatedWorkletInit=function(){};}" +
    indexFileContents;

  await fs.writeFile(INDEX_FILE, newContents);
}

polyfillReanimatedWorkletInitForSnack();
