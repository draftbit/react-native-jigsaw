import * as React from "react";
import { Keyboard } from "react-native";
import { useDeepCompareEffect, useDeepCompareMemo } from "../../utilities";
import { CommonPickerProps, normalizeToPickerOptions } from "./PickerCommon";
import PickerInputContainer from "./PickerInputContainer";
import DropDownPickerComponent from "react-native-dropdown-picker";

const DropDownPicker: React.FC<CommonPickerProps> = ({
  options: optionsProp = [],
  onValueChange,
  Icon,
  placeholder,
  value,
  autoDismissKeyboard = true,
  ...rest
}) => {
  const [pickerVisible, setPickerVisible] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState<string | number>();

  const options = useDeepCompareMemo(
    () =>
      normalizeToPickerOptions(optionsProp).map((option) => ({
        label: option.label.toString(),
        value: option.value,
      })),
    [optionsProp]
  );

  useDeepCompareEffect(() => {
    onValueChange?.(internalValue || "");
  }, [internalValue, onValueChange]);

  React.useEffect(() => {
    if (pickerVisible && autoDismissKeyboard) {
      Keyboard.dismiss();
    }
  }, [pickerVisible, autoDismissKeyboard]);

  return (
    <PickerInputContainer
      Icon={Icon}
      placeholder={placeholder}
      selectedValue={value}
      options={options}
      onPress={() => setPickerVisible(!pickerVisible)}
      {...rest}
    >
      <DropDownPickerComponent
        open={pickerVisible}
        setOpen={setPickerVisible}
        value={value || null}
        setValue={setInternalValue}
        items={options}
        placeholder={placeholder}
        listMode="SCROLLVIEW"
      />
    </PickerInputContainer>
  );
};

// const styles = StyleSheet.create({});

export default DropDownPicker;
