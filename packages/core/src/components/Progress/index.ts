import "react-native-reanimated";

declare namespace global {
  function __reanimatedWorkletInit(): void;
}

if (!global.__reanimatedWorkletInit) {
  global.__reanimatedWorkletInit = () => {};
}

export { default as LinearProgress } from "./LinearProgress";
export { default as CircularProgress } from "./CircularProgress";
