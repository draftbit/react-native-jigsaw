import * as React from "react";
import renderer from "react-test-renderer";
import RadioButtonGroup from "../RadioButtonGroup";

it("renders radio button group", () => {
  const tree = renderer
    .create(
      <RadioButtonGroup
        iconSize={20}
        value="second"
        options={[{ label: "first" }, { label: "second" }]}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
