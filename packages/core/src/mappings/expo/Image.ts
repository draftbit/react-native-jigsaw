import {
  COMPONENT_TYPES,
  createImageProp,
  StylesPanelSections,
  createTextProp,
  createStaticBoolProp,
  createTextEnumProp,
  createStaticNumberProp,
  Triggers,
  createActionProp,
  GROUPS,
  createColorProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Expo Image",
  tag: "Image",
  packageName: "expo-image",
  collection: "Expo",
  prefixCollectionOnImport: true,
  description: "A responsive Image component",
  category: COMPONENT_TYPES.media,
  stylesPanelSections: [
    StylesPanelSections.Size,
    StylesPanelSections.Margins,
    StylesPanelSections.Position,
    StylesPanelSections.Effects,
    StylesPanelSections.Borders,
  ],
  layout: {
    width: 100,
    height: 100,
  },
  triggers: [Triggers.OnLoad, Triggers.OnError],
  props: {
    onLoad: createActionProp(),
    onError: createActionProp(),
    source: createImageProp(),
    placeholder: createImageProp({
      label: "Placeholder",
      description:
        "An image to display while loading the proper image and no image has been displayed yet or the source is unset.",
      required: false,
      defaultValue: null,
    }),
    contentFit: createTextEnumProp({
      label: "Content Fit",
      description:
        'Determines how the image should be resized to fit its container. This property tells the image to fill the container in a variety of ways; such as "preserve that aspect ratio" or "stretch up and take up as much space as possible". It mirrors the CSS object-fit property.',
      options: ["cover", "contain", "fill", "none", "scale-down"],
      defaultValue: null,
    }),
    contentPosition: createTextEnumProp({
      label: "Content Position",
      description:
        "It is used together with contentFit to specify how the image should be positioned with x/y coordinates inside its own container. An equivalent of the CSS object-position property.",
      options: [
        "center",
        "top",
        "left",
        "right",
        "bottom",
        "top left",
        "top center",
        "top right",
        "left center",
        "left top",
        "left bottom",
        "right center",
        "right top",
        "right bottom",
        "bottom center",
        "bottom left",
        "bottom right",
      ],
      default: null,
    }),
    cachePolicy: createTextEnumProp({
      label: "Cache Policy",
      description:
        "Determines whether to cache the image and where: on the disk, in the memory or both.",
      options: ["none", "disk", "memory", "memory-disk"],
      defaultValue: null,
    }),
    focusable: createStaticBoolProp({
      label: "Focusable",
      description:
        "Whether this View should be focusable with a non-touch input device and receive focus with a hardware keyboard.",
      group: GROUPS.android,
      defaultValue: null,
    }),
    priority: createTextEnumProp({
      label: "Priority",
      description:
        "Priorities for completing loads. If more than one load is queued at a time, the load with the higher priority will be started first. Priorities are considered best effort, there are no guarantees about the order in which loads will start or finish.",
      options: ["normal", "high", "low"],
      defaultValue: null,
    }),
    responsivePolicy: createTextEnumProp({
      label: "Responsive Policy",
      description:
        "Determines whether to choose image source based on container size only on mount or on every resize. Use initial to improve performance.",
      options: ["initial", "live"],
      defaultValue: null,
      group: GROUPS.web,
    }),
    tintColor: createColorProp({
      label: "Tint Color",
      description:
        "A color used to tint template images (a bitmap image where only the opacity matters). The color is applied to every non-transparent pixel, causing the image’s shape to adopt that color. This effect is not applied to placeholders.",
    }),
    accessibilityLabel: createTextProp({
      label: "Accessibility Label",
      description:
        "The text that's read by the screen reader when the user interacts with the image.",
      defaultValue: null,
    }),
    accessible: createStaticBoolProp({
      label: "Accessible",
      description:
        "When true, indicates that the view is an accessibility element. When a view is an accessibility element, it groups its children into a single selectable component.",
      defaultValue: null,
    }),
    blurRadius: createStaticNumberProp({
      label: "Blur Radius",
      description:
        "The radius of the blur in points, 0 means no blur effect. This effect is not applied to placeholders.",
      defaultValue: null,
    }),
  },
};