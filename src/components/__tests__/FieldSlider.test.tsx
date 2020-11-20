import * as React from "react";
import renderer from "react-test-renderer";
import FieldSlider from "../FieldSlider";

it("renders field slider", () => {
  const tree = renderer
    .create(
      <FieldSlider
        title="This is my title"
        minimumLabel="0"
        maximumLabel="10"
        style={{ height: 6 }}
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
