import React from "react";
import Svg, { Path, PathProps } from "react-native-svg";
import { View } from "react-native";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  DEFAULT_ANIMATION_DURATION,
  ValueProgressProps,
  CircularProgressProps,
} from "../ProgressCommon";

export const AnimatedPath = Animated.createAnimatedComponent(Path);

export const CircularProgress: React.FC<
  ValueProgressProps & CircularProgressProps
> = ({
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
  startPosition = "top",
  style,
  testID,
}) => {
  const [svgContainerWidth, setSvgContainerWidth] = React.useState(0);
  const [circumfrence, setCircumefrence] = React.useState(0);

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

  const radius = svgContainerWidth / 2;

  const c = 2 * Math.PI * radius;
  if (c !== circumfrence) {
    setCircumefrence(c);
  }

  const startAngle = React.useMemo(() => {
    switch (startPosition) {
      case "top":
        return 0;
      case "right":
        return 90;
      case "bottom":
        return 180;
      case "left":
        return 270;
    }
  }, [startPosition]);

  const currentFillPercentage = value / (maximumValue + minimumValue);
  const currentAngle = useSharedValue(startAngle);

  const progressPathAnimatedProps = useAnimatedProps<PathProps>(() => {
    const isBelowMinAngle = currentAngle.value <= startAngle;
    return {
      d: circlePath(
        radius,
        radius,
        radius - thicknessOffset,
        startAngle,
        Math.min(currentAngle.value, startAngle + 360) //Prevents going beyond the max angle
      ),
      strokeOpacity: isBelowMinAngle ? 0.0 : 1.0,
    };
  });

  React.useEffect(() => {
    currentAngle.value = withTiming(startAngle + currentFillPercentage * 360, {
      duration: isAnimated ? animationDuration : 0,
    });
  }, [
    value,
    currentFillPercentage,
    animationDuration,
    currentAngle,
    maximumValue,
    minimumValue,
    isAnimated,
    startAngle,
  ]);

  React.useEffect(() => {
    onFullPathWidth?.(circumfrence);
  }, [circumfrence, onFullPathWidth]);

  return (
    <View
      testID={testID ?? "circular-progress-component"}
      onLayout={(event) => {
        const width = event.nativeEvent.layout.width;
        setSvgContainerWidth(width);
      }}
      style={[
        {
          height: svgContainerWidth,
        },
        style,
      ]}
    >
      <Svg testID={testID ?? "circular-progress-component"} style={{ flex: 1 }}>
        {showTrack && (
          <Path
            d={circlePath(
              radius,
              radius,
              radius - thicknessOffset,
              startAngle,
              startAngle + 360
            )}
            stroke={trackColor}
            strokeWidth={trackThickness}
            strokeOpacity={trackOpacity}
            strokeLinecap={trackLineCap}
            strokeDasharray={trackCustomDashArray || trackDashArray}
            strokeDashoffset={trackDashOffset}
            fill={"rgba(0,0,0,0)"} //Prevents default black fill
          />
        )}
        <AnimatedPath
          animatedProps={progressPathAnimatedProps}
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap={lineCap}
          strokeDasharray={customDashArray || dashArray}
          strokeDashoffset={dashOffset}
          fill={"rgba(0,0,0,0)"}
          onPress={() => {}} //Addresses reanimated issue with SVG (https://github.com/software-mansion/react-native-reanimated/issues/3321#issuecomment-1256983430)
        />
      </Svg>
    </View>
  );
};

// From: https://github.com/bartgryszko/react-native-circular-progress/blob/a93b501aea40306126c8ede72089741eead52308/src/CircularProgress.js#L15
function circlePath(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  "worklet"; // Reanimated worklet to be runnable on the UI thread

  function polarToCartesian(
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  var start = polarToCartesian(x, y, radius, endAngle * 0.9999);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ];
  return d.join(" ");
}
