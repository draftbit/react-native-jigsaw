import {
  COMPONENT_TYPES,
  createElevationType,
  createTextProp,
  createImageProp,
  createIconProp,
  createAspectRatioProp,
  createStaticBoolProp,
  createTextStyle,
  createActionProp,
  Triggers,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Card",
  tag: "Card",
  description: "A card you can customize however you'd like",
  category: COMPONENT_TYPES.card,
  triggers: [Triggers.OnPress, Triggers.OnPressIcon],
  props: {
    onPress: createActionProp(),
    onPressIcon: createActionProp({
      handlerPropName: "onPressIcon",
    }),
    elevation: createElevationType(3),
    image: createImageProp(),
    title: createTextProp({
      label: "Title",
      description: "Large title text",
      // defaultValue: "Title",
      defaultValue: null,
    }),
    titleStyle: createTextStyle({
      label: "Title Style",
    }),
    subtitle: createTextProp({
      label: "Subtitle",
      description: "Text underneath the title",
      defaultValue: null,
      // defaultValue: "Edit me in the props panel on the right",
    }),
    subtitleStyle: createTextStyle({
      label: "Subtitle Style",
    }),
    description: createTextProp({
      label: "Description",
      description: "Smallest text underneath subtitle",
      // defaultValue:
      // "This bottom text is optional, but shows up to make your life a little easier!",
      defaultValue: null,
    }),
    descriptionStyle: createTextStyle({
      label: "Description Style",
    }),
    icon: createIconProp(),
    aspectRatio: createAspectRatioProp({
      defaultValue: 1.5,
    }),
    textCentered: createStaticBoolProp({
      label: "Centered Text",
      description: "Places your title and subtitle in the center",
    }),
  },
};
