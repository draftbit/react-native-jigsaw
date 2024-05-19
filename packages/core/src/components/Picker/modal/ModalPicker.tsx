import * as React from "react";
import { View, Text, Keyboard } from "react-native";
import {
  extractStyles,
  flattenReactFragments,
  useDeepCompareMemo,
} from "../../../utilities";
import {
  CommonDropDownPickerProps,
  ModalPickerProps,
  SinglePickerProps,
  normalizeToPickerOptions,
} from "../PickerCommon";
import PickerInputContainer from "../PickerInputContainer";
import ModalPickerComponent from "react-native-select-dropdown";
import { withTheme } from "../../../theming";
import PickerItem, { PickerItemProps } from "../dropdown/PickerItem";
import { useOnUpdate } from "../../../hooks";

const ModalPicker: React.FC<
  React.PropsWithChildren<
    CommonDropDownPickerProps & SinglePickerProps & ModalPickerProps
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
  dropdownOverlayColor,
  ...rest
}) => {
  const dropdownRef = React.useRef();

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

  const defaultValue = options.find((item) => item.value === value);

  return (
    <PickerInputContainer
      testID="dropdown-picker"
      Icon={Icon}
      placeholder={placeholder}
      selectedValue={value}
      options={options}
      onPress={() => {
        setPickerVisible(!pickerVisible);
        // @ts-ignore
        dropdownRef.current.openDropdown();
      }}
      zIndex={pickerVisible ? 100 : undefined} // Guarantees drop down is rendered above all sibling components
      disabled={disabled}
      {...rest}
    >
      <ModalPickerComponent
        // @ts-ignore
        ref={dropdownRef}
        data={options}
        defaultValue={defaultValue}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setInternalValue(selectedItem.value);
        }}
        renderButton={() => {
          return <View />;
        }}
        renderItem={(item, _index, isSelected) => {
          const selectedBackgroundColor = isSelected
            ? pickerItemProps.selectedBackgroundColor
            : pickerItemViewStyles.backgroundColor;
          const selectedTextColor = isSelected
            ? pickerItemProps.selectedTextColor || dropDownTextColor
            : dropDownTextColor;
          const selectedTextSize = isSelected
            ? pickerItemProps.selectedTextSize || 14
            : 14;
          const iconColor = isSelected ? selectedIconColor : "transparent";

          return (
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: selectedBackgroundColor,
              }}
            >
              <Text
                style={{
                  color: selectedTextColor,
                  fontSize: selectedTextSize,
                  flex: 1,
                  ...pickerItemTextStyles,
                }}
              >
                {item.label}
              </Text>
              <Icon
                name={selectedIconName}
                size={selectedIconSize}
                color={iconColor}
              />
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
        disableAutoScroll={true}
      />
    </PickerInputContainer>
  );
};

export default withTheme(ModalPicker);
