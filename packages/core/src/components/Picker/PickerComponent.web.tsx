import * as React from "react";
import { View, StyleSheet, Picker as NativePicker } from "react-native";
import omit from "lodash.omit";
import { withTheme } from "../../theming";
import { extractStyles } from "../../utilities";

import TextField from "../TextField";
import Touchable from "../Touchable";
import { PickerComponentProps } from "./PickerTypes";

const Picker: React.FC<PickerComponentProps> = ({
  style,
  options,
  placeholder,
  selectedValue,
  disabled = false,
  onValueChange: onValueChangeOverride = () => {},
  ...props
}) => {
  const {
    viewStyles: {
      borderRadius, // eslint-disable-line @typescript-eslint/no-unused-vars
      borderWidth, // eslint-disable-line @typescript-eslint/no-unused-vars
      borderTopWidth, // eslint-disable-line @typescript-eslint/no-unused-vars
      borderRightWidth, // eslint-disable-line @typescript-eslint/no-unused-vars
      borderBottomWidth, // eslint-disable-line @typescript-eslint/no-unused-vars
      borderLeftWidth, // eslint-disable-line @typescript-eslint/no-unused-vars
      borderColor, // eslint-disable-line @typescript-eslint/no-unused-vars
      backgroundColor, // eslint-disable-line @typescript-eslint/no-unused-vars
      padding, // eslint-disable-line @typescript-eslint/no-unused-vars
      paddingTop, // eslint-disable-line @typescript-eslint/no-unused-vars
      paddingRight, // eslint-disable-line @typescript-eslint/no-unused-vars
      paddingBottom, // eslint-disable-line @typescript-eslint/no-unused-vars
      paddingLeft, // eslint-disable-line @typescript-eslint/no-unused-vars
      ...viewStyles
    },
  } = extractStyles(style);

  const textField = React.useRef<typeof TextField | undefined>(undefined);

  const onValueChange = (itemValue: string, itemIndex: number) => {
    toggleFocus();
    onValueChangeOverride(itemValue, itemIndex);
  };

  const toggleFocus = () => {
    if (!disabled) {
      // @ts-ignore
      textField.current.toggleFocus(); // cannot determine if method exists due to component being wrapped in a withTheme()
    }
  };

  const stylesWithoutMargin =
    style &&
    omit(StyleSheet.flatten(style), [
      "margin",
      "marginTop",
      "marginRight",
      "marginBottom",
      "marginLeft",
    ]);

  return (
    <Touchable
      disabled={disabled}
      onPress={toggleFocus}
      style={[styles.container, viewStyles]}
    >
      <View>
        <NativePicker
          enabled={!disabled}
          selectedValue={selectedValue}
          onValueChange={(value, index) =>
            onValueChange(value.toString(), index)
          }
          style={{
            flex: 1,
            opacity: 0,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          {options.map((o) => (
            <NativePicker.Item label={o.label} value={o.value} key={o.value} />
          ))}
        </NativePicker>
        <View pointerEvents="none">
          <TextField
            {...props}
            value={selectedValue}
            placeholder={placeholder}
            // @ts-ignore
            ref={textField} // cannot determine if ref is of correct type due to component being wrapped in a withTheme()
            disabled={disabled}
            // @ts-expect-error
            style={stylesWithoutMargin}
          />
        </View>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
});

export default withTheme(Picker);
