import React from "react";
import { render, screen } from "@testing-library/react-native";
import { default as LinearProgress } from "../../components/Progress/LinearProgress";
import Theme from "../../styles/DefaultTheme";

jest.useFakeTimers();

describe("LinearProgress tests", () => {
  test("should render indeterminate progress bar when prop set to true", () => {
    render(<LinearProgress theme={Theme as any} indeterminate={true} />);

    const indeterminateProgress = screen.queryByTestId(
      "indeterminate-progress"
    );
    expect(indeterminateProgress).toBeTruthy();
  });

  test("should not render indeterminate progress bar when prop set to false", () => {
    render(<LinearProgress theme={Theme as any} indeterminate={false} />);

    const indeterminateProgress = screen.queryByTestId(
      "indeterminate-progress"
    );
    expect(indeterminateProgress).toBeUndefined();
  });
});
