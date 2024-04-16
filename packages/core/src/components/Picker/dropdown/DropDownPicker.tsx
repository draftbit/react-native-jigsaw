import * as React from "react";
import { Keyboard } from "react-native";
import {
  extractStyles,
  flattenReactFragments,
  useDeepCompareMemo,
} from "../../../utilities";
import {
  CommonDropDownPickerProps,
  MultiSelectPickerProps,
  SinglePickerProps,
  normalizeToPickerOptions,
} from "../PickerCommon";
import PickerInputContainer from "../PickerInputContainer";
import DropDownPickerComponent from "react-native-dropdown-picker";
import { withTheme } from "@draftbit/theme";
import PickerItem, { PickerItemProps } from "./PickerItem";
import { useOnUpdate } from "../../../hooks";

const DropDownPicker: React.FC<
  React.PropsWithChildren<
    CommonDropDownPickerProps & (SinglePickerProps | MultiSelectPickerProps)
  >
> = ({
  theme,
  options: optionsProp = [],
  onValueChange,
  Icon,
  placeholder,
  value,
  autoDismissKeyboard = true,
  selectedIconName = "Feather/check",
  selectedIconColor = theme.colors.strong,
  selectedIconSize = 20,
  dropDownBackgroundColor = theme.colors.background,
  dropDownBorderColor = theme.colors.divider,
  dropDownTextColor = theme.colors.strong,
  dropDownBorderWidth = 1,
  dropDownBorderRadius = 8,
  children: childrenProp,
  disabled,
  ...rest
}) => {
  const [pickerVisible, setPickerVisible] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState<
    string | number | (string | number)[] | undefined
  >(value);

  const isMultiSelect = Array.isArray(value);

  const pickerItemProps: PickerItemProps = React.useMemo(() => {
    const children = flattenReactFragments(
      React.Children.toArray(childrenProp) as React.ReactElement[]
    );

    // Only the props of the first PickerItem are used, any others are ignored
    const firstPickerItem = children.find((child) => child.type === PickerItem);

    return firstPickerItem?.props || {};
  }, [childrenProp]);

  const { viewStyles: pickerItemViewStyles, textStyles: pickerItemTextStyles } =
    extractStyles(pickerItemProps.style);

  const options = useDeepCompareMemo(
    () =>
      normalizeToPickerOptions(optionsProp).map((option) => ({
        label: option.label.toString(),
        value: option.value,
      })),
    [optionsProp]
  );

  useOnUpdate(() => {
    onValueChange?.(
      (isMultiSelect ? internalValue ?? [] : internalValue ?? "") as any // cannot determine if multiselect or not on compile time
    );
    // onValueChange excluded to prevent running on every re-render when using an anoymous function, which is the common case
  }, [internalValue]);

  React.useEffect(() => {
    if (pickerVisible && autoDismissKeyboard) {
      Keyboard.dismiss();
    }
  }, [pickerVisible, autoDismissKeyboard]);

  React.useEffect(() => {
    if (disabled) {
      setPickerVisible(false);
    }
  }, [disabled]);

  return (
    <PickerInputContainer
      testID="dropdown-picker"
      Icon={Icon}
      placeholder={placeholder}
      selectedValue={value}
      options={options}
      onPress={() => setPickerVisible(!pickerVisible)}
      zIndex={pickerVisible ? 100 : undefined} // Guarantees drop down is rendered above all sibling components
      disabled={disabled}
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
          { color: dropDownTextColor, fontSize: 14 },
          pickerItemTextStyles,
        ]}
        selectedItemLabelStyle={[
          pickerItemProps.selectedTextColor
            ? {
                color: pickerItemProps.selectedTextColor,
              }
            : {},
          pickerItemProps.selectedTextSize
            ? {
                fontSize: pickerItemProps.selectedTextSize,
              }
            : {},
        ]}
        listItemContainerStyle={pickerItemViewStyles}
        selectedItemContainerStyle={
          pickerItemProps.selectedBackgroundColor
            ? {
                backgroundColor: pickerItemProps.selectedBackgroundColor,
              }
            : {}
        }
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
