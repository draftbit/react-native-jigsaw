import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { View } from "react-native";
import { PinInput, PinInputText } from "../../components/PinInput";

// `Cursor` renders its symbol as a bare string child, so it can only be
// asserted on via the text it produces.
const CURSOR_SYMBOL = "|";

describe("PinInput tests", () => {
  test("should onInputFull be called when input is full", async () => {
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

    await render(<Wrapper />);

    const textInput = screen.getByTestId("native-text-input");
    await fireEvent.changeText(textInput, text);

    expect(onInputFull).toHaveBeenCalledTimes(1);
    expect(onInputFull).toHaveBeenCalledWith(text);
  });

  test.each([2, 4, 6, 7, 8])(
    "should render %s custom input cells",
    async (cellCount) => {
      await render(
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
    async (cellCount) => {
      await render(<PinInput cellCount={cellCount} />);

      const cells = screen.queryAllByTestId("default-code-input-cell");
      expect(cells).toHaveLength(cellCount);
    }
  );

  describe("PinInputText tests", () => {
    test("should render cursor when focused and does not have a value", async () => {
      await render(<PinInputText isFocused cursorText={CURSOR_SYMBOL} />);

      const cursor = screen.queryByText(CURSOR_SYMBOL);
      expect(cursor).toBeTruthy();
    });

    test("should render text value when focused and has a value", async () => {
      const text = "sample text";
      await render(
        <PinInputText isFocused cursorText={CURSOR_SYMBOL}>
          {text}
        </PinInputText>
      );

      const cursor = screen.queryByText(CURSOR_SYMBOL);
      const componentWithText = screen.queryByText(text);
      expect(componentWithText).toBeTruthy();
      expect(cursor).toBeFalsy();
    });

    test("should render text value when not focused and has a value", async () => {
      const text = "sample text";
      await render(
        <PinInputText isFocused={false} cursorText={CURSOR_SYMBOL}>
          {text}
        </PinInputText>
      );

      const cursor = screen.queryByText(CURSOR_SYMBOL);
      const componentWithText = screen.queryByText(text);
      expect(componentWithText).toBeTruthy();
      expect(cursor).toBeFalsy();
    });
  });
});
