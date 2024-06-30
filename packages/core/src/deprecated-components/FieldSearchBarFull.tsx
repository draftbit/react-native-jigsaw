import * as React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";
import { withTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";
import type { IconSlot } from "../interfaces/Icon";
import Config from "../components/Config";

type Props = {
  showIcon: boolean;
  icon?: string;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  theme: ReadTheme;
  onChange?: (text: string) => void;
  onSubmit?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  value?: string;
  defaultValue?: string;
} & IconSlot;

/**
 * @deprecated DEPRECATED
 */
const FieldSearchBarFull: React.FC<React.PropsWithChildren<Props>> = ({
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

  return (
    <View style={[styles.container, style]}>
      {showIcon && (
        <Icon
          name={icon}
          size={Config.fieldSearchBarFullIconSize}
          color={focused ? colors.branding.primary : colors.foreground.brand}
        />
      )}
      <View style={{ marginLeft: showIcon ? 12 : 0, flex: 1 }}>
        <TextInput
          clearButtonMode="while-editing"
          placeholder={placeholder}
          value={internalValue}
          onBlur={onBlur}
          onFocus={onFocus}
          onChangeText={handleChangeText}
          onSubmitEditing={onSubmit}
          placeholderTextColor={colors.foreground.brand}
          style={[
            {
              color: colors.text.medium,
            },
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
