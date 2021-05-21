import React, { Component } from "react";
import {
  Animated,
  Easing,
  View,
  I18nManager,
  ViewProps,
  StyleProp,
  ViewStyle,
  LayoutChangeEvent,
} from "react-native";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  GROUPS,
  PROP_TYPES,
} from "@draftbit/types";

const INDETERMINATE_WIDTH_FACTOR = 0.3;
const BAR_WIDTH_ZERO_POSITION =
  INDETERMINATE_WIDTH_FACTOR / (1 + INDETERMINATE_WIDTH_FACTOR);

type Props = {
  borderColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  children?: React.ReactNode;
  color?: string;
  height?: number;
  style?: StyleProp<ViewStyle>;
  unfilledColor?: string;
  width?: number;
  animated?: boolean;
  indeterminate?: boolean;
  indeterminateAnimationDuration?: number;
  progress?: number;
  useNativeDriver?: boolean;
  animationConfig?: Animated.AnimationConfig;
  animationType?: "decay" | "timing" | "spring";
} & ViewProps;

interface State {
  width: number;
  progress: Animated.Value;
  animationValue: Animated.Value;
}

export default class ProgressBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { progress: progressP = 0, indeterminate = false } = props;
    const progress = Math.min(Math.max(progressP, 0), 1);
    this.state = {
      width: 0,
      progress: new Animated.Value(
        indeterminate ? INDETERMINATE_WIDTH_FACTOR : progress
      ),
      animationValue: new Animated.Value(BAR_WIDTH_ZERO_POSITION),
    };
  }

  componentDidMount() {
    const { indeterminate = false } = this.props;
    if (indeterminate) {
      this.animate();
    }
  }

  componentDidUpdate(prevProps: Props) {
    const {
      indeterminate = false,
      useNativeDriver = false,
      progress: progressP = 0,
      animationType = "spring",
      animationConfig = { bounciness: 0 },
      animated = true,
    } = this.props;

    if (prevProps.indeterminate !== indeterminate) {
      if (indeterminate) {
        this.animate();
      } else {
        Animated.spring(this.state.animationValue, {
          toValue: BAR_WIDTH_ZERO_POSITION,
          useNativeDriver,
        }).start();
      }
    }
    if (
      prevProps.indeterminate !== indeterminate ||
      prevProps.progress !== progressP
    ) {
      const progress = this.props.indeterminate
        ? INDETERMINATE_WIDTH_FACTOR
        : Math.min(Math.max(progressP, 0), 1);

      if (animated) {
        Animated[animationType](this.state.progress, {
          ...animationConfig,
          toValue: progress,
          velocity: 0, //adjust this value if animation fails - velocity is required
          useNativeDriver,
        }).start();
      } else {
        this.state.progress.setValue(progress);
      }
    }
  }

  handleLayout = (event: LayoutChangeEvent) => {
    const { width = 150, onLayout } = this.props;
    if (!width) {
      this.setState({ width: event.nativeEvent.layout.width });
    }
    if (onLayout) {
      onLayout(event);
    }
  };

  animate() {
    const { useNativeDriver = false, indeterminateAnimationDuration = 1000 } =
      this.props;
    this.state.animationValue.setValue(0);
    Animated.timing(this.state.animationValue, {
      toValue: 1,
      duration: indeterminateAnimationDuration,
      easing: Easing.linear,
      isInteraction: false,
      useNativeDriver,
    }).start((endState) => {
      if (endState.finished) {
        this.animate();
      }
    });
  }

  render() {
    const {
      borderColor,
      borderRadius = 4,
      borderWidth = 1,
      children,
      color = "rgba(0, 122, 255, 1)",
      style,
      unfilledColor,
      width = 150,
      ...restProps
    } = this.props;

    const innerWidth = Math.max(0, width || this.state.width) - borderWidth * 2;
    const containerStyle: StyleProp<ViewStyle> = {
      width,
      borderWidth,
      borderColor: borderColor || color,
      borderRadius,
      overflow: "hidden",
      backgroundColor: unfilledColor,
    };
    const progressStyle = {
      backgroundColor: color,
      // Always take up full height of container.
      height: "100%",
      transform: [
        {
          translateX: this.state.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [innerWidth * -INDETERMINATE_WIDTH_FACTOR, innerWidth],
          }),
        },
        {
          translateX: this.state.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [innerWidth / (I18nManager.isRTL ? 2 : -2), 0],
          }),
        },
        {
          // Interpolation a temp workaround for https://github.com/facebook/react-native/issues/6278
          scaleX: this.state.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.0001, 1],
          }),
        },
      ],
    };

    return (
      <View
        style={[containerStyle, style]}
        onLayout={this.handleLayout}
        {...restProps}
      >
        <Animated.View style={progressStyle} />
        {children}
      </View>
    );
  }
}
export const SEED_DATA = [
  {
    name: "Progress Bar",
    tag: "ProgressBar",
    description: "A horizontal bar used to show completed progress",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Status_Progress.png",
    supports_list_render: false,
    props: {
      progress: {
        group: GROUPS.data,
        label: "Progress",
        description: "The amount of progress to display. A number 0-1.",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        defaultValue: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
        precision: 2,
        editable: true,
        required: true,
      },
      color: {
        group: GROUPS.basic,
        label: "Progress Color",
        description: "Custom color for the progress shown",
        formType: FORM_TYPES.color,
        propType: PROP_TYPES.THEME,
        defaultValue: null,
        editable: true,
        required: true,
      },
      unfilledColor: {
        group: GROUPS.basic,
        label: "Unfilled Color",
        description:
          "The color of the unfilled portion of the progress bar(eg. if at 50% then this is the color of the other 50%)",
        formType: FORM_TYPES.color,
        propType: PROP_TYPES.THEME,
        defaultValue: null,
        editable: true,
        required: true,
      },
      borderRadius: {
        group: GROUPS.basic,
        label: "Border Radius",
        description: "The border radius of the bar",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        defaultValue: 10,
        min: 0,
        max: 100,
        step: 1,
        precision: 1,
        editable: true,
        required: true,
      },
      borderWidth: {
        group: GROUPS.basic,
        label: "Border Width",
        description: "The width of the border that surrounds the bar.",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        defaultValue: 1,
        min: 0,
        max: 15,
        step: 1,
        precision: 1,
        editable: true,
        required: true,
      },
      borderColor: {
        group: GROUPS.basic,
        label: "Border Color",
        description: "Custom color for border of the entire bar",
        formType: FORM_TYPES.color,
        propType: PROP_TYPES.THEME,
        defaultValue: null,
        editable: true,
        required: true,
      },
      animationType: {
        group: GROUPS.basic,
        label: "Animation Type",
        description:
          "The type of animation that occurs when the bar is filled(Default is Spring)",
        formType: FORM_TYPES.flatArray,
        propType: PROP_TYPES.STRING,
        defaultValue: "spring",
        options: ["decay", "timing", "spring"],
        editable: true,
        required: true,
      },
    },
    layout: {
      width: 200,
      height: 20,
    },
  },
];
