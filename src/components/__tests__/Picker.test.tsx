import * as React from "react";
import renderer from "react-test-renderer";
import Picker from "../Picker/Picker";

it("renders picker", () => {
  const tree = renderer
    .create(
      <Picker
        value="value1"
        options={[{ label: "label1", value: "value1" }]}
        onValueChange={() => {}}
        selectedValue="value1"
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
