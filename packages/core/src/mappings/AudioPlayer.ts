import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Audio Player",
  tag: "AudioPlayer",
  description: "Given a source URL, plays sounds & audio!",
  category: COMPONENT_TYPES.media,
  layout: {},
  props: {
    source: {
      group: GROUPS.data,
      label: "Source",
      description: "The source URL for the audio file.",
      editable: true,
      required: true,
      defaultValue:
        "https://static.draftbit.com/audio/intro-to-draftbit-audio.mp3",
      formType: FORM_TYPES.sourceUrl,
      propType: PROP_TYPES.OBJECT,
    },
  },
};
