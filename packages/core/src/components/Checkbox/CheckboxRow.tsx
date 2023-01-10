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
import { isString } from "lodash";

import type { IconSlot } from "../../interfaces/Icon";
import { extractStyles } from "../../utilities";
import { usePrevious } from "../../hooks";
import Text from "../Text";
import Checkbox, { CheckboxProps } from "./Checkbox";

export enum Direction {
  Row = "row",
  RowReverse = "row-reverse",
}

export interface CheckboxRowProps extends CheckboxProps {
  label: string | React.ReactNode;
  labelStyle?: StyleProp<TextStyle>;
  labelContainerStyle: StyleProp<ViewStyle>;
  checkboxStyle?: StyleProp<ViewStyle>;
  direction?: Direction;
}

const renderLabel = (
  value: string | React.ReactNode,
  labelStyle: StyleProp<TextStyle>,
  textStyle: StyleProp<TextStyle>
) => {
  if (isString(value)) {
    return <Text style={[textStyle, labelStyle]}>{value}</Text>;
  } else {
    return <>{value}</>;
  }
};

const CheckboxRow: React.FC<CheckboxRowProps & IconSlot> = ({
  label = "Label",
  labelStyle,
  labelContainerStyle,
  checkboxStyle,
  direction = Direction.Row,
  Icon,
  status,
  disabled = false,
  onPress,
  onCheck,
  onUncheck,
  color,
  uncheckedColor,
  defaultValue,
  checkedIcon,
  uncheckedIcon,
  size,
  style,
  ...rest
}) => {
  const [internalValue, setInternalValue] = React.useState<boolean>(
    status || defaultValue || false
  );

  React.useEffect(() => {
    if (status != null) {
      setInternalValue(status);
    }
  }, [status]);

  // This special logic is to handle weird APIs like Airtable that return
  // true or undefined for a boolean
  const previousDefaultValue = usePrevious(defaultValue) as boolean | undefined;

  React.useEffect(() => {
    if (defaultValue !== previousDefaultValue) {
      setInternalValue(Boolean(defaultValue));
    }
  }, [defaultValue, previousDefaultValue]);

  const handlePress = () => {
    const newValue = !internalValue;

    setInternalValue(newValue);
    onPress?.(newValue);

    if (newValue) {
      onCheck?.();
    }

    if (!newValue) {
      onUncheck?.();
    }
  };

  const { textStyles, viewStyles } = extractStyles(style);

  return (
    <Pressable
      onPress={handlePress}
      style={[viewStyles, styles.mainParent, { flexDirection: direction }]}
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
        {renderLabel(label, textStyles, labelStyle)}
      </View>

      <Checkbox
        Icon={Icon}
        status={internalValue}
        style={checkboxStyle}
        disabled={disabled}
        onPress={handlePress}
        color={color}
        uncheckedColor={uncheckedColor}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
        size={size}
      />
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

export default CheckboxRow;
