import * as JigsawUI from "@draftbit/ui";

const JigsawWeb: any = {
  ...JigsawUI,
  /* Icon and AudioPlayer aren't rendering anything in web */
  Icon: () => null,
  AudioPlayer: () => null,
};

export default JigsawWeb;
