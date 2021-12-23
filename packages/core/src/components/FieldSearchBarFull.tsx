import * as React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  Platform,
} from "react-native";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
import Config from "./Config";

type Props = {
  showIcon: boolean;
  icon?: string;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  onChange?: (text: string) => void;
  onSubmit?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  value?: string;
  defaultValue?: string;
  border?: number;
  borderColor?: string;
  borderFocusColor?: string;
} & IconSlot;

const FieldSearchBarFull: React.FC<Props> = ({
  showIcon,
  Icon,
  icon = "search",
  placeholder = "",
  style,
  theme: { colors, typography },
  onChange: changeOverride,
  onSubmit: submitOverride,
  value,
  defaultValue,
  border = 1,
  borderColor = "#ccc",
  borderFocusColor,
}) => {
  const [focused, setIsFocused] = React.useState(false);

  const onBlur = () => {
    setIsFocused(false);
  };

  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    value || defaultValue
  );

  React.useEffect(() => {
    if (value != null) {
      setInternalValue(value);
    }
  }, [value]);

  React.useEffect(() => {
    if (defaultValue != null) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue]);

  const onChange = React.useCallback(
    (text: string) => {
      changeOverride && changeOverride(text);
    },
    [changeOverride]
  );

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSubmit = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    submitOverride && submitOverride(e);
  };

  const { lineHeight, ...typeStyles } = typography.body2; // eslint-disable-line @typescript-eslint/no-unused-vars

  const handleChangeText = (newValue: string) => {
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const borderStyle = focused
    ? {
        borderWidth: border || 1,
        borderColor: borderFocusColor || colors.primary,
      }
    : { borderWidth: border || 1, borderColor: borderColor || "#e4e4e4" };

  const inputWebStyle =
    Platform.OS === "web"
      ? {
          outlineColor: "transparent",
          outlineWidth: 0,
        }
      : {};

  return (
    <View style={[styles.container, borderStyle, style]}>
      {showIcon && (
        <Icon
          name={icon}
          size={Config.fieldSearchBarFullIconSize}
          color={focused ? colors.primary : colors.light}
        />
      )}
      <View
        style={{
          marginLeft: showIcon ? 12 : 0,
          flex: 1,
        }}
      >
        <TextInput
          clearButtonMode="while-editing"
          placeholder={placeholder}
          value={internalValue}
          onBlur={onBlur}
          onFocus={onFocus}
          onChangeText={handleChangeText}
          onSubmitEditing={onSubmit}
          placeholderTextColor={colors.light}
          style={[
            {
              color: colors.medium,
              height: 44,
            },
            inputWebStyle,
            typeStyles,
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default withTheme(FieldSearchBarFull);
