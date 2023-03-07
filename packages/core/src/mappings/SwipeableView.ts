import {
  COMPONENT_TYPES,
  createStaticNumberProp,
  createStaticBoolProp,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
  StylesPanelSections,
  GROUPS,
  createBoolProp,
  createTextProp,
  createIconProp,
  createTextEnumProp,
  createColorProp,
  Triggers,
  createActionProp,
} from "@draftbit/types";

const SHARED_SWIPEABLE_CHILDREN_PROPS = {
  title: createTextProp({
    label: "Title",
    description: "Title of button/swipeable",
    defaultValue: "Swipeable",
    required: true,
    group: GROUPS.basic,
  }),
  side: createTextEnumProp({
    label: "Side",
    description: "Side where button/swipeable is added",
    options: ["left", "right"],
    defaultValue: "left",
    required: true,
  }),
  icon: createIconProp({
    defaultValue: null,
    required: false,
  }),
  iconSize: createStaticNumberProp({
    label: "Icon size",
    description: "Size of icon",
    defaultValue: 25,
    required: false,
  }),
  backgroundColor: createColorProp({
    label: "Background color",
    description: "Color of button/swipeable background",
    defaultValue: "primary",
  }),
  color: createColorProp({
    label: "Color",
    description: "Color of text and icon of button/swipeable",
    defaultValue: "surface",
  }),
};

export const SEED_DATA = [
  {
    name: "Swipeable View",
    tag: "SwipeableView",
    doc_link:
      "https://github.com/jemise111/react-native-swipe-list-view/blob/master/docs/SwipeRow.md",
    description:
      "A swipeable view that is able to show hidden buttons and/or handle swipe events",
    category: COMPONENT_TYPES.view,
    stylesPanelSections: [
      ...CONTAINER_COMPONENT_STYLES_SECTIONS,
      StylesPanelSections.Typography,
    ],
    layout: {
      overflow: "hidden",
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
    },
    props: {
      closeOnPress: createStaticBoolProp({
        label: "Close on press",
        description: "Whether the view should be closed/dismissed when pressed",
        defaultValue: true,
      }),
      swipeActivationPercentage: createStaticNumberProp({
        label: "Swipe activation percentage",
        description:
          "Percentage of swipe completion needed to trigger onSwipe. Overriden by 'Left activation value' and 'Right activation value'",
        defaultValue: 80,
        required: false,
      }),
      disableLeftSwipe: createBoolProp({
        label: "Disable left swipe",
        description: "Whether left swipe is enabled or not",
        defaultValue: true,
      }),
      disableRightSwipe: createBoolProp({
        label: "Disable right swipe",
        description: "Whether right swipe is enabled or not",
        defaultValue: true,
      }),
      leftOpenValue: createStaticNumberProp({
        label: "Left open value",
        description:
          "The X translation value that left swipe snaps to (positive value). Defaults to half view width",
        group: GROUPS.advanced,
        required: false,
      }),
      rightOpenValue: createStaticNumberProp({
        label: "Right open value",
        description:
          "The X translation value that right swipe snaps to (negative value). Defaults to negative half view width",
        group: GROUPS.advanced,
        required: false,
      }),
      leftActivationValue: createStaticNumberProp({
        label: "Left activation value",
        description:
          "The X translation value that triggers onSwipe when surpassed (positive value). Defaults to 80% of half view width",
        group: GROUPS.advanced,
        required: false,
      }),
      rightActivationValue: createStaticNumberProp({
        label: "Right activation value",
        description:
          "The X translation value that triggers onSwipe when surpassed (negative value). Defaults to negative 80% of half view width",
        group: GROUPS.advanced,
        required: false,
      }),
      stopLeftSwipe: createStaticNumberProp({
        label: "Stop left swipe",
        description:
          "The maximum X translation value that is swipable from left (positive value). Defaults to half view width",
        group: GROUPS.advanced,
        required: false,
      }),
      stopRightSwipe: createStaticNumberProp({
        label: "Stop right swipe",
        description:
          "The maximum X translation value that is swipable from right (negative value). Defaults to negative half view width",
        group: GROUPS.advanced,
        required: false,
      }),
      directionalDistanceChangeThreshold: createStaticNumberProp({
        label: "Change threshold",
        description: "Change the sensitivity of the swipe on the view",
        group: GROUPS.advanced,
        required: false,
      }),
      friction: createStaticNumberProp({
        label: "Friction",
        description: "Controls the 'bounciness' of the swipe animation",
        defaultValue: 20,
        group: GROUPS.advanced,
        required: false,
      }),
      tension: createStaticNumberProp({
        label: "Change threshold",
        description: "Controls the tension/speed of the swipe animation",
        group: GROUPS.advanced,
        required: false,
      }),
      swipeToOpenVelocityContribution: createStaticNumberProp({
        label: "Swipe Velocity Contribution",
        description:
          "Describes how much the ending velocity of the gesture affects whether the swipe will result in the item being closed or open. A velocity factor of 0 (the default) means that the velocity will have no bearing on whether the swipe settles on a closed or open position and it'll just take into consideration the swipeToOpenPercent. Ideal values for this prop tend to be between 5 and 15",
        group: GROUPS.advanced,
        required: false,
      }),
      swipeToOpenPercent: createStaticNumberProp({
        label: "Swipe to open percentage",
        description:
          "What % of the left/right does the user need to swipe past to trigger the view opening",
        group: GROUPS.advanced,
        defaultValue: 50,
        required: false,
      }),
      swipeToClosePercent: createStaticNumberProp({
        label: "Swipe to close percentage",
        description:
          "What % of the left/right does the user need to swipe past to trigger the view closing",
        group: GROUPS.advanced,
        defaultValue: 50,
        required: false,
      }),
    },
  },
  {
    name: "Swipeable View Button",
    tag: "SwipeableViewButton",
    description: "Button to be rendered under a Swipeable View",
    category: COMPONENT_TYPES.view,
    stylesPanelSections: [],
    triggers: [Triggers.OnPress],
    props: {
      ...SHARED_SWIPEABLE_CHILDREN_PROPS,
      onPress: createActionProp(),
    },
  },
  {
    name: "Swipeable View Swipe Handler",
    tag: "SwipeableViewButton",
    description: "Component that renders and handles swipe of Swipeable View",
    category: COMPONENT_TYPES.view,
    stylesPanelSections: [],
    triggers: [Triggers.OnSwipe],
    props: {
      ...SHARED_SWIPEABLE_CHILDREN_PROPS,
      onSwipe: createActionProp({
        label: "On swipe",
        description:
          "Called when Swipeable View swiped in the direction this is configured to",
      }),
    },
  },
];
