import React from "react";
import { render, screen } from "@testing-library/react-native";
import { default as LinearProgress } from "../../components/Progress/LinearProgress";
import { DefaultTheme } from "@draftbit/theme";
import { AnimatedLine } from "../../components/Progress/LinearProgress/LinearProgress";
import { DEFAULT_ANIMATION_DURATION } from "../../components/Progress/ProgressCommon";

jest.useFakeTimers();

describe("LinearProgress tests", () => {
  test("should render indeterminate progress bar when prop set to true", () => {
    render(
      <LinearProgress
        //@ts-ignore
        theme={DefaultTheme}
        indeterminate={true}
      />
    );

    const indeterminateProgress = screen.queryByTestId(
      "indeterminate-progress"
    );
    expect(indeterminateProgress).toBeTruthy();
  });

  test("should not render indeterminate progress bar when prop set to false", () => {
    render(
      <LinearProgress
        //@ts-ignore
        theme={DefaultTheme}
        indeterminate={false}
      />
    );

    const indeterminateProgress = screen.queryByTestId(
      "indeterminate-progress"
    );
    expect(indeterminateProgress).toBeFalsy();
  });

  test.each([5, 10, 50, 70, 100])(
    "should progress line be visible when at %p%",
    (value) => {
      render(
        <LinearProgress
          value={value}
          //@ts-ignore
          theme={DefaultTheme}
          indeterminate={false}
          minimumValue={0}
          maximumValue={100}
        />
      );

      jest.advanceTimersByTime(DEFAULT_ANIMATION_DURATION);

      const svgContainer = screen.getByTestId("linear-progress-component");
      const progressLine = svgContainer.findByType(AnimatedLine);

      expect(progressLine).toBeVisible();
    }
  );
});
