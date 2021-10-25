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
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
import Config from "./Config";
import { usePrevious } from "../hooks";

type Props = {
  icon?: string;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  onChange?: (text: string) => void;
  onSubmit?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  value?: string;
  initialValue?: string; // deprecated
  defaultValue?: string;
} & IconSlot;

const FieldSearchBarFull: React.FC<Props> = ({
  Icon,
  icon = "search",
  placeholder = "",
  style,
  theme: { colors, typography },
  onChange: changeOverride,
  onSubmit: submitOverride,
  value,
  initialValue,
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

  const previousInitialValue = usePrevious(initialValue);
  React.useEffect(() => {
    if (initialValue !== previousInitialValue) {
      onChange(initialValue);
    }
  }, [initialValue, previousInitialValue, onChange]);

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
    <View style={[{ padding: 16 }, styles.container, style]}>
      <Icon
        name={icon}
        size={Config.fieldSearchBarFullIconSize}
        color={focused ? colors.primary : colors.light}
      />
      <View style={{ marginLeft: 12, flex: 1 }}>
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
