import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  StylesPanelSections,
  createColorProp,
  createNumberProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Audio Player",
  tag: "AudioPlayer",
  description: "Given a source URL, plays sounds & audio!",
  category: COMPONENT_TYPES.media,
  stylesPanelSections: [
    StylesPanelSections.Typography,
    StylesPanelSections.Background,
    StylesPanelSections.Borders,
    StylesPanelSections.Size,
    StylesPanelSections.MarginsAndPaddings,
    StylesPanelSections.Position,
  ],
  layout: {
    backgroundColor: "#eee",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
  },
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
    sliderColor: createColorProp({
      label: "Thumb Color",
      defaultValue: "black",
    }),
    completedTrackColor: createColorProp({
      label: "Completed Track Color",
      defaultValue: "white",
    }),
    remainingTrackColor: createColorProp({
      label: "Remanining Track Color",
      defaultValue: "#333333",
    }),
    trackThumbSize: createNumberProp({
      label: "Thumb Size",
      defaultValue: 24,
    }),
  },
};
