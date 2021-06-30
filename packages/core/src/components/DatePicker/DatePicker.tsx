import * as React from "react";
import {
  View,
  Animated,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Platform,
  TextInputProps,
  ImageStyle,
  I18nManager,
  LayoutChangeEvent,
  TextInput as NativeTextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import dateFormat from "dateformat";
import { withTheme } from "../../theming";
import Portal from "../Portal/Portal";
import Button from "../DeprecatedButton";
import Touchable from "../Touchable";
import DateTimePicker from "./DatePickerComponent";

import type { Theme } from "../../styles/DefaultTheme";
import type { IconSlot } from "../../interfaces/Icon";
import { usePrevious } from "../../hooks";

const AnimatedText = Animated.createAnimatedComponent(Text);

const FOCUS_ANIMATION_DURATION = 150;
const BLUR_ANIMATION_DURATION = 180;
const ICON_SIZE = 24;

type Props = {
  style?: StyleProp<ViewStyle> & { height?: number };
  theme: Theme;
  // initialDate?: string;
  // locale?: string;
  // minuteInterval?: number;
  // timeZoneOffsetInMinutes?: number;
  // error?: boolean;
  // type?: string;
  date?: Date;
  format?: string;
  onDateChange?: (data?: Date) => void;
  initialValue?: Date;
  disabled?: boolean;
  mode?: "date" | "time" | "datetime";
  type?: "solid" | "underline";
  label?: string;
  placeholder?: string;
  leftIconName?: string;
  leftIconMode?: "outset" | "inset";
  rightIconName?: string;
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

const DatePicker: React.FC<Props> = ({
  Icon,
  style,
  theme: { colors, typography, roundness, disabledOpacity },
  date,
  onDateChange = () => {},
  initialValue,
  disabled = false,
  mode = "date",
  format,
  type = "underline",
  leftIconName,
  rightIconName,
  leftIconMode = "inset",
  label,
  placeholder,
  ...props
}) => {
  const [value, setValue] = React.useState<any>(date);
  const [pickerVisible, setPickerVisible] = React.useState(false);
  const [labeled] = React.useState<Animated.Value>(
    new Animated.Value(date ? 0 : 1)
  );
  const [placeholder1, setPlaceholder1] = React.useState("");
  const [focused, setFocused] = React.useState<boolean>(false);
  const [labelLayout, setLabelLayout] = React.useState<{
    measured: Boolean;
    width: number;
  }>({ measured: false, width: 0 });

  const previousInitialValue = usePrevious(initialValue);
  React.useEffect(() => {
    if (initialValue !== previousInitialValue) {
      setValue(initialValue);
      onDateChange(initialValue);
    }
  }, [initialValue, previousInitialValue, setValue, onDateChange]);

  const getValidDate = (): Date => {
    if (!value) {
      return new Date();
    }
    return typeof value?.getMonth === "function" ? value : new Date();
  };

  const formatDate = (): string => {
    if (!value) return "";
    let newDate = getValidDate();

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
    setValue(date);
  }, [date]);

  React.useEffect(() => {
    if (value || focused || placeholder1) {
      // _minmizeLabel();
      Animated.timing(labeled, {
        toValue: 0,
        duration: BLUR_ANIMATION_DURATION,
        useNativeDriver: true,
      }).start();
    } else {
      // _restoreLabel();
      Animated.timing(labeled, {
        toValue: 1,
        duration: FOCUS_ANIMATION_DURATION,
        useNativeDriver: true,
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
  const MAXIMIZED_LABEL_FONT_SIZE = typography.subtitle1.fontSize;
  const MINIMIZED_LABEL_FONT_SIZE = typography.caption.fontSize;

  const hasActiveOutline = focused;

  let inputTextColor,
    activeColor,
    underlineColor,
    borderColor,
    placeholderColor,
    containerStyle: StyleProp<ViewStyle>,
    backgroundColor,
    inputStyle: StyleProp<TextStyle>;

  inputTextColor = colors.strong;
  if (disabled) {
    activeColor = colors.light;
    placeholderColor = colors.light;
    borderColor = "transparent";
    underlineColor = "transparent";
    backgroundColor = colors.divider;
  } else {
    activeColor = colors.primary;
    placeholderColor = borderColor = colors.light;
    underlineColor = colors.light;
    backgroundColor = colors.background;
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
      borderTopLeftRadius: roundness,
      borderTopRightRadius: roundness,
      paddingBottom: 12,
      marginTop: 16,
    };
  } else {
    containerStyle = {
      borderRadius: roundness,
      borderColor: hasActiveOutline ? activeColor : borderColor,
      borderWidth: 1,
      paddingTop: labeled ? 16 * 1.5 : 16,
      paddingBottom: labeled ? 16 * 0.5 : 16,
      opacity: disabled ? disabledOpacity : 1,
      backgroundColor,
    };

    inputStyle.paddingHorizontal = 12;
  }

  if (leftIconName && leftIconMode === "outset") {
    containerStyle.marginLeft = ICON_SIZE + 8;
  }

  let leftIconColor;
  if (focused) {
    leftIconColor = colors.primary;
  } else {
    leftIconColor = colors.light;
  }

  const leftIconProps = {
    size: 24,
    color: leftIconColor,
    name: leftIconName || "",
  };

  const leftIconStyle: ImageStyle = {
    position: "absolute",
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

  // const render = (props) => <NativeTextInput {...props} />;

  return (
    <View style={[styles.container, style]}>
      <Touchable disabled={disabled} onPress={toggleVisibility}>
        <View pointerEvents="none">
          <View style={[styles.container, style]}>
            {leftIconName && leftIconMode === "outset" ? (
              <Icon {...leftIconProps} style={leftIconStyle} />
            ) : null}
            <View
              style={[containerStyle, style ? { height: style.height } : {}]}
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

              {label ? (
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
                        color: colors.light,
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
                        color: placeholderColor,
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
                  style={{
                    ...leftIconStyle,
                    marginLeft: type === "solid" ? 16 : 0,
                  }}
                />
              ) : null}

              <NativeTextInput
                value={formatDate()}
                placeholder={label ? placeholder1 : placeholder}
                editable={!disabled}
                placeholderTextColor={placeholderColor}
                selectionColor={activeColor}
                onFocus={_handleFocus}
                onBlur={_handleBlur}
                underlineColorAndroid={"transparent"}
                style={inputStyles}
                {...props}
              />
            </View>
            {rightIconName ? (
              <Icon
                name={rightIconName}
                size={ICON_SIZE}
                color={colors.light}
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
                backgroundColor: colors.divider,
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
              {Platform.OS === "ios" && (
                <Button
                  Icon={Icon}
                  type="text"
                  onPress={toggleVisibility}
                  style={styles.closeButton}
                >
                  Close
                </Button>
              )}

              <DateTimePicker
                value={getValidDate()}
                mode={mode}
                isVisible={pickerVisible}
                toggleVisibility={toggleVisibility}
                onChange={(_event: any, data: any) => {
                  Platform.OS === "ios" ? null : toggleVisibility();
                  setValue(data);
                  onDateChange(data);
                }}
              />
            </View>
          </View>
        </Portal>
      )}
    </View>
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
  pickerContainer: { flexDirection: "column", width: "100%" },
  closeButton: {
    alignSelf: "flex-end",
  },
});

export default withTheme(DatePicker);
