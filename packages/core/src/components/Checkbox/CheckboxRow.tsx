import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextStyle,
  View,
  Platform,
} from "react-native";
import Checkbox, { CheckboxProps } from "./Checkbox";
import Text from "../Text";
import { useCheckboxGroupContext } from "./context";
import {
  createTextProp,
  createTextStyle,
  createRowDirectionProp,
  createFieldNameProp,
  COMPONENT_TYPES,
  Triggers,
  createColorProp,
} from "@draftbit/types";
import type { IconSlot } from "../../interfaces/Icon";
import { Direction as GroupDirection } from "./context";
import Touchable from "../Touchable";
import { extractStyles } from "../../utilities";

export enum Direction {
  Row = "row",
  RowReverse = "row-reverse",
}

export interface CheckboxRowProps extends Omit<CheckboxProps, "onPress"> {
  label: string | React.ReactNode;
  valueString: string; // A string that this checkbox represents
  value: boolean;
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

const CheckboxRow: React.FC<CheckboxRowProps & IconSlot> = ({
  Icon,
  label = "Label",
  value,
  valueString,
  onPress = () => {},
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
  const isChecked = value || values.includes(valueString);

  const handlePress = () => {
    if (!disabled) {
      onPress(!isChecked);
      onValueChange && onValueChange(valueString, !isChecked);
    }
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
          alignItems: getCheckboxAlignment(parentDirection, direction),
        }}
      >
        <Checkbox
          Icon={Icon}
          value={isChecked}
          onPress={handlePress}
          style={checkboxStyle}
          disabled={disabled}
          color={color}
          uncheckedColor={uncheckedColor}
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

export default CheckboxRow;

export const SEED_DATA = {
  name: "Checkbox Row",
  tag: "CheckboxRow",
  category: COMPONENT_TYPES.input,
  layout: {
    minHeight: 50,
  },
  triggers: [Triggers.OnPress],
  props: {
    label: createTextProp({
      label: "Label",
      description: "Label to show with the checkbox",
      required: true,
      defaultValue: "First Option",
    }),
    labelStyle: createTextStyle({
      label: "Label Style",
      description: "Change the styles of the label",
      required: false,
      editable: false,
    }),
    direction: createRowDirectionProp(),
    fieldName: createFieldNameProp({
      defaultValue: "checkboxValue",
      valuePropName: "value",
      handlerPropName: "onPress",
    }),
    color: createColorProp({
      description: "Color for the button (used when the checkbox is checked)",
    }),
    uncheckedColor: createColorProp({
      label: "Unselected Color",
      description: "Color for the button when the checkbox is unchecked",
    }),
  },
};
