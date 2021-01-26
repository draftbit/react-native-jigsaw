/* This points directly to src/index instead of "@draftbit/ui" because we don't want to rely
on the package.json "main" since it needs to point to "lib/commonjs/index.js" to keep functionality with bob as described here: https://github.com/callstack/react-native-builder-bob#manual-configuration */
import * as JigsawUI from "../react-native-jigsaw/src/index";

const JigsawWeb: any = {
  ...JigsawUI,
  /* Icon and AudioPlayer aren't rendering anything in web */
  Icon: () => null,
  AudioPlayer: () => null,
};

export default JigsawWeb;
