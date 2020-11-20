import * as React from "react";
import renderer from "react-test-renderer";
import RowHeadlineImageIcon from "../RowHeadlineImageIcon";

it("renders row headline image icon", () => {
  const tree = renderer
    .create(
      <RowHeadlineImageIcon
        icon="arrow"
        image={require("../../assets/icon.png")}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
