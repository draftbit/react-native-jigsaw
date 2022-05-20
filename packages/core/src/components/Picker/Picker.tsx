import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  ViewStyle,
  StyleProp,
} from "react-native";
import { omit, pick, pickBy, identity } from "lodash";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker as NativePicker } from "@react-native-picker/picker";

import { withTheme } from "../../theming";
import Portal from "../Portal/Portal";
import Button from "../DeprecatedButton";
import Touchable from "../Touchable";
import type { Theme } from "../../styles/DefaultTheme";
import type { IconSlot } from "../../interfaces/Icon";
import { extractStyles } from "../../utilities";

export interface PickerOption {
  value: string;
  label: string;
}

export type PickerProps = {
  placeholder?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle> & { height?: number };
  value?: string;
  options: PickerOption[] | string[];
  onValueChange: (value: string, index: number) => void;
  defaultValue?: string;
  assistiveText?: string;
  label?: string;
  leftIconMode?: "inset" | "outset";
  leftIconName?: string;
  placeholderTextColor?: string;
  rightIconName?: string;
  type?: "solid" | "underline";
  theme: Theme;
  Icon: IconSlot["Icon"];
};

function normalizeOptions(options: PickerProps["options"]): PickerOption[] {
  if (options.length === 0) {
    return [];
  }

  if (typeof options[0] === ("string" || "number")) {
    return (options as string[]).map((option) => ({
      label: String(option),
      value: String(option),
    }));
  }

  if (
    typeof options[0] === "object" &&
    options[0].value !== null &&
    options[0].label !== null
  ) {
    return (options as PickerOption[]).map((option) => {
      return {
        label: String(option.label),
        value: String(option.value),
      };
    });
  }

  throw new Error(
    'Picker options must be either an array of strings or array of { "label": string; "value": string; } objects.'
  );
}

const Picker: React.FC<PickerProps> = ({
  options = [],
  onValueChange,
  defaultValue,
  Icon,
  style,
  placeholder,
  value,
  disabled = false,
  theme,
  assistiveText,
  label,
  leftIconMode = "inset",
  leftIconName,
  placeholderTextColor,
  rightIconName,
  type,
}) => {
  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    value || defaultValue
  );

  const [pickerVisible, togglePickerVisible] = React.useReducer(
    (state) => !state,
    false
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

  const normalizedOptions = normalizeOptions(options);

  const pickerOptions = placeholder
    ? [{ value: placeholder, label: placeholder }, ...normalizedOptions]
    : normalizedOptions;

  const { viewStyles, textStyles } = extractStyles(style);

  const { colors } = theme;

  const borders = [
    "borderRadius",
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomRightRadius",
    "borderBottomLeftRadius",
    "borderTopWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderLeftWidth",
    "borderColor",
    "borderStyle",
  ];

  const borderStyles = {
    ...{
      ...(type === "solid"
        ? {
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderLeftWidth: 1,
          }
        : {}),
      borderBottomWidth: 1,
      borderColor: colors.light,
      borderStyle: "solid",
    },
    ...pick(viewStyles, borders),
  };

  const margins = ["marginLeft", "marginRight", "marginTop", "marginBottom"];

  const marginStyles = pick(viewStyles, margins);

  const stylesWithoutBordersAndMargins = {
    ...{
      height: 60,
      width: "100%",
    },
    ...omit(viewStyles, [...borders, ...margins]),
  };

  const selectedLabel =
    internalValue &&
    ((pickerOptions as unknown as PickerOption[]).find(
      (option) => option.value === internalValue
    )?.label ??
      internalValue);

  const labelText = label ? (
    <Text
      style={{
        textAlign: textStyles.textAlign,
        color: colors.light,
        fontSize: 12,
        paddingBottom: 4,
      }}
    >
      {label}
    </Text>
  ) : null;

  const leftIconOutset = leftIconMode === "outset";

  const leftIcon = leftIconName ? (
    <Icon
      name={leftIconName}
      size={24}
      style={{
        marginRight: 8,
        marginLeft: -6,
      }}
    />
  ) : null;

  const rightIcon = rightIconName ? (
    <Icon
      name={rightIconName}
      size={24}
      style={{
        marginRight: -6,
        marginLeft: 8,
      }}
    />
  ) : null;

  const width = stylesWithoutBordersAndMargins?.width ?? undefined;

  const textAlign = textStyles?.textAlign;

  const paddingLeft =
    leftIconOutset &&
    (!textAlign || textAlign === "left" || textAlign === "justify")
      ? 28 // icon size + 4
      : 0;

  const assistiveTextLabel = assistiveText ? (
    <Text
      style={{
        textAlign,
        width,
        paddingLeft,
        color: colors.light,
        fontSize: 12,
        paddingTop: 4,
      }}
    >
      {assistiveText}
    </Text>
  ) : null;

  const primaryTextStyle = {
    color: colors.light,
    fontSize: 14,
    ...pickBy(textStyles, identity),
    ...(placeholder === internalValue
      ? { color: placeholderTextColor ?? colors.light }
      : {}),
  };

  const handleValueChange = (newValue: string, itemIndex: number) => {
    if (!placeholder || itemIndex > 0) {
      onValueChange?.(newValue, itemIndex);
    }
    setInternalValue(newValue);
  };

  return (
    /* marginsContainer */
    <View style={[styles.marginsContainer, marginStyles]}>
      {/* touchableContainer */}
      <Touchable
        disabled={disabled}
        onPress={togglePickerVisible}
        style={styles.touchableContainer}
      >
        {/* outsetContainer */}
        <View
          pointerEvents="none"
          style={[
            styles.outsetContainer,
            stylesWithoutBordersAndMargins,
            // @ts-expect-error ... rejects border-related { key: undefined }
            !leftIconOutset && borderStyles, // set border if Icon is inset
          ]}
        >
          {leftIcon}

          {/* insetContainer */}
          <View
            style={[
              styles.insetContainer,
              // @ts-expect-error ... rejects border-related { key: undefined }
              leftIconOutset && borderStyles, // set border if Icon is outset
            ]}
          >
            {/* primaryTextContainer */}
            <View style={styles.primaryTextContainer}>
              {labelText}

              <Text style={primaryTextStyle}>
                {String(selectedLabel ?? placeholder)}
              </Text>
            </View>

            {rightIcon}
          </View>
        </View>
        {assistiveTextLabel}
      </Touchable>

      {/* iosPicker */}
      {Platform.OS === "ios" && pickerVisible ? (
        <Portal>
          <View
            style={[
              styles.iosPicker,
              {
                backgroundColor: colors.divider,
              },
            ]}
          >
            <SafeAreaView style={styles.iosSafeArea}>
              <Button
                Icon={Icon}
                type="text"
                onPress={togglePickerVisible}
                style={styles.iosButton}
              >
                {"Close"}
              </Button>

              <NativePicker
                style={styles.iosNativePicker}
                selectedValue={internalValue}
                onValueChange={handleValueChange}
              >
                {(pickerOptions as unknown as PickerOption[]).map((option) => (
                  <NativePicker.Item
                    label={option.label}
                    value={option.value}
                    key={option.value}
                  />
                ))}
              </NativePicker>
            </SafeAreaView>
          </View>
        </Portal>
      ) : null}

      {/* nonIosPicker */}
      {Platform.OS !== "ios" ? (
        <NativePicker
          enabled={!disabled}
          selectedValue={internalValue}
          onValueChange={handleValueChange}
          style={styles.nonIosPicker}
        >
          {(pickerOptions as unknown as PickerOption[]).map((option) => (
            <NativePicker.Item
              label={option.label}
              value={option.value}
              key={option.value}
            />
          ))}
        </NativePicker>
      ) : null}
    </View>
  );
};

export default withTheme(Picker);

const styles = StyleSheet.create({
  marginsContainer: { alignSelf: "stretch" },
  touchableContainer: { alignSelf: "stretch", alignItems: "center" },
  outsetContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  insetContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 12,
    paddingRight: 12,
  },
  primaryTextContainer: { flex: 1 },
  iosPicker: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  iosSafeArea: {
    backgroundColor: "white",
    flexDirection: "column",
    width: "100%",
  },
  iosButton: { alignSelf: "flex-end" },
  iosNativePicker: { backgroundColor: "white" },
  nonIosPicker: {
    opacity: 0,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
  },
});
