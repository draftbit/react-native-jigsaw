/* eslint-disable prefer-const */

import * as React from "react";
import {
  View,
  Animated,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInputProps,
  ImageStyle,
  I18nManager,
  LayoutChangeEvent,
  TextInput as NativeTextInput,
  Keyboard,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import omit from "lodash.omit";

import dateFormat from "dateformat";
import { withTheme } from "@draftbit/theme";
import Portal from "../Portal/Portal";
import Touchable from "../Touchable";
import DateTimePicker from "./DatePickerComponent";

import type { ReadTheme } from "@draftbit/theme";
import type { IconSlot } from "../../interfaces/Icon";
import {
  extractStyles,
  marginStyleNames,
  paddingStyleNames,
  positionStyleNames,
} from "../../utilities";
import { parseDate } from "./parseDate";

const AnimatedText = Animated.createAnimatedComponent(Text);

const FOCUS_ANIMATION_DURATION = 150;
const BLUR_ANIMATION_DURATION = 180;
const ICON_SIZE = 24;

type Props = {
  style?: StyleProp<ViewStyle | TextStyle> & { height?: number };
  theme: ReadTheme;
  // initialDate?: string;
  // locale?: string;
  // minuteInterval?: number;
  // timeZoneOffsetInMinutes?: number;
  // error?: boolean;
  date?: Date | string;
  format?: string;
  onDateChange?: (data?: Date) => void;
  defaultValue?: Date | string;
  disabled?: boolean;
  mode?: "date" | "time" | "datetime";
  type?: "solid" | "underline";
  label?: string;
  labelSize?: number;
  labelColor?: string;
  placeholder?: string;
  leftIconName?: string;
  leftIconMode?: "outset" | "inset";
  rightIconName?: string;
  borderColor?: string;
  borderColorActive?: string;
  autoDismissKeyboard?: boolean;
  minimumDate?: Date | string;
  maximumDate?: Date | string;
  hideLabel?: boolean;
  inline?: boolean;
} & IconSlot &
  TextInputProps;

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DatePicker: React.FC<React.PropsWithChildren<Props>> = ({
  Icon,
  style,
  theme: { colors, typography },
  date,
  onDateChange = () => {},
  defaultValue,
  disabled = false,
  mode = "date",
  format,
  type = "underline",
  leftIconName,
  rightIconName,
  leftIconMode = "inset",
  label,
  labelSize,
  labelColor,
  placeholder,
  borderColor: inputBorderColor,
  borderColorActive: inputBorderColorActive,
  autoDismissKeyboard = true,
  minimumDate,
  maximumDate,
  hideLabel = false,
  inline = false,
  ...props
}) => {
  const [value, setValue] = React.useState<Date | undefined>(
    parseDate(date) || parseDate(defaultValue)
  );

  React.useEffect(() => {
    if (defaultValue != null) {
      setValue(parseDate(defaultValue));
    }
  }, [defaultValue]);

  const [pickerVisible, setPickerVisible] = React.useState(false);
  const [labeled] = React.useState<Animated.Value>(
    new Animated.Value(date ? 0 : 1)
  );
  const [placeholder1, setPlaceholder1] = React.useState("");
  const [focused, setFocused] = React.useState<boolean>(false);
  const [labelLayout, setLabelLayout] = React.useState<{
    measured: boolean;
    width: number;
  }>({ measured: false, width: 0 });

  const { textStyles, viewStyles } = extractStyles(style);

  const getValidDate = (): Date => {
    if (!value) {
      return new Date();
    }
    return typeof value?.getMonth === "function" ? value : new Date();
  };

  const formatDate = (): string => {
    if (!value) return "";
    const newDate = getValidDate();

    if (format) return dateFormat(newDate, format);

    if (mode === "time") {
      return `${newDate.toLocaleTimeString()}`;
    }

    if (mode === "datetime") {
      return `${newDate.toLocaleString()}`;
    }

    return `${
      MONTHS[newDate.getMonth()]
    } ${newDate.getDate()}, ${newDate.getFullYear()}`;
  };

  const toggleVisibility = async () => {
    setPickerVisible(!pickerVisible);
    focused ? _handleBlur() : _handleFocus();
  };
  const insets = useSafeAreaInsets();

  // const _restoreLabel = () =>
  //   Animated.timing(labeled, {
  //     toValue: 1,
  //     duration: FOCUS_ANIMATION_DURATION,
  //     useNativeDriver: true,
  //   }).start();

  // const _minmizeLabel = () =>
  //   Animated.timing(labeled, {
  //     toValue: 0,
  //     duration: BLUR_ANIMATION_DURATION,
  //     useNativeDriver: true,
  //   }).start();

  // const _showPlaceholder = () =>
  //   setTimeout(() => setPlaceholder1(placeholder || ""), 50);

  const _hidePlaceholder = () => {
    setPlaceholder1("");
  };

  React.useEffect(() => {
    setValue(parseDate(date));
  }, [date]);

  React.useEffect(() => {
    if (value || focused || placeholder1) {
      // _minmizeLabel();
      Animated.timing(labeled, {
        toValue: 0,
        duration: BLUR_ANIMATION_DURATION,
        useNativeDriver: Platform.OS !== "web",
      }).start();
    } else {
      // _restoreLabel();
      Animated.timing(labeled, {
        toValue: 1,
        duration: FOCUS_ANIMATION_DURATION,
        useNativeDriver: Platform.OS !== "web",
      }).start();
    }
  }, [value, focused, placeholder1, labeled]);

  React.useEffect(() => {
    const _showPlaceholder = () =>
      setTimeout(() => setPlaceholder1(placeholder || ""), 50);
    if (focused || !label) {
      _showPlaceholder();
    } else {
      _hidePlaceholder();
    }
    return () => {
      clearTimeout(_showPlaceholder());
    };
  }, [focused, label, placeholder]);

  React.useEffect(() => {
    if (pickerVisible && autoDismissKeyboard) {
      Keyboard.dismiss();
    }
  }, [pickerVisible, autoDismissKeyboard]);

  const _handleFocus = () => {
    if (disabled) {
      return;
    }

    setFocused(true);
  };

  const _handleBlur = () => {
    if (disabled) {
      return;
    }
    setFocused(false);
  };

  const MINIMIZED_LABEL_Y_OFFSET = -(typography.caption.lineHeight + 4);
  const OUTLINE_MINIMIZED_LABEL_Y_OFFSET = -(16 * 0.5 + 4);
  const MAXIMIZED_LABEL_FONT_SIZE =
    textStyles.fontSize || typography.subtitle1.fontSize;
  const MINIMIZED_LABEL_FONT_SIZE = labelSize
    ? labelSize
    : typography.caption.fontSize;

  const hasActiveOutline = focused;

  let inputTextColor,
    activeColor,
    underlineColor,
    borderColor =
      viewStyles.borderColor ?? inputBorderColor ?? colors.text.strong,
    placeholderColor,
    containerStyle: StyleProp<ViewStyle>,
    backgroundColor,
    inputStyle: StyleProp<TextStyle>;

  inputTextColor = colors.text.strong;
  if (disabled) {
    activeColor = colors.border.base;
    placeholderColor = colors.text.light;
    borderColor = "transparent";
    underlineColor = "transparent";
    backgroundColor = colors.border.base;
  } else {
    activeColor = inputBorderColorActive || colors.branding.primary;
    placeholderColor = colors.text.light;
    underlineColor =
      viewStyles.borderColor ?? inputBorderColor ?? colors.border.base;
    backgroundColor = colors.background.base;
  }

  const { lineHeight, ...subtitle1 } = typography.subtitle1;

  inputStyle = {
    paddingVertical: 0,
    color: inputTextColor,
    paddingLeft:
      leftIconName && leftIconMode === "inset"
        ? ICON_SIZE + (type === "solid" ? 16 : 12)
        : 0,
    paddingRight: rightIconName ? ICON_SIZE + 16 + 4 : 12,
    ...subtitle1,
    height: lineHeight,
  };

  if (type === "underline") {
    containerStyle = {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      paddingBottom: 12,
      marginTop: 16,
    };
  } else {
    containerStyle = {
      borderRadius: 8,
      borderColor: hasActiveOutline ? activeColor : borderColor,
      borderWidth: viewStyles.borderWidth ?? 1,
      paddingTop: labeled && !hideLabel ? 16 * 1.5 : 16,
      paddingBottom: labeled && !hideLabel ? 16 * 0.5 : 16,
      opacity: disabled ? 0.5 : 1,
      backgroundColor,
    };

    //@ts-ignore
    inputStyle.paddingHorizontal = 12;
  }

  if (leftIconName && leftIconMode === "outset") {
    containerStyle.marginLeft = ICON_SIZE + 8;
  }

  let leftIconColor;
  if (focused) {
    leftIconColor = colors.branding.primary;
  } else {
    leftIconColor = colors.text.light;
  }

  const leftIconProps = {
    size: 24,
    color: leftIconColor,
    name: leftIconName || "",
  };

  const leftIconStyle: ImageStyle = {
    position: "absolute",
    top: 0,
    marginTop:
      type === "solid"
        ? leftIconMode === "inset"
          ? MINIMIZED_LABEL_FONT_SIZE + 4
          : 16
        : leftIconMode === "outset"
          ? 16
          : 0,
  };

  const labelStyle = {
    ...typography.subtitle1,
    top: type === "solid" ? 16 : 0,
    fontFamily: textStyles?.fontFamily,
    left:
      leftIconName && leftIconMode === "inset"
        ? ICON_SIZE + (type === "solid" ? 16 : 12)
        : 0,
    transform: [
      {
        // Move label to top
        translateY: labeled.interpolate({
          inputRange: [0, 1],
          outputRange: [
            type === "solid"
              ? OUTLINE_MINIMIZED_LABEL_Y_OFFSET
              : MINIMIZED_LABEL_Y_OFFSET,
            0,
          ],
        }),
      },
      {
        // Make label smaller
        scale: labeled.interpolate({
          inputRange: [0, 1],
          outputRange: [
            MINIMIZED_LABEL_FONT_SIZE / MAXIMIZED_LABEL_FONT_SIZE,
            1,
          ],
        }),
      },
      {
        // Offset label scale since RN doesn't support transform origin
        translateX: labeled.interpolate({
          inputRange: [0, 1],
          outputRange: [
            -(1 - MINIMIZED_LABEL_FONT_SIZE / MAXIMIZED_LABEL_FONT_SIZE) *
              (labelLayout.width / 2),
            0,
          ],
        }),
      },
    ],
  };

  const inputStyles = [
    styles.input,
    inputStyle,
    type === "solid" ? { marginHorizontal: 12 } : {},
  ];

  React.useEffect(() => {
    const currentDate = parseDate(value);

    if (!currentDate) return;

    const minDate = parseDate(minimumDate);
    const maxDate = parseDate(maximumDate);

    let newDate = currentDate;

    if (minDate && currentDate < minDate) {
      newDate = minDate;
    }
    if (maxDate && currentDate > maxDate) {
      newDate = maxDate;
    }

    if (newDate !== currentDate) {
      setValue(newDate);
      onDateChange(newDate);
    }
  }, [value, minimumDate, maximumDate, onDateChange]);

  const Picker = (
    <DateTimePicker
      value={getValidDate()}
      mode={mode}
      isVisible={inline || pickerVisible}
      toggleVisibility={toggleVisibility}
      minimumDate={parseDate(minimumDate)}
      maximumDate={parseDate(maximumDate)}
      onChange={(_event: any, data: any) => {
        toggleVisibility();
        setValue(data);
        onDateChange(data);
      }}
      inline={inline}
    />
  );

  if (inline) {
    return <View style={style as StyleProp<ViewStyle>}>{Picker}</View>;
  }

  return (
    <>
      <Touchable disabled={disabled} onPress={toggleVisibility}>
        <View pointerEvents="none">
          <View
            style={StyleSheet.flatten([
              styles.container,
              omit(style as ViewStyle, [
                ...paddingStyleNames,
                "backgroundColor",
                "borderWidth",
              ]),
            ])}
          >
            {leftIconName && leftIconMode === "outset" ? (
              <Icon
                {...leftIconProps}
                style={leftIconStyle as ImageStyle & ViewStyle}
              />
            ) : null}
            <View
              style={StyleSheet.flatten([
                containerStyle,
                style ? { height: style.height } : {},
                omit(style as ViewStyle, [
                  ...marginStyleNames,
                  ...positionStyleNames,
                  "borderColor",
                  "borderWidth",
                ]),
              ])}
            >
              {type === "underline" ? (
                // When type === 'flat', render an underline
                <Animated.View
                  style={[
                    styles.underline,
                    {
                      backgroundColor: focused ? activeColor : underlineColor,
                      // Underlines is thinner when input is not focused
                      transform: [{ scaleY: focused ? 1 : 0.5 }],
                    },
                  ]}
                />
              ) : null}

              {label && !hideLabel ? (
                // Position colored placeholder and gray placeholder on top of each other and crossfade them
                // This gives the effect of animating the color, but allows us to use native driver
                <View
                  pointerEvents="none"
                  style={[
                    StyleSheet.absoluteFill,
                    {
                      opacity:
                        // Hide the label in minimized state until we measure its width
                        date || focused ? (labelLayout.measured ? 1 : 0) : 1,
                    },
                  ]}
                >
                  <AnimatedText
                    onLayout={(e: LayoutChangeEvent) =>
                      setLabelLayout({
                        width: e.nativeEvent.layout.width,
                        measured: true,
                      })
                    }
                    style={[
                      styles.placeholder,
                      type === "solid" ? { paddingHorizontal: 12 } : {},
                      labelStyle,
                      {
                        color: labelColor || colors.text.light,
                        opacity: labeled.interpolate({
                          inputRange: [0, 1],
                          outputRange: [hasActiveOutline ? 1 : 0, 0],
                        }),
                      },
                    ]}
                    numberOfLines={1}
                  >
                    {label}
                  </AnimatedText>
                  <AnimatedText
                    style={[
                      styles.placeholder,
                      type === "solid" ? { paddingHorizontal: 12 } : {},
                      labelStyle,
                      {
                        color: labelColor || placeholderColor,
                        opacity: hasActiveOutline ? labeled : 1,
                      },
                    ]}
                    numberOfLines={1}
                  >
                    {label}
                  </AnimatedText>
                </View>
              ) : null}

              {leftIconName && leftIconMode === "inset" ? (
                <Icon
                  {...leftIconProps}
                  style={
                    {
                      ...leftIconStyle,
                      marginLeft: type === "solid" ? 16 : 0,
                    } as ImageStyle & ViewStyle
                  }
                />
              ) : null}

              <NativeTextInput
                value={formatDate()}
                placeholder={label && !hideLabel ? placeholder1 : placeholder}
                editable={!disabled}
                placeholderTextColor={placeholderColor}
                selectionColor={activeColor}
                onFocus={_handleFocus}
                onBlur={_handleBlur}
                underlineColorAndroid={"transparent"}
                style={[inputStyles, textStyles]}
                {...props}
              />
            </View>
            {rightIconName ? (
              <Icon
                name={rightIconName}
                size={ICON_SIZE}
                color={colors.text.light}
                style={{
                  position: "absolute",
                  right: 16,
                  marginTop:
                    type === "solid" ? MINIMIZED_LABEL_FONT_SIZE + 4 : 16,
                }}
              />
            ) : null}
          </View>
        </View>
      </Touchable>
      {pickerVisible && (
        <Portal>
          <View
            style={[
              styles.picker,
              {
                backgroundColor: colors.border.base,
              },
            ]}
          >
            <View
              style={[
                styles.pickerContainer,
                {
                  paddingTop: insets.top,
                  paddingBottom: insets.bottom,
                  paddingLeft: insets.left,
                  paddingRight: insets.right,
                },
              ]}
            >
              {Picker}
            </View>
          </View>
        </Portal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  picker: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  underline: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 2,
  },
  input: {
    flexGrow: 1,
    justifyContent: "center",
    textAlignVertical: "center",
    margin: 0,
    textAlign: I18nManager.isRTL ? "right" : "left",
  },
  placeholder: {
    position: "absolute",
    left: 0,
  },
  pickerContainer: { flexDirection: "column", width: "100%", zIndex: 100 },
});

export default withTheme(DatePicker);
