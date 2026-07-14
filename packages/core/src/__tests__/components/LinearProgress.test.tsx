import React from "react";
import { act, render, screen } from "@testing-library/react-native";
import { default as LinearProgress } from "../../components/Progress/LinearProgress";
import { DefaultTheme } from "@draftbit/theme";
import { DEFAULT_ANIMATION_DURATION } from "../../components/Progress/ProgressCommon";

jest.useFakeTimers();

describe("LinearProgress tests", () => {
  test("should render indeterminate progress bar when prop set to true", async () => {
    await render(
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

  test("should not render indeterminate progress bar when prop set to false", async () => {
    await render(
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
    async (value) => {
      await render(
        <LinearProgress
          value={value}
          //@ts-ignore
          theme={DefaultTheme}
          indeterminate={false}
          minimumValue={0}
          maximumValue={100}
        />
      );

      await act(() => {
        jest.advanceTimersByTime(DEFAULT_ANIMATION_DURATION);
      });

      const progressLine = screen.getByTestId("linear-progress-line");

      expect(progressLine).toBeVisible();
    }
  );
});
