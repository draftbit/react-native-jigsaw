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
  createTextStyle,
  FORM_TYPES,
  COMPONENT_TYPES,
} from "@draftbit/types";
import { Direction as GroupDirection } from "./context";
import Touchable from "../Touchable";

export enum Direction {
  Row = "row",
  RowReverse = "row-reverse",
}

export interface RadioButtonRowProps extends Omit<RadioButtonProps, "onPress"> {
  label: string | React.ReactNode;
  value: string;
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
  labelStyle: StyleProp<TextStyle>
) => {
  if (typeof value === "string") {
    return <Text style={labelStyle}>{value}</Text>;
  } else {
    return <>{value}</>;
  }
};

const RadioButtonRow: React.FC<RadioButtonRowProps> = ({
  Icon,
  label,
  value,
  onPress = () => {},
  labelContainerStyle,
  labelStyle,
  radioButtonStyle,
  direction = Direction.Row,
  selected,
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

  return (
    <Touchable
      onPress={handlePress}
      style={[styles.mainParent, { flexDirection: direction }, style]}
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
        {renderLabel(label, labelStyle)}
      </View>
      <View
        style={{
          flex: 1,
          alignItems: getRadioButtonAlignment(parentDirection, direction),
        }}
      >
        <RadioButton
          Icon={Icon}
          selected={selected || contextValue === value}
          onPress={handlePress}
          style={radioButtonStyle}
          {...rest}
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
  category: COMPONENT_TYPES.container,
  layout: {},
  props: {
    label: createTextProp({
      label: "Label",
      description: "Label to show with the radio button",
      required: true,
      defaultValue: null,
    }),
    labelStyle: createTextStyle({
      label: "Label Style",
      description: "Change the styles of the label",
      required: false,
    }),
    direction: createTextProp({
      label: "Direction",
      description:
        "Whether the radio button will appear on the left or on the right",
      formType: FORM_TYPES.flatArray,
      defaultValue: "row",
      options: ["row", "row-reverse"],
    }),
    value: createTextProp({
      label: "Value",
      description: "Value of the radio button",
      required: true,
    }),
  },
};
