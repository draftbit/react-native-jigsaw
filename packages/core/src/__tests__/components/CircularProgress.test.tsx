import React from "react";
import { act, render, screen } from "@testing-library/react-native";
import { default as CircularProgress } from "../../components/Progress/CircularProgress";
import { DefaultTheme } from "@draftbit/theme";
import { DEFAULT_ANIMATION_DURATION } from "../../components/Progress/ProgressCommon";

jest.useFakeTimers();

describe("CircularProgress tests", () => {
  test("should render indeterminate progress bar when prop set to true", async () => {
    await render(
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

  test("should not render indeterminate progress bar when prop set to false", async () => {
    await render(
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
    async (value) => {
      await render(
        <CircularProgress
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

      const progressPath = screen.getByTestId("circular-progress-path");

      expect(progressPath).toBeVisible();
    }
  );
});
