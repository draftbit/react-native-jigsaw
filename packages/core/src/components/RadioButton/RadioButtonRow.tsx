import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextStyle,
  View,
  Platform,
} from "react-native";
import RadioButton, { RadioButtonProps } from "./RadioButton";
import Text from "../Text";
import { useRadioButtonGroupContext } from "./context";
import {
  createTextProp,
  createTextEnumProp,
  COMPONENT_TYPES,
  createColorProp,
  GROUPS,
} from "@draftbit/types";
import type { IconSlot } from "../../interfaces/Icon";
import { Direction as GroupDirection } from "./context";
import Touchable from "../Touchable";
import { extractStyles } from "../../utilities";

export enum Direction {
  Row = "row",
  RowReverse = "row-reverse",
}

export interface RadioButtonRowProps extends Omit<RadioButtonProps, "onPress"> {
  label: string | React.ReactNode;
  value: string;
  color?: string;
  unselectedColor?: string;
  labelContainerStyle: StyleProp<ViewStyle>;
  radioButtonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onPress?: (value: string) => void;
  direction?: Direction;
}

const getRadioButtonAlignment = (
  parentDirection: GroupDirection | undefined,
  direction: Direction
) => {
  if (parentDirection === GroupDirection.Horizontal) {
    return direction === Direction.Row ? "flex-start" : "flex-end";
  } else if (direction === Direction.RowReverse) {
    return "flex-start";
  } else {
    return "flex-end";
  }
};

const renderLabel = (
  value: string | React.ReactNode,
  labelStyle: StyleProp<TextStyle>,
  textStyle: StyleProp<TextStyle>
) => {
  if (typeof value === "string") {
    return <Text style={[labelStyle, textStyle]}>{value}</Text>;
  } else {
    return <>{value}</>;
  }
};

const RadioButtonRow: React.FC<RadioButtonRowProps & IconSlot> = ({
  Icon,
  label,
  value,
  color,
  unselectedColor,
  onPress = () => {},
  labelContainerStyle,
  labelStyle,
  radioButtonStyle,
  direction = Direction.Row,
  selected,
  disabled,
  style,
  ...rest
}) => {
  const {
    value: contextValue,
    onValueChange,
    direction: parentDirection,
  } = useRadioButtonGroupContext();

  const handlePress = () => {
    onPress(value);
    onValueChange && onValueChange(value);
  };

  const { textStyles, viewStyles } = extractStyles(style);

  return (
    <Touchable
      onPress={handlePress}
      style={[styles.mainParent, { flexDirection: direction }, viewStyles]}
      disabled={disabled}
      {...rest}
    >
      <View
        style={[
          styles.label,
          {
            alignItems: direction === Direction.Row ? "flex-start" : "flex-end",
          },
          labelContainerStyle,
        ]}
      >
        {renderLabel(label, labelStyle, textStyles)}
      </View>
      <View
        style={{
          flex: 1,
          alignItems: getRadioButtonAlignment(parentDirection, direction),
        }}
      >
        <RadioButton
          Icon={Icon}
          selected={
            selected || (contextValue != null && contextValue === value)
          }
          color={color}
          unselectedColor={unselectedColor}
          onPress={handlePress}
          style={radioButtonStyle}
        />
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  mainParent: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingStart: 20,
    minHeight: 50,
    paddingEnd: 20,
    flex: 1,
    ...Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none",
      },
    }),
  },
  label: {
    flex: 3,
  },
});

export default RadioButtonRow;

export const SEED_DATA = {
  name: "Radio Button Row",
  tag: "RadioButtonRow",
  category: COMPONENT_TYPES.input,
  layout: {},
  props: {
    label: createTextProp({
      label: "Label",
      description: "Label to show with the radio button",
      required: true,
      defaultValue: "First Option",
    }),
    direction: createTextEnumProp({
      label: "Direction",
      description:
        "Whether the checkbox will appear on the left or on the right",
      options: ["row", "row-reverse"],
    }),
    value: createTextProp({
      label: "Value",
      description: "Value of the radio button",
      defaultValue: null,
      required: true,
    }),
    color: createColorProp({
      group: GROUPS.basic,
      description: "Color for the button",
      defaultValue: "primary",
    }),
    unselectedColor: createColorProp({
      group: GROUPS.basic,
      label: "Unselected Color",
      description: "Unselected Color for the button",
      defaultValue: "primary",
    }),
  },
};
