import React from "react";
import { render, screen } from "@testing-library/react-native";
import { default as CircularProgress } from "../../components/Progress/CircularProgress";
import { DefaultTheme } from "@draftbit/theme";
import { AnimatedPath } from "../../components/Progress/CircularProgress/CircularProgress";
import { DEFAULT_ANIMATION_DURATION } from "../../components/Progress/ProgressCommon";

jest.useFakeTimers();

describe("CircularProgress tests", () => {
  test("should render indeterminate progress bar when prop set to true", () => {
    render(
      <CircularProgress
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
      <CircularProgress
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
    "should progress path be visible when at %p%",
    (value) => {
      render(
        <CircularProgress
          value={value}
          //@ts-ignore
          theme={DefaultTheme}
          indeterminate={false}
          minimumValue={0}
          maximumValue={100}
        />
      );

      jest.advanceTimersByTime(DEFAULT_ANIMATION_DURATION);

      const svgContainer = screen.getByTestId("circular-progress-component");
      const progressPath = svgContainer.findByType(AnimatedPath);

      expect(progressPath).toBeVisible();
    }
  );
});
