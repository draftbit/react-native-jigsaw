import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

interface TimerProps {
  style?: TextStyle;
  initialTime?: number;
  updateInterval?: number;
  format?: "ss" | "mm:ss" | "hh:mm:ss" | "ss:ms" | "mm:ss:ms" | "hh:mm:ss:ms";
  onTimerChange?: (time: number) => void;
  onTimerEnd?: () => void;
  countDirection?: "up" | "down";
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
    },
    ref
  ) => {
    const defaultInitialTime = countDirection === "up" ? 0 : 100000;
    const [time, setTime] = useState(initialTime ?? defaultInitialTime);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      onTimerChange?.(time);
    }, [time, onTimerChange]);

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
          if (newTime <= 0 && countDirection === "down") {
            clearTimer();
            onTimerEnd?.();
            return 0;
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

    const formatTime = (milliseconds: number): string => {
      const totalSeconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const hours = Math.floor(minutes / 60);
      const seconds = totalSeconds % 60;
      const ms = milliseconds % 1000;

      switch (format) {
        case "hh:mm:ss":
          return `${String(hours).padStart(2, "0")}:${String(
            minutes % 60
          ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        case "mm:ss":
          return `${String(minutes).padStart(2, "0")}:${String(
            seconds
          ).padStart(2, "0")}`;
        case "ss":
          return `${String(totalSeconds).padStart(2, "0")}`;
        case "hh:mm:ss:ms":
          return `${String(hours).padStart(2, "0")}:${String(
            minutes % 60
          ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(
            ms
          ).padStart(3, "0")}`;
        case "mm:ss:ms":
          return `${String(minutes).padStart(2, "0")}:${String(
            seconds
          ).padStart(2, "0")}:${String(ms).padStart(3, "0")}`;
        case "ss:ms":
          return `${String(totalSeconds).padStart(2, "0")}:${String(
            ms
          ).padStart(3, "0")}`;
        default:
          return `${String(minutes).padStart(2, "0")}:${String(
            seconds
          ).padStart(2, "0")}`;
      }
    };

    return (
      <Text style={[styles.defaultTimerStyle, style]}>{formatTime(time)}</Text>
    );
  }
);

const styles = StyleSheet.create({
  defaultTimerStyle: {
    fontSize: 24,
    textAlign: "center",
  },
});

export default Timer;
