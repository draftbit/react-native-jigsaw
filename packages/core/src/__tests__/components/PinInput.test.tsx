import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react-native";
import { View } from "react-native";
import { PinInput, PinInputText } from "../../components/PinInput";
import { Cursor } from "react-native-confirmation-code-field";

describe("PinInput tests", () => {
  test("should onInputFull be called when input is full", () => {
    const cellCount = 6;
    const text = "0".repeat(cellCount);
    const onInputFull = jest.fn();

    const Wrapper: React.FC = () => {
      const [value, setValue] = React.useState("");
      return (
        <PinInput
          value={value}
          onChangeText={(text) => setValue(text)}
          cellCount={cellCount}
          onInputFull={onInputFull}
        />
      );
    };

    render(<Wrapper />);

    const textInput = screen.getByTestId("native-text-input");
    act(() => fireEvent.changeText(textInput, text));

    expect(onInputFull).toHaveBeenCalledTimes(1);
    expect(onInputFull).toHaveBeenCalledWith(text);
  });

  test.each([2, 4, 6, 7, 8])(
    "should render %s custom input cells",
    (cellCount) => {
      render(
        <PinInput
          renderItem={() => <View testID="test-input-cell" />}
          cellCount={cellCount}
        />
      );

      const cells = screen.queryAllByTestId("test-input-cell");
      expect(cells).toHaveLength(cellCount);
    }
  );

  test.each([2, 4, 6, 7, 8])(
    "should render %s default input cells when renderItem not provided",
    (cellCount) => {
      render(<PinInput cellCount={cellCount} />);

      const cells = screen.queryAllByTestId("default-code-input-cell");
      expect(cells).toHaveLength(cellCount);
    }
  );

  describe("PinInputText tests", () => {
    test("should render cursor when focused and does not have a value", () => {
      render(<PinInputText isFocused />);

      const cursor = screen.UNSAFE_queryByType(Cursor);
      expect(cursor).toBeTruthy();
    });

    test("should render text value when focused and has a value", () => {
      const text = "sample text";
      render(<PinInputText isFocused>{text}</PinInputText>);

      const cursor = screen.UNSAFE_queryByType(Cursor);
      const componentWithText = screen.queryByText(text);
      expect(componentWithText).toBeTruthy();
      expect(cursor).toBeFalsy();
    });

    test("should render text value when not focused and has a value", () => {
      const text = "sample text";
      render(<PinInputText isFocused={false}>{text}</PinInputText>);

      const cursor = screen.UNSAFE_queryByType(Cursor);
      const componentWithText = screen.queryByText(text);
      expect(componentWithText).toBeTruthy();
      expect(cursor).toBeFalsy();
    });
  });
});
