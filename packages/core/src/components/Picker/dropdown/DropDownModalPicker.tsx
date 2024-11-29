import * as React from "react";
import { View, Text, Keyboard } from "react-native";
import { extractStyles, useDeepCompareMemo } from "../../../utilities";
import {
  CommonDropDownPickerProps,
  DropDownModalPickerProps,
  SinglePickerProps,
  normalizeToPickerOptions,
  usePickerItemProps,
} from "../PickerCommon";
import PickerInputContainer from "../PickerInputContainer";
import ModalPickerComponent from "react-native-select-dropdown";
import { withTheme } from "@draftbit/theme";
import { useOnUpdate } from "../../../hooks";

const ModalPicker: React.FC<
  React.PropsWithChildren<
    CommonDropDownPickerProps & SinglePickerProps & DropDownModalPickerProps
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
  selectedIconColor = theme.colors.text.strong,
  selectedIconSize = 20,
  dropDownBackgroundColor = theme.colors.background.brand,
  dropDownBorderColor = theme.colors.border.brand,
  dropDownTextColor = theme.colors.text.strong,
  dropDownBorderWidth = 1,
  dropDownBorderRadius = 8,
  children: childrenProp,
  disabled,
  dropdownOverlayColor,
  ...rest
}) => {
  const dropdownRef = React.useRef<ModalPickerComponent>();

  const [internalValue, setInternalValue] = React.useState<
    string | number | undefined
  >(value);

  const pickerItemProps = usePickerItemProps(childrenProp);

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
    onValueChange?.(internalValue ?? "");
    // onValueChange excluded to prevent running on every re-render when using an anoymous function, which is the common case
  }, [internalValue]);

  return (
    <PickerInputContainer
      testID="dropdown-modal-picker"
      Icon={Icon}
      placeholder={placeholder}
      selectedValue={value}
      options={options}
      onPress={() => {
        dropdownRef.current?.openDropdown();
        if (autoDismissKeyboard) {
          Keyboard.dismiss();
        }
      }}
      disabled={disabled}
      {...rest}
    >
      <ModalPickerComponent
        ref={dropdownRef as React.LegacyRef<ModalPickerComponent>}
        data={options}
        defaultValue={internalValue}
        onSelect={(selectedItem) => {
          setInternalValue(selectedItem.value);
        }}
        renderButton={() => {
          return <></>;
        }}
        renderItem={(item, _, isSelected) => {
          const backgroundColor = isSelected
            ? (pickerItemProps.selectedBackgroundColor ??
              pickerItemViewStyles.backgroundColor)
            : pickerItemViewStyles.backgroundColor;

          const textColor = isSelected
            ? (pickerItemProps.selectedTextColor ?? dropDownTextColor)
            : dropDownTextColor;

          const textSize = isSelected
            ? (pickerItemProps.selectedTextSize ?? 14)
            : 14;

          return (
            <View
              style={[
                {
                  padding: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: backgroundColor,
                },
                pickerItemViewStyles,
              ]}
            >
              <Text
                style={[
                  {
                    color: textColor,
                    fontSize: textSize,
                    flex: 1,
                  },
                  pickerItemTextStyles,
                ]}
              >
                {item.label}
              </Text>
              {isSelected ? (
                <Icon
                  name={selectedIconName}
                  size={selectedIconSize}
                  color={selectedIconColor}
                />
              ) : null}
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownOverlayColor={dropdownOverlayColor}
        dropdownStyle={{
          borderColor: dropDownBorderColor,
          borderWidth: dropDownBorderWidth,
          borderRadius: dropDownBorderRadius,
          backgroundColor: dropDownBackgroundColor,
        }}
        disableAutoScroll
        statusBarTranslucent
      />
    </PickerInputContainer>
  );
};

export default withTheme(ModalPicker);
