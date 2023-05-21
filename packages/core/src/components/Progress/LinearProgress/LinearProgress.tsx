import React from "react";
import Svg, { Line, LineProps } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ValueProgressProps } from "../ProgressCommon";

const AnimatedLine = Animated.createAnimatedComponent(Line);

export const LinearProgress: React.FC<ValueProgressProps> = ({
  theme,
  minimumValue = 0,
  maximumValue = 100,
  value = minimumValue,
  initialValueToAnimateFrom = minimumValue,
  thickness = 10,
  trackThickness = thickness,
  color = theme.colors.primary,
  trackColor = theme.colors.divider,
  trackOpacity = 1,
  showTrack = true,
  animationDuration = 500,
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
  style,
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

  const currentProgressLineWidth = useSharedValue(initialValueToAnimateFrom);

  const progressLineAnimatedProps = useAnimatedProps<LineProps>(() => {
    const isBelowMinWidth = currentProgressLineWidth.value <= thicknessOffset;
    return {
      x2: Math.min(progressLineWidth, currentProgressLineWidth.value), //Prevents going beyond the max width
      strokeOpacity: isBelowMinWidth ? 0.0 : 1.0,
    };
  });

  React.useEffect(() => {
    currentProgressLineWidth.value = withTiming(
      progressLineWidth * (value / (maximumValue + minimumValue)),
      {
        duration: isAnimated ? animationDuration : 0,
      }
    );
  }, [
    value,
    progressLineWidth,
    animationDuration,
    currentProgressLineWidth,
    maximumValue,
    minimumValue,
    isAnimated,
  ]);

  return (
    <Svg
      onLayout={(event) => setSvgContainerWidth(event.nativeEvent.layout.width)}
      style={[
        {
          height: maxThickness,
        },
        style,
      ]}
    >
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
      />
    </Svg>
  );
};
