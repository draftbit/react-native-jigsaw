// These packages build with @react-native/babel-preset rather than
// babel-preset-expo, so `process.env.EXPO_OS` never gets inlined. expo-modules-core
// warns on every import when it is missing, so define it up front for all workers.
module.exports = () => {
  process.env.EXPO_OS ??= "ios";
};
