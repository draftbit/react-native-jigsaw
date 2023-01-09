import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  ViewStyle,
  StyleProp,
  Dimensions,
} from "react-native";
import { omit, pickBy, identity, isObject } from "lodash";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker as NativePicker } from "@react-native-picker/picker";

import { withTheme } from "../../theming";
import Portal from "../Portal/Portal";
import Button from "../DeprecatedButton";
import Touchable from "../Touchable";
import type { Theme } from "../../styles/DefaultTheme";
import type { IconSlot } from "../../interfaces/Icon";
import {
  extractStyles,
  extractBorderAndMarginStyles,
  borderStyleNames,
  marginStyleNames,
} from "../../utilities";

export interface PickerOption {
  value: string;
  label: string;
}

export type PickerProps = {
  error?: any;
  placeholder?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle> & { height?: number };
  value?: string;
  options: PickerOption[] | string[];
  onValueChange: (value: string, index: number) => void;
  defaultValue?: string;
  assistiveText?: string;
  label?: string;
  iconColor?: string;
  iconSize?: number;
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
    isObject(options[0]) &&
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

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("screen");
const isIos = Platform.OS === "ios";
const unstyledColor = "rgba(165, 173, 183, 1)";
const disabledColor = "rgb(240, 240, 240)";
const errorColor = "rgba(255, 69, 100, 1)";

const Picker: React.FC<PickerProps> = ({
  error,
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
  iconColor = unstyledColor,
  iconSize = 24,
  leftIconMode = "inset",
  leftIconName,
  placeholderTextColor = unstyledColor,
  rightIconName,
  type = "solid",
}) => {
  const androidPickerRef = React.useRef<any | undefined>(undefined);

  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    value || defaultValue
  );

  const [pickerVisible, setPickerVisible] = React.useState(false);

  const togglePickerVisible = () => {
    setPickerVisible(!pickerVisible);
  };

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

  React.useEffect(() => {
    if (pickerVisible && androidPickerRef.current) {
      androidPickerRef?.current?.focus();
    }
  }, [pickerVisible, androidPickerRef]);

  const normalizedOptions = normalizeOptions(options);

  const pickerOptions = placeholder
    ? [{ value: placeholder, label: placeholder }, ...normalizedOptions]
    : normalizedOptions;

  const { colors } = theme;

  const { viewStyles, textStyles } = extractStyles(style);

  const additionalBorderStyles = ["backgroundColor"];

  const additionalMarginStyles = [
    "bottom",
    "height",
    "left",
    "maxHeight",
    "maxWidth",
    "minHeight",
    "minWidth",
    "overflow",
    "position",
    "right",
    "top",
    "width",
    "zIndex",
  ];

  const {
    borderStyles: extractedBorderStyles,
    marginStyles: extractedMarginStyles,
  } = extractBorderAndMarginStyles(
    viewStyles,
    additionalBorderStyles,
    additionalMarginStyles
  );

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
      borderColor: unstyledColor,
      borderStyle: "solid",
    },
    ...extractedBorderStyles,
    ...(error ? { borderColor: errorColor } : {}),
    ...(disabled
      ? { borderColor: "transparent", backgroundColor: disabledColor }
      : {}),
  };

  const marginStyles = {
    height: 60,
    ...extractedMarginStyles,
  };

  const stylesWithoutBordersAndMargins = omit(viewStyles, [
    ...borderStyleNames,
    ...marginStyleNames,
    ...additionalBorderStyles,
    ...additionalMarginStyles,
  ]);

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
        color: unstyledColor,
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
      color={disabled ? unstyledColor : iconColor}
      size={iconSize}
      style={{
        marginRight: 4,
        marginLeft: 4,
      }}
    />
  ) : null;

  const rightIcon = rightIconName ? (
    <Icon
      name={rightIconName}
      color={disabled ? unstyledColor : iconColor}
      size={iconSize}
      style={{
        marginRight: -10,
        marginLeft: 8,
      }}
    />
  ) : null;

  const textAlign = textStyles?.textAlign;

  const calculateLeftPadding = () => {
    if (leftIconOutset) {
      if (textAlign === "center") {
        return iconSize - Math.abs(8 - iconSize);
      }

      return iconSize + 8;
    }

    return 0;
  };

  const assistiveTextLabel = assistiveText ? (
    <Text
      style={{
        textAlign,
        width: "100%",
        paddingLeft: calculateLeftPadding(),
        color: unstyledColor,
        fontSize: 12,
        paddingTop: 4,
      }}
    >
      {assistiveText}
    </Text>
  ) : null;

  const primaryTextStyle = {
    color: unstyledColor,
    fontSize: 14,
    ...pickBy(textStyles, identity),
    ...(placeholder === internalValue ? { color: placeholderTextColor } : {}),
    ...(disabled ? { color: unstyledColor } : {}),
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
            !leftIconOutset ? (borderStyles as PickerProps["style"]) : {},
          ]}
        >
          {leftIcon}

          {/* insetContainer */}
          <View
            style={[
              styles.insetContainer,
              leftIconOutset ? (borderStyles as PickerProps["style"]) : {},
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
      {isIos && pickerVisible ? (
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
      {!isIos && pickerVisible ? (
        <NativePicker
          enabled={pickerVisible}
          selectedValue={internalValue}
          onValueChange={handleValueChange}
          style={styles.nonIosPicker}
          ref={androidPickerRef}
          onBlur={() => setPickerVisible(false)}
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

const styles = StyleSheet.create({
  marginsContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    width: "100%",
    maxWidth: deviceWidth,
  },
  touchableContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignSelf: "stretch",
    alignItems: "center",
  },
  outsetContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  insetContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 12,
    paddingRight: 12,
  },
  primaryTextContainer: {
    flex: 1,
  },
  iosPicker: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    maxWidth: deviceWidth,
    maxHeight: deviceHeight,
  },
  iosSafeArea: {
    backgroundColor: "white",
    flexDirection: "column",
    width: "100%",
    maxWidth: deviceWidth,
  },
  iosButton: {
    alignSelf: "flex-end",
  },
  iosNativePicker: {
    backgroundColor: "white",
  },
  nonIosPicker: {
    opacity: 0,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    maxWidth: deviceWidth,
    maxHeight: deviceHeight,
  },
});

export default withTheme(Picker);
