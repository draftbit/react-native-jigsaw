import {
  COMPONENT_TYPES,
  createStaticBoolProp,
  createStaticNumberProp,
  createTextEnumProp,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Keyboard Aware Scroll View",
  tag: "KeyboardAwareScrollView",
  description:
    "View that moves pushes the content when virtual keyboard is open.",
  category: COMPONENT_TYPES.view,
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
  layout: {},
  props: {
    viewIsInsideTabBar: createStaticBoolProp({
      label: "View Is Inside TabBar",
      description: "Adds an extra offset that represents the TabBarIOS height.",
    }),
    enableAutomaticScroll: createStaticBoolProp({
      label: "Enable Automatic Scroll",
      description:
        "When focus in TextInput will scroll the position, default is enabled",
    }),
    extraHeight: createStaticNumberProp({
      label: "Extra Height",
      description: "Adds an extra offset when focusing the TextInputs",
    }),
    extraScrollHeight: createStaticNumberProp({
      label: "Extra Scroll Height",
      description:
        "Adds an extra offset to the keyboard. Useful if you want to stick elements above the keyboard",
    }),
    enableResetScrollToCoords: createStaticBoolProp({
      label: "Enable Reset Scroll To Coordinates",
      description:
        "Lets the user enable or disable automatic resetScrollToCoords",
    }),
    keyboardOpeningTime: createStaticNumberProp({
      label: "Opening Time",
      description:
        "Sets the delay time before scrolling to new position after keyboard opening, default is 250",
    }),
    enableOnAndroid: createStaticBoolProp({
      label: "Enable On Android",
      description: "Enable Android Support",
    }),
    showsVerticalScrollIndicator: createStaticBoolProp({
      label: "Shows Vertical Scroll Indicator",
      description: "Show or hide the vertical scroll indicator",
      defaultValue: true,
    }),
    keyboardShouldPersistTaps: createTextEnumProp({
      label: "Allow Touch Events",
      description:
        "Allows touch events on visible components to be processed while the keyboard is open",
      defaultValue: "never",
      options: ["never", "always"],
    }),
  },
};
