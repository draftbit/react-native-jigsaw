import {
  COMPONENT_TYPES,
  createActionProp,
  createStaticBoolProp,
  createTextEnumProp,
  StylesPanelSections,
  Triggers,
  createNumberProp,
  createStaticNumberProp,
  createBoolProp,
  createDisabledProp,
  createAccessibilityLabelProp,
} from "@draftbit/types";

const SHARED_SEED_DATA = {
  category: COMPONENT_TYPES.NBForms,
  packageName: "native-base",
  stylesPanelSections: [
    StylesPanelSections.LayoutFlexItems,
    StylesPanelSections.LayoutSelectedItem,
    StylesPanelSections.LayoutContent,
    StylesPanelSections.Background,
    StylesPanelSections.Size,
    StylesPanelSections.MarginsAndPaddings,
    StylesPanelSections.Position,
    StylesPanelSections.Borders,
    StylesPanelSections.Effects,
  ],
  layout: {},
  allowChildren: true,
};

export const SEED_DATA = [
  {
    name: "Slider",
    tag: "Slider",
    description:
      "The Slider allows users to select options from a given range of values.",
    ...SHARED_SEED_DATA,
    triggers: [Triggers.OnChange, Triggers.OnChangeEnd],
    props: {
      onChange: createActionProp(),
      onChangeEnd: createActionProp(),
      defaultValue: createNumberProp(),
      thumbSize: createStaticNumberProp({
        label: "Thumb Size",
        description: "The size of the slider thumb",
      }),
      sliderTrackHeight: createStaticNumberProp({
        label: "Slider Track Height",
        description: "The height of the slider track",
      }),
      minValue: createStaticNumberProp({
        label: "Min Value",
      }),
      maxValue: createStaticNumberProp({
        label: "Max Value",
      }),
      step: createStaticNumberProp({
        label: "Step",
      }),
      isReadOnly: createBoolProp({
        label: "Read Only",
        description: "Whether the slider is read only",
        defaultValue: false,
      }),
      isReversed: createStaticBoolProp({
        label: "Reversed",
        description:
          "If true, the value will be incremented or decremented in reverse.",
        defaultValue: false,
      }),
      orientation: createTextEnumProp({
        label: "Orientation",
        description: "The orientation of the Slider.",
        options: ["horizontal", "vertical"],
        defaultValue: "horizontal",
      }),
      isDisabled: createDisabledProp(),
      accessibilityLabel: createAccessibilityLabelProp(),
    },
  },
  {
    name: "Slider Track",
    tag: "Slider.Track",
    description: "The empty part of the slider that shows the track.",
    ...SHARED_SEED_DATA,
    props: {},
  },
  {
    name: "Slider Filled Track",
    tag: "Slider.FilledTrack",
    description: "The filled part of the slider.",
    ...SHARED_SEED_DATA,
    props: {},
  },
  {
    name: "Slider Thumb",
    tag: "Slider.Thumb",
    description: "The handle that is used to change the slider value.",
    ...SHARED_SEED_DATA,
    props: {},
  },
];
