import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { Picker, PickerItem } from "../../components/Picker";
import Provider from "../../Provider";
import DefaultTheme from "../../styles/DefaultTheme";
import { act } from "react-test-renderer";

jest.useFakeTimers();

jest.mock("@react-native-picker/picker", () => {
  const React = require("react");
  const { View } = require("react-native");

  class Picker extends React.Component {
    render(): React.ReactNode {
      return <View testID={this.props.testID}>{this.props.children}</View>;
    }
    static Item({ testID, label }) {
      return <View testID={testID} label={label} />;
    }
  }
  return { Picker };
});

const mockRenderDropDownPickerComponent = jest.fn();

jest.mock("react-native-dropdown-picker", () => {
  const React = require("react");
  const { View } = require("react-native");

  const Picker: React.FC = (props) => {
    mockRenderDropDownPickerComponent(props);
    return <View />;
  };

  return Picker;
});

beforeEach(() => {
  jest.clearAllMocks();
});

const defaultPickerProps = {
  theme: DefaultTheme as any,
  Icon: () => <></>,
  onValueChange: () => {},
  options: [],
};

describe("Picker tests", () => {
  test("should render native picker when mode is 'native'", () => {
    render(<Picker {...defaultPickerProps} mode="native" />);

    const nativePicker = screen.queryByTestId("native-picker");
    expect(nativePicker).toBeTruthy();
  });

  test("should render dropdown picker when mode is 'dropdown'", () => {
    render(<Picker {...defaultPickerProps} mode="dropdown" />);

    const dropdownPicker = screen.queryByTestId("dropdown-picker");
    expect(dropdownPicker).toBeTruthy();
  });

  describe("Native Picker tests", () => {
    test("should first option be selected when no placeholder is provided", () => {
      const options = ["option1", "option2"];
      const mockOnValueChange = jest.fn();

      render(
        <Picker
          {...defaultPickerProps}
          mode="native"
          options={options}
          onValueChange={mockOnValueChange}
          placeholder={undefined}
        />
      );

      expect(mockOnValueChange).toBeCalledWith(options[0]);
    });

    test("should placeholder be added as the first option when provided", async () => {
      const options = ["option1", "option2"];
      const placeholder = "test placeholder";

      render(
        <Provider theme={DefaultTheme}>
          <Picker
            {...defaultPickerProps}
            mode="native"
            options={options}
            placeholder={placeholder}
          />
        </Provider>
      );

      await act(() => fireEvent.press(screen.getByTestId("native-picker"))); //To show the items

      const pickerItems = screen.queryAllByTestId("native-picker-item");

      expect(pickerItems.at(0)?.props.label).toBe(placeholder);
    });
  });
  describe("Dropdown Picker tests", () => {
    test("should PickerItem styles be passed into picker component style props", () => {
      const textStyles = { color: "blue", fontSize: 20 };
      const viewStyles = { backgroundColor: "red", paddingTop: 20 };

      render(
        <Picker {...defaultPickerProps} mode="dropdown">
          <PickerItem style={{ ...textStyles, ...viewStyles }} />
        </Picker>
      );

      expect(mockRenderDropDownPickerComponent).toBeCalledWith(
        expect.objectContaining({
          listItemLabelStyle: expect.arrayContaining([
            expect.objectContaining(textStyles),
          ]),
          listItemContainerStyle: expect.objectContaining(viewStyles),
        })
      );
    });
  });
});
