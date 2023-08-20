import * as React from "react";
import { Keyboard } from "react-native";
import { extractStyles, useDeepCompareMemo } from "../../../utilities";
import {
  CommonDropDownPickerProps,
  MultiSelectPickerProps,
  SinglePickerProps,
  normalizeToPickerOptions,
} from "../PickerCommon";
import PickerInputContainer from "../PickerInputContainer";
import DropDownPickerComponent from "react-native-dropdown-picker";
import { withTheme } from "../../../theming";

const DropDownPicker: React.FC<
  CommonDropDownPickerProps & (SinglePickerProps | MultiSelectPickerProps)
> = ({
  theme,
  options: optionsProp = [],
  onValueChange,
  Icon,
  placeholder,
  value,
  autoDismissKeyboard = true,
  style,
  selectedIconName = "Feather/check",
  selectedIconColor = theme.colors.strong,
  selectedIconSize = 20,
  itemTextSize = 14,
  itemTextColor = theme.colors.strong,
  itemBackgroundColor,
  selectedItemTextSize = itemTextSize,
  selectedItemTextColor = itemTextColor,
  selectedItemBackgroundColor = itemBackgroundColor,
  dropDownBackgroundColor = theme.colors.background,
  dropDownBorderColor = theme.colors.divider,
  dropDownBorderWidth = 1,
  dropDownBorderRadius = 8,
  ...rest
}) => {
  const [pickerVisible, setPickerVisible] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState<
    string | number | (string | number)[]
  >();

  const isMultiSelect = Array.isArray(value);

  const options = useDeepCompareMemo(
    () =>
      normalizeToPickerOptions(optionsProp).map((option) => ({
        label: option.label.toString(),
        value: option.value,
      })),
    [optionsProp]
  );

  const { textStyles } = extractStyles(style);

  React.useEffect(() => {
    onValueChange?.(
      (isMultiSelect ? internalValue ?? [] : internalValue ?? "") as any // cannot determine if multiselect or not on compile time
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [internalValue]);

  React.useEffect(() => {
    if (pickerVisible && autoDismissKeyboard) {
      Keyboard.dismiss();
    }
  }, [pickerVisible, autoDismissKeyboard]);

  return (
    <PickerInputContainer
      style={style}
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
        value={(value || null) as any}
        setValue={setInternalValue}
        items={options}
        placeholder={placeholder}
        listMode="SCROLLVIEW"
        multiple={isMultiSelect}
        style={{ display: "none" }} // To not render the default input container
        listItemLabelStyle={[
          textStyles,
          { color: itemTextColor, fontSize: itemTextSize },
        ]}
        selectedItemLabelStyle={{
          color: selectedItemTextColor,
          fontSize: selectedItemTextSize,
        }}
        listItemContainerStyle={{ backgroundColor: itemBackgroundColor }}
        selectedItemContainerStyle={{
          backgroundColor: selectedItemBackgroundColor,
        }}
        dropDownContainerStyle={{
          borderColor: dropDownBorderColor,
          borderWidth: dropDownBorderWidth,
          borderRadius: dropDownBorderRadius,
          backgroundColor: dropDownBackgroundColor,
        }}
        TickIconComponent={() => (
          <Icon
            name={selectedIconName}
            size={selectedIconSize}
            color={selectedIconColor}
          />
        )}
      />
    </PickerInputContainer>
  );
};

export default withTheme(DropDownPicker);
