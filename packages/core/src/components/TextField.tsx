import * as React from "react";
import {
  View,
  Animated,
  TextInput as NativeTextInput,
  StyleSheet,
  Text,
  I18nManager,
  StyleProp,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  ViewStyle,
  TextStyle,
  LayoutChangeEvent,
  ImageStyle,
} from "react-native";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
import { applyStyles, extractStyles } from "../utilities";

const AnimatedText = Animated.createAnimatedComponent(Text);

const FOCUS_ANIMATION_DURATION = 150;
const BLUR_ANIMATION_DURATION = 180;
const ICON_SIZE = 24;

export type Props = {
  type?: "solid" | "underline";
  defaultValue?: string;
  disabled?: boolean;
  label?: string;
  error?: boolean;
  leftIconName?: string;
  leftIconMode?: "inset" | "outset";
  onChangeText: (
    text: string | NativeSyntheticEvent<TextInputChangeEventData>
  ) => void;
  rightIconName?: string;
  assistiveText?: string;
  multiline?: boolean;
  numberOfLines: number;
  underlineColor?: string;
  activeBorderColor?: string;
  style?: StyleProp<ViewStyle> & { height?: number };
  theme: Theme;
  render?: (
    props: TextInputProps & { ref: (c: NativeTextInput) => void }
  ) => React.ReactNode;
} & TextInputProps &
  IconSlot;

interface State {
  nativeProps: any;
  labeled: Animated.Value;
  focused?: boolean;
  placeholder?: string | undefined;
  labelLayout: {
    measured: boolean;
    width: number;
  };
  value?: string;
}

class TextField extends React.Component<Props, State> {
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    return {
      value:
        typeof nextProps.value !== "undefined"
          ? nextProps.value
          : prevState.value,
    };
  }

  state: State = {
    nativeProps: {},
    labeled: new Animated.Value(this.props.value || this.props.error ? 0 : 1),
    focused: false,
    placeholder: this.props.error ? this.props.placeholder : "",
    labelLayout: {
      measured: false,
      width: 0,
    },
  };

  componentDidMount() {
    if (this.props.defaultValue) {
      this._handleChangeText(this.props.defaultValue);
    }

    if (this.props.placeholder) {
      this._minmizeLabel();
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (
      prevState.focused !== this.state.focused ||
      prevState.value !== this.state.value
    ) {
      // The label should be minimized if the text input is focused, or has text
      // In minimized mode, the label moves up and becomes small
      if (
        this.state.value ||
        this.state.focused ||
        this.props.error ||
        this.props.placeholder
      ) {
        this._minmizeLabel();
      } else {
        this._restoreLabel();
      }
    }

    if (
      prevState.focused !== this.state.focused ||
      prevProps.label !== this.props.label
    ) {
      // Show placeholder text only if the input is focused, or has error, or there's no label
      // We don't show placeholder if there's a label because the label acts as placeholder
      // When focused, the label moves up, so we can show a placeholder
      if (this.state.focused || this.props.error || !this.props.label) {
        this._showPlaceholder();
      } else {
        this._hidePlaceholder();
      }
    }
  }

  _timer = setTimeout(() => {}, 0);

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  _showPlaceholder = () => {
    clearTimeout(this._timer);

    // Set the placeholder in a delay to offset the label animation
    // If we show it immediately, they'll overlap and look ugly
    this._timer = setTimeout(
      () =>
        this.setState({
          placeholder: this.props.placeholder,
        }),
      50
    );
  };

  _hidePlaceholder = () =>
    this.setState({
      placeholder: "",
    });

  _restoreLabel = () =>
    Animated.timing(this.state.labeled, {
      toValue: 1,
      duration: FOCUS_ANIMATION_DURATION,
      useNativeDriver: true,
    }).start();

  _minmizeLabel = () =>
    Animated.timing(this.state.labeled, {
      toValue: 0,
      duration: BLUR_ANIMATION_DURATION,
      useNativeDriver: true,
    }).start();

  _handleFocus = () => {
    if (this.props.disabled) {
      return;
    }

    this.setState({ focused: true });
  };

  _handleBlur = () => {
    if (this.props.disabled) {
      return;
    }

    this.setState({ focused: false });
  };

  _handleChangeText = (
    value: NativeSyntheticEvent<TextInputChangeEventData> | string
  ) => {
    if (this.props.disabled) {
      return;
    }

    if (typeof value === "string") {
      this.setState({ value });
      this.props.onChangeText && this.props.onChangeText(value);
    } else {
      this.setState({ value: value.nativeEvent.text });
      this.props.onChangeText &&
        this.props.onChangeText(value.nativeEvent.text);
    }
  };

  toggleFocus() {
    this.setState((prevState: State) => ({ focused: !prevState.focused }));
  }

  _root: NativeTextInput | undefined = undefined;
  /**
   * @internal
   */
  setNativeProps(args: Props) {
    this.setState((state) => ({
      ...state,
      nativeState: args || {},
    }));
  }

  isFocused() {
    return this._root && this._root.isFocused();
  }

  clear() {
    return this._root && this._root.clear();
  }

  focus() {
    return this._root && this._root.focus();
  }

  blur() {
    return this._root && this._root.blur();
  }

  render() {
    const {
      Icon,
      type = "underline",
      disabled = false,
      label,
      error = false,
      leftIconName,
      leftIconMode,
      rightIconName,
      assistiveText,
      underlineColor: underlineColorProp,
      activeBorderColor: activeBorderColorProp,
      multiline = false,
      numberOfLines = 4,
      style,
      theme: { colors, typography, roundness, disabledOpacity },
      render = (props) => <NativeTextInput {...props} />,
      ...rest
    } = this.props;

    const MINIMIZED_LABEL_Y_OFFSET = -(typography.caption.lineHeight + 4);
    const OUTLINE_MINIMIZED_LABEL_Y_OFFSET = -(16 * 0.5 + 4);
    const MAXIMIZED_LABEL_FONT_SIZE = typography.subtitle1.fontSize;
    const MINIMIZED_LABEL_FONT_SIZE = typography.caption.fontSize;

    const hasActiveOutline = this.state.focused || error;

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
      activeColor = error ? colors.error : activeBorderColorProp;
      placeholderColor = borderColor = colors.light;
      underlineColor = underlineColorProp;
      backgroundColor = colors.background;
    }

    if (rest.placeholderTextColor) {
      placeholderColor = rest.placeholderTextColor;
    }

    const { lineHeight, ...subtitle1 } = typography.subtitle1;

    inputStyle = {
      paddingVertical: 0,
      color: inputTextColor,
      paddingLeft:
        leftIconName && leftIconMode === "inset"
          ? ICON_SIZE + 12 + (type === "solid" ? 16 : 0)
          : 0,
      paddingRight: rightIconName ? ICON_SIZE + 16 + 4 : 12,
      ...subtitle1,
    };

    if (!multiline) {
      inputStyle.height = lineHeight;
    }

    let assistiveTextLeftMargin;
    if (type === "underline") {
      containerStyle = {
        borderTopLeftRadius: roundness,
        borderTopRightRadius: roundness,
        paddingBottom: 12,
        marginTop: 16,
      };

      if (leftIconName && leftIconMode === "outset") {
        assistiveTextLeftMargin = ICON_SIZE + 8;
      } else {
        assistiveTextLeftMargin = 0;
      }
    } else {
      containerStyle = {
        borderRadius: roundness,
        borderColor: hasActiveOutline ? activeColor : borderColor,
        borderWidth: 1,
        paddingTop: label ? 16 * 1.5 : 16,
        paddingBottom: label ? 16 * 0.5 : 16,
        opacity: disabled ? disabledOpacity : 1,
        backgroundColor,
      };

      if (leftIconName && leftIconMode === "inset") {
        assistiveTextLeftMargin = 16 + 4;
      } else if (leftIconName && leftIconMode === "outset") {
        assistiveTextLeftMargin = ICON_SIZE + 8 + 12;
      } else {
        assistiveTextLeftMargin = 12;
      }

      inputStyle.paddingHorizontal = 12;
    }

    if (leftIconName && leftIconMode === "outset") {
      containerStyle.marginLeft = ICON_SIZE + 8;
    }

    let leftIconColor;
    if (error) {
      leftIconColor = colors.error;
    } else if (this.state.focused) {
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
          ? MINIMIZED_LABEL_FONT_SIZE + 4
          : leftIconMode === "outset"
          ? 16
          : 0,
      marginLeft: leftIconMode === "inset" && type === "solid" ? 16 : 0,
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
          translateY: this.state.labeled.interpolate({
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
          scale: this.state.labeled.interpolate({
            inputRange: [0, 1],
            outputRange: [
              MINIMIZED_LABEL_FONT_SIZE / MAXIMIZED_LABEL_FONT_SIZE,
              1,
            ],
          }),
        },
        {
          // Offset label scale since RN doesn't support transform origin
          translateX: this.state.labeled.interpolate({
            inputRange: [0, 1],
            outputRange: [
              -(1 - MINIMIZED_LABEL_FONT_SIZE / MAXIMIZED_LABEL_FONT_SIZE) *
                (this.state.labelLayout.width / 2),
              0,
            ],
          }),
        },
      ],
    };

    const { textStyles } = extractStyles(style);
    const inputStyles = applyStyles(
      [
        styles.input,
        inputStyle,
        type === "solid" ? { marginHorizontal: 12 } : {},
      ],
      textStyles
    );

    const {
      backgroundColor: bgColor,
      padding,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      borderRadius,
      borderWidth,
      borderTopWidth,
      borderRightWidth,
      borderBottomWidth,
      borderLeftWidth,
      borderColor: borderCol,
      ...styleProp
    } = StyleSheet.flatten(style || {}) as ViewStyle & { height?: number };

    return (
      <View style={[styles.container, styleProp]}>
        {leftIconName && leftIconMode === "outset" ? (
          <Icon {...leftIconProps} style={leftIconStyle} />
        ) : null}
        <View
          style={applyStyles([containerStyle], {
            height: style?.height,
            backgroundColor: bgColor,
            padding,
            paddingTop,
            paddingBottom,
            paddingLeft,
            paddingRight,
            borderRadius,
            borderWidth,
            borderTopWidth,
            borderRightWidth,
            borderBottomWidth,
            borderLeftWidth,
            borderColor: borderCol,
          })}
        >
          {type === "underline" ? (
            // When type === 'flat', render an underline
            <Animated.View
              style={[
                styles.underline,
                {
                  backgroundColor:
                    bgColor ||
                    (error
                      ? colors.error
                      : this.state.focused
                      ? activeColor
                      : underlineColor),
                  // Underlines is thinner when input is not focused
                  transform: [{ scaleY: this.state.focused ? 1 : 0.5 }],
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
                    this.state.value || this.state.focused
                      ? this.state.labelLayout.measured
                        ? 1
                        : 0
                      : 1,
                },
              ]}
            >
              <AnimatedText
                onLayout={(e: LayoutChangeEvent) =>
                  this.setState({
                    labelLayout: {
                      width: e.nativeEvent.layout.width,
                      measured: true,
                    },
                  })
                }
                style={[
                  styles.placeholder,
                  type === "solid" ? { paddingHorizontal: 12 } : {},
                  labelStyle,
                  {
                    color: placeholderColor,
                    opacity: this.state.labeled.interpolate({
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
                    opacity: hasActiveOutline ? this.state.labeled : 1,
                  },
                ]}
                numberOfLines={1}
              >
                {label}
              </AnimatedText>
            </View>
          ) : null}

          {leftIconName && leftIconMode === "inset" ? (
            <View
              style={{
                justifyContent: type === "solid" ? "center" : undefined,
              }}
            >
              <Icon {...leftIconProps} style={leftIconStyle} />
            </View>
          ) : null}

          {render({
            ref: (c: NativeTextInput) => {
              this._root = c;
            },
            onChange: this._handleChangeText,
            placeholder: label
              ? this.state.placeholder
              : this.props.placeholder,
            placeholderTextColor: placeholderColor,
            editable: !disabled,
            selectionColor: activeColor,
            multiline,
            numberOfLines,
            onFocus: this._handleFocus,
            onBlur: this._handleBlur,
            underlineColorAndroid: "transparent",
            style: inputStyles,
            ...rest,
            ...this.state.nativeProps,
            value: this.state.value,
          })}
        </View>
        {rightIconName ? (
          <Icon
            name={rightIconName}
            size={ICON_SIZE}
            color={colors.light}
            style={{
              position: "absolute",
              right: 16,
              marginTop: type === "solid" ? MINIMIZED_LABEL_FONT_SIZE + 4 : 16,
            }}
          />
        ) : null}

        {assistiveText ? (
          <Text
            style={[
              {
                color: error ? colors.error : colors.light,
                marginTop: 8,
                marginLeft: assistiveTextLeftMargin,
              },
            ]}
          >
            {assistiveText}
          </Text>
        ) : null}
      </View>
    );
  }
}

export default withTheme(TextField);

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  placeholder: {
    position: "absolute",
    left: 0,
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
});
