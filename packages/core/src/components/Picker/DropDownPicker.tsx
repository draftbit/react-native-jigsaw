import * as React from "react";
import { Keyboard } from "react-native";
import { useDeepCompareEffect, useDeepCompareMemo } from "../../utilities";
import { CommonPickerProps, normalizeToPickerOptions } from "./PickerCommon";
import PickerInputContainer from "./PickerInputContainer";
import DropDownPickerComponent from "react-native-dropdown-picker";
import { withTheme } from "../../theming";
import { Theme } from "../../styles/DefaultTheme";

interface DropDownPickerProps extends CommonPickerProps {
  selectedIconName?: string;
  selectedIconColor?: string;
  theme: Theme;
}

const DropDownPicker: React.FC<DropDownPickerProps> = ({
  theme,
  options: optionsProp = [],
  onValueChange,
  Icon,
  placeholder,
  value,
  autoDismissKeyboard = true,
  selectedIconColor = theme.colors.strong,
  selectedIconName = "Feather/check",
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
      zIndex={pickerVisible ? 100 : undefined} // Guarantees drop down is rendered above all sibling components
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
        style={{ display: "none" }} // To not render the default input container
        dropDownContainerStyle={{
          borderColor: theme.colors.divider,
          backgroundColor: theme.colors.background,
        }}
        textStyle={{ color: theme.colors.strong }}
        TickIconComponent={() => (
          <Icon name={selectedIconName} size={20} color={selectedIconColor} />
        )}
      />
    </PickerInputContainer>
  );
};

// const styles = StyleSheet.create({});

export default withTheme(DropDownPicker);
