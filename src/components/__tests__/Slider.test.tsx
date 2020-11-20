import * as React from "react";
import renderer from "react-test-renderer";
import Slider from "../Slider";

it("renders slider", () => {
  const tree = renderer
    .create(
      <Slider
        style={{ height: 4 }}
        maximumTrackTintColor="primary"
        minimumTrackTintColor="light"
        thumbTintColor="primary"
        minimumValue={0}
        maximumValue={10}
        step={1}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
