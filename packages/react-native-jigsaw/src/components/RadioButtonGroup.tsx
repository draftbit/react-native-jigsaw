import * as React from "react";
import { withTheme } from "../core/theming";
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import Icon from "./Icon";
import Touchable from "./Touchable";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  FIELD_NAME,
} from "../core/component-types";
import themeT from "../styles/DefaultTheme";
import { colorTypes } from "../types";

interface RadioButtonOption {
  label: string;
  icon?: string;
}

type Props = {
  options?: RadioButtonOption[];
  activeColor?: colorTypes;
  inactiveColor?: colorTypes;
  contentColor?: colorTypes;
  unselectedContentColor?: colorTypes;
  borderColor?: colorTypes;
  style?: StyleProp<ViewStyle>;
  value: string;
  onSelect?: (label: string) => void;
  theme: typeof themeT;
};

const RadioButtonGroup: React.FC<Props> = ({
  options = [],
  activeColor,
  inactiveColor,
  contentColor,
  unselectedContentColor,
  borderColor,
  style,
  value,
  theme: { colors },
  onSelect = () => {},
}) => {
  const [v, onChange] = React.useState(value);

  React.useEffect(() => {
    if (v !== value) {
      onChange(value);
    }
  }, [value]);

  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((option, index, array) => {
        const first = index === 0;
        const last = index === array.length - 1;
        const selected = index === v;

        const styles = [];

        if (first) {
          styles.push({
            borderTopLeftRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
            borderWidth: 1,
          });
        }

        if (last) {
          styles.push({
            borderTopRightRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderRightWidth: 1,
          });
        }

        if (!first && !last) {
          styles.push({
            borderRightWidth: 1,
            borderTopWidth: 1,
            borderBottomWidth: 1,
          });
        }

        return (
          <Button
            title={option}
            bgColor={selected ? selectedBgColor : bgColor}
            textColor={selected ? selectedTextColor : textColor}
            style={[{ flex: 1 }, styles]}
            onPress={() => {
              onChange(index);
              onSelect(index);
            }}
            {...props}
          />
        );
      })}
    </View>
  );
};

export default withTheme(RadioButtonGroup);

export const SEED_DATA = {
  name: "Radio Button Group",
  tag: "RadioButtonGroup",
  category: COMPONENT_TYPES.button,
  layout: {},
  props: {
    options: {
      group: GROUPS.data,
      label: "Options",
      description: "Options for the button group.",
      formType: FORM_TYPES.array,
      propType: PROP_TYPES.OBJECT,
      options: [
        { icon: "", label: "One" },
        { icon: "", label: "Two" },
        { icon: "", label: "Three" },
      ],
      defaultValue: [
        { icon: "", label: "One" },
        { icon: "", label: "Two" },
        { icon: "", label: "Three" },
      ],
      editable: true,
      required: true,
    },
    activeColor: {
      group: GROUPS.basic,
      label: "Active Color",
      description: "Color of the button when it's selected",
      defaultValue: "primary",
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      editable: true,
      required: true,
    },
    inactiveColor: {
      group: GROUPS.basic,
      label: "Inactive Color",
      description: "Color of the button when it's selected not selected",
      defaultValue: "divider",
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      editable: true,
      required: true,
    },
    contentColor: {
      group: GROUPS.basic,
      label: "Selected Content Color",
      description: "Color of the content(Icon and Label)",
      defaultValue: "surface",
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      editable: true,
      required: true,
    },
    unselectedContentColor: {
      group: GROUPS.basic,
      label: "Unselected Content Color",
      description: "Unfinished Color of the content(Icon and Label)",
      defaultValue: "text",
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      editable: true,
      required: true,
    },
    borderColor: {
      group: GROUPS.basic,
      label: "Border Color",
      description: "Border color of the option",
      defaultValue: "light",
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      editable: true,
      required: true,
    },
    fieldName: {
      ...FIELD_NAME,
      defaultValue: "radioButtonValue",
      handlerPropName: "onSelect",
    },
  },
};
