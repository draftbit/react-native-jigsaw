import * as React from "react";
import renderer from "react-test-renderer";
import ProgressIndicator from "../ProgressIndicator";

it("renders progress indicator", () => {
  const tree = renderer
    .create(
      <ProgressIndicator
        currentStep={1}
        numberOfSteps={5}
        stepIndicatorSize={10}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
