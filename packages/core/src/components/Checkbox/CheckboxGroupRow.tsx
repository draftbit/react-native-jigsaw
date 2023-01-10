import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextStyle,
  View,
  Platform,
  Pressable,
} from "react-native";
import Checkbox, { CheckboxProps } from "./Checkbox";
import Text from "../Text";
import { useCheckboxGroupContext } from "./context";
import type { IconSlot } from "../../interfaces/Icon";
import { Direction as GroupDirection } from "./context";
import { extractStyles } from "../../utilities";

export enum Direction {
  Row = "row",
  RowReverse = "row-reverse",
}

export interface CheckboxGroupRowProps extends Omit<CheckboxProps, "onPress"> {
  label: string | React.ReactNode;
  value: string; // A string that this checkbox represents
  labelContainerStyle: StyleProp<ViewStyle>;
  checkboxStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onPress?: (value: boolean) => void;
  direction?: Direction;
  color: string;
  unselectedColor: string;
}

const getCheckboxAlignment = (
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

const CheckboxGroupRow: React.FC<CheckboxGroupRowProps & IconSlot> = ({
  Icon,
  label = "Label",
  status,
  value,
  onPress,
  labelContainerStyle,
  labelStyle,
  checkboxStyle,
  direction = Direction.Row,
  disabled,
  style,
  color,
  uncheckedColor,
  ...rest
}) => {
  const {
    values: selectedValues,
    onValueChange,
    direction: parentDirection,
  } = useCheckboxGroupContext();

  const values = Array.isArray(selectedValues) ? selectedValues : [];
  const isChecked = status || values.includes(value);

  const handlePress = () => {
    if (!disabled) {
      onPress?.(!isChecked);
      onValueChange?.(value, !isChecked);
    }
  };

  const { textStyles, viewStyles } = extractStyles(style);

  return (
    <Pressable
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
          alignItems: getCheckboxAlignment(parentDirection, direction),
        }}
      >
        <Checkbox
          Icon={Icon}
          status={isChecked}
          onPress={handlePress}
          style={checkboxStyle}
          disabled={disabled}
          color={color}
          uncheckedColor={uncheckedColor}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainParent: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingStart: 20,
    minHeight: 50,
    paddingEnd: 20,
    display: "flex",
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

export default CheckboxGroupRow;
