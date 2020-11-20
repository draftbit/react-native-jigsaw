import * as React from "react";
import renderer from "react-test-renderer";
import DatePickerComponent from "../DatePicker/DatePickerComponent.web";

it("renders date picker component web", () => {
  const tree = renderer
    .create(
      <DatePickerComponent
        onChange={() => {}}
        mode="date"
        toggleVisibility={() => {}}
        value={new Date("01 Jan 1970 00:00:00 GMT")}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
