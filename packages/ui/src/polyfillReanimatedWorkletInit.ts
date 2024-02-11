/**
 * When the @draftbit/ui is used with snack, we run into the error: 'r.g.__reanimatedWorkletInit is not a function'
 * The solution is to add a polyfill for the global.__reanimatedWorkletInit function
 * https://forums.expo.dev/t/react-native-reanimated-error-r-g-reanimatedworkletinit-is-not-a-function/68222/3
 *
 * This polyfill needs to be done at the first point of execution, placing at the top of index.tsx does not guarantee that
 * since the build reorders the code around (such as hoisting imports/exports) which results in it not being the top most call. Having it as an import of
 * a seperate file guarantees it's the first import
 *
 */

//@ts-ignore
if (!global.__reanimatedWorkletInit) {
  //@ts-ignore
  global.__reanimatedWorkletInit = function () {};
}
