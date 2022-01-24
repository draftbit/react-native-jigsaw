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
import type { IconSlot } from "../../interfaces/Icon";
import { Direction as GroupDirection } from "./context";
import Touchable from "../Touchable";
import { extractStyles, getRealValue } from "../../utilities";

export enum Direction {
  Row = "row",
  RowReverse = "row-reverse",
}

export interface RadioButtonRowProps extends Omit<RadioButtonProps, "onPress"> {
  label: string | React.ReactNode;
  value?: string; // A string (or JS number to be parsed to String) that this radio button row represents when selected
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
  label: string | React.ReactNode,
  labelStyle: StyleProp<TextStyle>,
  textStyle: StyleProp<TextStyle>
) => {
  if (typeof label === "string") {
    return (
      <Text style={[labelStyle, textStyle] /* NOTE order right? */}>
        {label}
      </Text>
    );
  } else {
    return <>{label}</>;
  }
};

const RadioButtonRow: React.FC<RadioButtonRowProps & IconSlot> = ({
  Icon,
  label,
  value,
  color,
  unselectedColor,
  onPress,
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

  const realValue = getRealValue(value);
  const realContextValue = getRealValue(contextValue);
  const isSelected =
    selected ??
    (realContextValue && realValue && realContextValue === realValue);

  const handlePress = () => {
    if (realValue) {
      onPress?.(realValue);
      onValueChange?.(realValue);
    }
  };

  const { textStyles, viewStyles } = extractStyles(style);

  return (
    <Touchable
      onPress={handlePress}
      style={[
        styles.mainParent,
        { flexDirection: direction },
        viewStyles /* NOTE order right? */,
      ]}
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
          selected={isSelected ? true : false}
          value={realValue}
          color={color}
          unselectedColor={unselectedColor}
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
