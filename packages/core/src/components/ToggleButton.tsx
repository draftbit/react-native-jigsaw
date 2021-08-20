import * as React from "react";
import { withTheme } from "../theming";
import { colorTypes, GROUPS } from "@draftbit/types";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import IconButton from "./IconButton";
import {
  COMPONENT_TYPES,
  createIconProp,
  createBoolProp,
  createColorProp,
  createStaticNumberProp,
  createActionProp,
  createFieldNameProp,
  createIconSizeProp,
} from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
import { usePrevious } from "../hooks";

type Props = {
  icon: string;
  toggled?: boolean;
  onPress?: (toggled: boolean) => void;
  initialValue?: boolean;
  disabled?: boolean;
  color?: colorTypes;
  colorSecondary?: colorTypes;
  borderColor?: colorTypes;
  iconSize?: number;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
} & IconSlot;

const ToggleButton: React.FC<Props> = ({
  Icon,
  icon,
  toggled = false,
  onPress = () => {},
  initialValue,
  disabled = false,
  color = "primary",
  colorSecondary = "surface",
  borderColor = "divider",
  iconSize = 25,
  width = 50,
  height = 50,
  theme: { colors },
  style,
  ...rest
}) => {
  const previousInitialValue = usePrevious(initialValue);
  React.useEffect(() => {
    if (initialValue !== previousInitialValue) {
      onPress(initialValue);
    }
  }, [initialValue, previousInitialValue, onPress]);

  return (
    <IconButton
      Icon={Icon}
      icon={icon}
      size={iconSize}
      color={toggled ? colors[color] : colors[colorSecondary]}
      onPress={() => onPress(!toggled)}
      disabled={disabled}
      style={[
        styles.mainContainer,
        {
          width,
          height,
          backgroundColor: toggled ? colors[colorSecondary] : colors[color],
          borderColor: colors[borderColor],
        },
        style,
      ]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
  },
});

export default withTheme(ToggleButton);

export const SEED_DATA = {
  name: "Toggle Button",
  tag: "ToggleButton",
  category: COMPONENT_TYPES.button,
  layout: {},
  props: {
    icon: createIconProp({
      required: true,
    }),
    iconSize: createIconSizeProp(),
    fieldName: createFieldNameProp({
      defaultValue: false,
      valuePropName: "toggled",
    }),
    onPress: createActionProp(),
    disabled: createBoolProp({
      label: "Disabled",
      description: "Whether the button should be disabled",
      group: GROUPS.basic,
    }),
    color: createColorProp({
      group: GROUPS.basic,
    }),
    colorSecondary: createColorProp({
      label: "Secondary Color",
      group: GROUPS.basic,
    }),
    borderColor: createColorProp({
      label: "Border Color",
      group: GROUPS.basic,
    }),
    width: createStaticNumberProp({
      label: "Width",
      description: "Width",
      defaultValue: 50,
    }),
    height: createStaticNumberProp({
      label: "Height",
      description: "Height",
      defaultValue: 50,
    }),
  },
};
