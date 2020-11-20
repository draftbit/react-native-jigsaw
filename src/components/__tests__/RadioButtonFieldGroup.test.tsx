import * as React from "react";
import renderer from "react-test-renderer";
import RadioButtonFieldGroup from "../RadioButtonFieldGroup";

it("renders radio button field group", () => {
  const tree = renderer
    .create(
      <RadioButtonFieldGroup
        options={[
          { key: "first", value: "first" },
          { key: "second", value: "second" },
        ]}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
