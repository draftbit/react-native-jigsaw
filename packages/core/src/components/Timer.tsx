import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import {
  Text,
  StyleSheet,
  TextStyle,
  StyleProp,
  TextProps,
} from "react-native";

interface TimerProps extends TextProps {
  style?: StyleProp<TextStyle>;
  initialTime?: number;
  updateInterval?: number;
  format?: "ss" | "mm:ss" | "hh:mm:ss" | "ss:ms" | "mm:ss:ms" | "hh:mm:ss:ms";
  onTimerChange?: (time: number) => void;
  onTimerEnd?: () => void;
  countDirection?: "up" | "down";
  timerEndTime?: number;
}

export interface TimerHandle {
  start: () => void;
  stop: () => void;
  reset: (newTime?: number) => void;
}

const Timer = forwardRef<TimerHandle, TimerProps>(
  (
    {
      style,
      initialTime,
      updateInterval = 1000,
      format = "mm:ss",
      onTimerChange,
      onTimerEnd,
      countDirection = "up",
      timerEndTime,
      ...rest
    },
    ref
  ) => {
    const defaultInitialTime = 0;
    const [time, setTime] = useState(initialTime ?? defaultInitialTime);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      onTimerChange?.(time);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time]);

    useImperativeHandle(ref, () => ({
      start: startTimer,
      stop: stopTimer,
      reset: resetTimer,
    }));

    const startTimer = () => {
      if (timerRef.current) return;
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          const newTime =
            countDirection === "up"
              ? prevTime + updateInterval
              : prevTime - updateInterval;
          // Count down
          if (newTime <= 0 && countDirection === "down") {
            clearTimer();
            // Delay the onTimerEnd callback to ensure it triggers after the final time update
            setTimeout(() => {
              onTimerEnd?.();
            }, updateInterval);
            return 0;
          }
          // Count up
          if (
            countDirection === "up" &&
            timerEndTime !== undefined &&
            newTime >= timerEndTime
          ) {
            clearTimer();
            // Delay the onTimerEnd callback to ensure it triggers after the final time update
            setTimeout(() => {
              onTimerEnd?.();
            }, updateInterval);
            return timerEndTime;
          }

          return newTime;
        });
      }, updateInterval);
    };

    const stopTimer = () => clearTimer();

    const resetTimer = (
      newTime: number = initialTime ?? defaultInitialTime
    ) => {
      clearTimer();
      setTime(newTime);
    };

    const clearTimer = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    useEffect(() => {
      return () => clearTimer();
    }, []);

    const formatTime = (milliseconds: number): string => {
      const totalSeconds = Math.floor(milliseconds / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
      const seconds = totalSeconds - hours * 3600 - minutes * 60;
      const ms = milliseconds % 1000;

      const formattedHours = String(hours).padStart(2, "0");
      const formattedMinutes = String(minutes).padStart(2, "0");
      const formattedSeconds = String(seconds).padStart(2, "0");
      const formattedMs = String(ms).padStart(3, "0");

      return format
        .replace("hh", formattedHours)
        .replace("mm", formattedMinutes)
        .replace("ss", formattedSeconds)
        .replace("ms", formattedMs);
    };

    return (
      <Text {...rest} style={[styles.defaultTimerStyle, style]}>
        {formatTime(time)}
      </Text>
    );
  }
);

const styles = StyleSheet.create({
  defaultTimerStyle: {
    fontSize: 24,
    textAlign: "left",
  },
});

export default Timer;
