import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Line, LineProps } from "react-native-svg";
import { withTheme } from "../../theming";
import { Theme } from "../../styles/DefaultTheme";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

//TODO: Allow stroke gaps and widths
type LineCap = "round" | "square";

interface LinearProgressProps {
  value: number;
  minimumValue?: number;
  maximumValue?: number;
  initialValueToAnimateFrom?: number;
  thickness?: number;
  trackThickness?: number;
  color?: string;
  trackColor?: string;
  trackOpacity?: number;
  showTrack?: boolean;
  animationDuration?: number;
  isAnimated?: boolean;
  lineCap?: LineCap;
  trackLineCap?: LineCap;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
}

const AnimatedLine = Animated.createAnimatedComponent(Line);

const LinearProgress: React.FC<LinearProgressProps> = ({
  theme,
  value,
  minimumValue = 0,
  maximumValue = 100,
  initialValueToAnimateFrom: initialValue = minimumValue,
  thickness = 10,
  trackThickness = thickness,
  color = theme.colors.primary,
  trackColor = theme.colors.divider,
  trackOpacity = 1,
  showTrack = true,
  animationDuration = 2000,
  // isAnimated = true,
  lineCap = "round",
  trackLineCap = "round",

  style,
}) => {
  const [svgContainerWidth, setSvgContainerWidth] = React.useState(0);

  //This offset guarantees nothing is cut off by view bounds
  const thicknessOffset = thickness / 2;
  const trackThicknessOffset = trackThickness / 2;
  const maxThickness = Math.max(thicknessOffset, trackThicknessOffset);

  const progressLineWidth = svgContainerWidth - thicknessOffset;
  const trackProgressLineWidth = svgContainerWidth - trackThicknessOffset;

  const currentProgressLineWidth = useSharedValue(initialValue);

  const progressLineAnimatedProps = useAnimatedProps<LineProps>(() => {
    return {
      x2: currentProgressLineWidth.value,
    };
  });

  React.useEffect(() => {
    const newLineWidth =
      progressLineWidth * (value / (maximumValue + minimumValue)) +
      thicknessOffset;
    console.log(newLineWidth);

    currentProgressLineWidth.value = withTiming(newLineWidth, {
      duration: animationDuration,
    });
  }, [
    value,
    progressLineWidth,
    animationDuration,
    currentProgressLineWidth,
    maximumValue,
    minimumValue,
    thicknessOffset,
  ]);

  return (
    <Svg
      onLayout={(event) => setSvgContainerWidth(event.nativeEvent.layout.width)}
      style={[
        {
          height: Math.max(thickness, trackThickness),
        },
        style,
      ]}
    >
      {showTrack && (
        <Line
          x1={trackThicknessOffset}
          y1={maxThickness}
          x2={trackProgressLineWidth}
          y2={maxThickness}
          stroke={trackColor}
          strokeWidth={trackThickness}
          strokeOpacity={trackOpacity}
          strokeLinecap={trackLineCap}
        />
      )}
      <AnimatedLine
        animatedProps={progressLineAnimatedProps}
        x1={thicknessOffset}
        y1={maxThickness}
        y2={maxThickness}
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap={lineCap}
      />
    </Svg>
  );
};

export default withTheme(LinearProgress);
