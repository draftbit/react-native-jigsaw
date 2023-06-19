import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react-native";
import TextInput from "../components/TextInput";
import TextField from "../components/TextField";
import NumberInput from "../components/NumberInput";
import { CodeInput } from "../components/CodeInput";
import DefaultTheme, { Theme } from "../styles/DefaultTheme";
import { IconI } from "../interfaces/Icon";

jest.useFakeTimers();

const onChangeTextDelayed = jest.fn();

beforeEach(() => jest.clearAllMocks());

describe("Text Input debouncing test", () => {
  test.each([200, 500, 1000])(
    "should onChangeTextDelayed be called once with %s delay in TextInput",
    (delay) => {
      const Wrapper: React.FC = () => {
        const [value, setValue] = React.useState("");
        return (
          <TextInput
            value={value}
            onChangeText={(text) => setValue(text)}
            onChangeTextDelayed={onChangeTextDelayed}
            changeTextDelay={delay}
          />
        );
      };

      render(<Wrapper />);
      testDebounce("first", "second", "", delay);
    }
  );

  test.each([200, 500, 1000])(
    "should onChangeTextDelayed be called once with %s delay in TextField",
    (delay) => {
      const Wrapper: React.FC = () => {
        const [value, setValue] = React.useState("");
        return (
          //@ts-ignore
          <TextField
            theme={DefaultTheme as Theme}
            Icon={React.Fragment as IconI}
            value={value}
            onChangeText={(text) => setValue(text)}
            changeTextDelay={delay}
            onChangeTextDelayed={onChangeTextDelayed}
          />
        );
      };

      render(<Wrapper />);
      testDebounce("first", "second", "", delay);
    }
  );

  test.each([200, 500, 1000])(
    "should onChangeTextDelayed be called once with %s delay in NumberInput",
    (delay) => {
      const Wrapper: React.FC = () => {
        const [value, setValue] = React.useState<number | undefined>(0);
        return (
          <NumberInput
            value={value}
            onChangeText={(num) => setValue(num)}
            changeTextDelay={delay}
            onChangeTextDelayed={onChangeTextDelayed}
          />
        );
      };

      render(<Wrapper />);
      testDebounce(1, 23, 0, delay);
    }
  );

  test.each([200, 500, 1000])(
    "should onChangeTextDelayed be called once with %s delay in CodeInput",
    (delay) => {
      const Wrapper: React.FC = () => {
        const [value, setValue] = React.useState("");
        return (
          <CodeInput
            value={value}
            onChangeText={(text) => setValue(text)}
            changeTextDelay={delay}
            onChangeTextDelayed={onChangeTextDelayed}
          />
        );
      };

      render(<Wrapper />);
      testDebounce("first", "second", "", delay);
    }
  );
});

function testDebounce(
  valueOne: string | number,
  valueTwo: string | number,
  initialValue: string | number,
  delay: number
) {
  const textInput = screen.getByTestId("native-text-input");

  act(() => fireEvent.changeText(textInput, valueOne));
  act(() => fireEvent.changeText(textInput, valueTwo));

  act(() => jest.advanceTimersByTime(delay / 2));
  //Only initial call should have called at this point, since delay has not passed
  expect(onChangeTextDelayed).toHaveBeenCalledTimes(1);
  expect(onChangeTextDelayed).toHaveBeenCalledWith(initialValue);

  act(() => jest.advanceTimersByTime(delay / 2));
  expect(onChangeTextDelayed).toHaveBeenCalledTimes(2);
  expect(onChangeTextDelayed).toHaveBeenCalledWith(valueTwo);
}
