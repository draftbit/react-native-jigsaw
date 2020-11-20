import * as React from "react";
import renderer from "react-test-renderer";
import PickerComponent from "../Picker/PickerComponent.ios";

it("renders picker component IOS", () => {
  const tree = renderer
    .create(
      <PickerComponent
        value="value1"
        options={[{ label: "label1", value: "value1" }]}
        onValueChange={() => {}}
        selectedValue="value1"
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
