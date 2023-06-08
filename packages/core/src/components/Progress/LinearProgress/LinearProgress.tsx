import React from "react";
import Svg, { Line, LineProps } from "react-native-svg";
import { View } from "react-native";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  DEFAULT_ANIMATION_DURATION,
  ValueProgressProps,
} from "../ProgressCommon";

export const AnimatedLine = Animated.createAnimatedComponent(Line);

export const LinearProgress: React.FC<ValueProgressProps> = ({
  theme,
  minimumValue = 0,
  maximumValue = 100,
  value = minimumValue,
  thickness = 10,
  trackThickness = thickness,
  color = theme.colors.primary,
  trackColor = theme.colors.divider,
  trackOpacity = 1,
  showTrack = true,
  animationDuration = DEFAULT_ANIMATION_DURATION,
  isAnimated = true,
  lineCap = "round",
  trackLineCap = lineCap,
  dashWidth,
  trackDashWidth,
  dashGap,
  trackDashGap,
  dashOffset,
  trackDashOffset,
  customDashArray,
  trackCustomDashArray,
  onFullPathWidth,
  style,
  testID,
}) => {
  const [svgContainerWidth, setSvgContainerWidth] = React.useState(0);

  const dashArray =
    dashWidth !== undefined
      ? `${dashWidth} ${dashGap || dashWidth}`
      : undefined;
  const trackDashArray =
    trackDashWidth !== undefined
      ? `${trackDashWidth} ${trackDashGap || trackDashWidth}`
      : undefined;

  const maxThickness = Math.max(thickness, trackThickness);
  const thicknessOffset = maxThickness / 2; // This offset guarantees nothing is cut off by view bounds

  const progressLineWidth = svgContainerWidth - thicknessOffset;
  const trackProgressLineWidth = svgContainerWidth - thicknessOffset;

  const currentFillPercentage = value / (maximumValue + minimumValue);
  const currentProgressLineWidth = useSharedValue(
    currentFillPercentage * progressLineWidth
  );

  const progressLineAnimatedProps = useAnimatedProps<LineProps>(() => {
    const isBelowMinWidth = currentProgressLineWidth.value <= thicknessOffset;
    return {
      x2: Math.min(progressLineWidth, currentProgressLineWidth.value), //Prevents going beyond the max width
      strokeOpacity: isBelowMinWidth ? 0.0 : 1.0,
    };
  });

  React.useEffect(() => {
    currentProgressLineWidth.value = withTiming(
      progressLineWidth * currentFillPercentage,
      {
        duration: isAnimated ? animationDuration : 0,
      }
    );
  }, [
    value,
    progressLineWidth,
    currentFillPercentage,
    animationDuration,
    currentProgressLineWidth,
    maximumValue,
    minimumValue,
    isAnimated,
  ]);

  return (
    <View
      onLayout={(event) => {
        const width = event.nativeEvent.layout.width;
        setSvgContainerWidth(width);
        onFullPathWidth?.(width);
      }}
      style={[
        {
          height: maxThickness,
        },
        style,
      ]}
    >
      <Svg testID={testID ?? "linear-progress-component"} style={{ flex: 1 }}>
        {showTrack && (
          <Line
            x1={thicknessOffset}
            y1={thicknessOffset}
            x2={trackProgressLineWidth}
            y2={thicknessOffset}
            stroke={trackColor}
            strokeWidth={trackThickness}
            strokeOpacity={trackOpacity}
            strokeLinecap={trackLineCap}
            strokeDasharray={trackCustomDashArray || trackDashArray}
            strokeDashoffset={trackDashOffset}
          />
        )}
        <AnimatedLine
          animatedProps={progressLineAnimatedProps}
          x1={thicknessOffset}
          y1={thicknessOffset}
          y2={thicknessOffset}
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap={lineCap}
          strokeDasharray={customDashArray || dashArray}
          strokeDashoffset={dashOffset}
          onPress={() => {}} //Addresses reanimated issue with SVG (https://github.com/software-mansion/react-native-reanimated/issues/3321#issuecomment-1256983430)
        />
      </Svg>
    </View>
  );
};
