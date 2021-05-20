import * as React from "react";
import { withTheme } from "../theming";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  FIELD_NAME,
} from "@draftbit/types";
import Row from "./Row";
import Checkbox from "./Checkbox";
import theme from "../styles/DefaultTheme";
import { StyleProp, ViewStyle } from "react-native";

type Props = {
  title?: string;
  subtitle?: string;
  style?: StyleProp<ViewStyle>;
  status?: "checked" | "indeterminate" | "unchecked";
  onPress?: () => void;
  color?: string;
  theme: typeof theme;
};

const RowBodyCheckbox: React.FC<Props> = ({
  title,
  subtitle,
  style,
  status = "unchecked",
  onPress = () => {},
  color,
  theme: { colors, typography },
}) => {
  return (
    <Row
      titleTypeStyle={typography.body1}
      titleColor={colors.medium}
      subtitleTypeStyle={typography.subtitle2}
      subtitleColor={colors.light}
      title={title}
      subtitle={subtitle}
      right={() => <Checkbox status={status} color={color} onPress={onPress} />}
      style={style}
    />
  );
};

export default withTheme(RowBodyCheckbox);

export const SEED_DATA = [
  {
    name: "Row Single Line Body Checkbox",
    tag: "RowBodyCheckbox",
    description:
      "A row with left aligned body text and a right aligned checkbox",
    preview_image_url: "{CLOUDINARY_URL}/Row_SingleLine_BodyCheckbox.png",
    category: COMPONENT_TYPES.deprecated,
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      color: {
        label: "Checkbox color",
        description: "Custom color for Checkbox",
        editable: true,
        required: false,
        formType: FORM_TYPES.color,
      },
      fieldName: {
        ...FIELD_NAME,
        defaultValue: "checkboxValue",
        valuePropName: "status",
        handlerPropName: "onPress",
      },
    },
    layout: {},
  },
  {
    name: "Row Double Line Body Checkbox",
    tag: "RowBodyCheckbox",
    description:
      "A row with left aligned body text and subtitle text and a right aligned checkbox",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Row_DoubleLine_BodyCheckbox.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      subtitle: {
        label: "Subtitle",
        description: "Subtitle text to display",
        formType: FORM_TYPES.string,
        defaultValue: "San Diego",
        editable: true,
      },
      color: {
        label: "Color",
        description: "Custom color for Checkbox",
        editable: true,
        required: false,
        formType: FORM_TYPES.color,
      },
      fieldName: {
        ...FIELD_NAME,
        defaultValue: "checkboxValue",
        valuePropName: "status",
        handlerPropName: "onPress",
      },
    },
    layout: {},
  },
];
