import * as React from "react";
import { View, /* StyleSheet, */ Text, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { omit, pick, pickBy, identity } from "lodash";
import { Picker as NativePicker } from "@react-native-picker/picker";

import { withTheme } from "../../theming";
import Portal from "../Portal/Portal";
import Button from "../DeprecatedButton";
import Touchable from "../Touchable";
import { PickerProps, PickerOption } from "./Picker";
import { extractStyles } from "../../utilities";
import type { IconSlot } from "../../interfaces/Icon";
import type { Theme } from "../../styles/DefaultTheme";

const Picker: React.FC<PickerProps & IconSlot & Theme> = ({
  Icon,
  style,
  options = [],
  placeholder = "",
  value: selectedValue = "",
  disabled = false,
  onValueChange = () => {},
  theme,
  assistiveText,
  label,
  leftIconMode = "inset",
  leftIconName,
  placeholderTextColor,
  rightIconName,
  type,
}) => {
  const [pickerVisible, setIsPickerVisible] = React.useState(false);

  const { viewStyles, textStyles } = extractStyles(style);

  const { colors } = theme;

  console.log({
    // viewStyles,
    // textStyles,
    // options,
    // placeholder,
    // selectedValue,
    // theme,
    // disabled,
    // onValueChange,
    // colors,
    // assistiveText,
    // label,
    // leftIconMode,
    // leftIconName,
    // placeholderTextColor,
    // rightIconName,
    // type,
  });

  const borders = [
    "borderRadius",
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomRightRadius",
    "borderBottomLeftRadius",
    "borderTopWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderLeftWidth",
    "borderColor",
    "borderStyle",
  ];

  const borderStyles = {
    ...{
      ...(type === "solid"
        ? {
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderLeftWidth: 1,
          }
        : {}),
      borderBottomWidth: 1,
      borderColor: colors.light,
      borderStyle: "solid",
    },
    ...pick(viewStyles, borders),
  };

  const margins = ["marginLeft", "marginRight", "marginTop", "marginBottom"];

  const marginStyles = pick(viewStyles, margins);

  const stylesWithoutBordersAndMargins = {
    ...{
      height: 60,
      width: "100%",
    },
    ...omit(viewStyles, [...borders, ...margins]),
  };

  const selectedLabel =
    selectedValue &&
    ((options as unknown as PickerOption[]).find(
      (o) => o.value === selectedValue
    )?.label ??
      selectedValue);

  const labelText = label ? (
    <Text
      style={{
        textAlign: textStyles.textAlign,
        color: colors.light,
        fontSize: 12,
        paddingBottom: 4,
      }}
    >
      {label}
    </Text>
  ) : null;

  const leftIconOutset = leftIconMode === "outset";

  const leftIcon = leftIconName ? (
    <Icon
      name={leftIconName}
      size={24}
      style={{
        marginRight: 8,
        marginLeft: -6,
      }}
    />
  ) : null;

  const rightIcon = rightIconName ? (
    <Icon
      name={rightIconName}
      size={24}
      style={{
        marginRight: -6,
        marginLeft: 8,
      }}
    />
  ) : null;

  // @ts-ignore
  const width = stylesWithoutBordersAndMargins?.width ?? undefined;

  const textAlign = textStyles?.textAlign;

  const paddingLeft =
    leftIconOutset &&
    (!textAlign || textAlign === "left" || textAlign === "justify")
      ? 28 // icon size + 4
      : 0;

  const assistiveTextLabel = assistiveText ? (
    <Text
      style={{
        textAlign,
        width,
        paddingLeft,
        color: colors.light,
        fontSize: 12,
        paddingTop: 4,
      }}
    >
      {assistiveText}
    </Text>
  ) : null;

  const primaryTextStyle = {
    color: colors.light,
    fontSize: 14,
    ...pickBy(textStyles, identity),
    ...(placeholder === selectedValue
      ? { color: placeholderTextColor ?? colors.light }
      : {}),
  };

  const toggleVisibility = () => setIsPickerVisible(!pickerVisible);

  return (
    <View
      style={[
        {
          alignSelf: "stretch",
        },
        marginStyles,
      ]}
    >
      <Touchable
        disabled={disabled}
        onPress={toggleVisibility}
        style={{ alignSelf: "stretch", alignItems: "center" }}
      >
        <View
          pointerEvents="none"
          style={[
            {
              //alignSelf: "stretch",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            },
            stylesWithoutBordersAndMargins,
            // @ts-ignore
            !leftIconOutset && borderStyles,
          ]}
        >
          {leftIcon}

          <View
            style={[
              {
                flex: 1,
                height: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: 12,
                paddingRight: 12,
              },
              // @ts-ignore
              leftIconOutset && borderStyles,
            ]}
          >
            <View
              style={{
                flex: 1,
                // paddingTop: 0,
                // paddingRight: 0, // add inner text paddding settings
                // paddingLeft: 0,
                // paddingBottom: 0,
              }}
            >
              {labelText}

              <Text style={primaryTextStyle}>
                {String(selectedLabel ?? placeholder)}
              </Text>
            </View>

            {rightIcon}
          </View>
        </View>
        {assistiveTextLabel}
      </Touchable>

      {Platform.OS === "ios" && pickerVisible ? (
        <Portal>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: colors.divider,
            }}
          >
            <SafeAreaView
              style={{
                backgroundColor: "white",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Button
                Icon={Icon}
                type="text"
                onPress={toggleVisibility}
                style={{ alignSelf: "flex-end" }}
              >
                {"Close"}
              </Button>

              <NativePicker
                style={{ backgroundColor: "white" }}
                selectedValue={selectedValue}
                onValueChange={onValueChange}
              >
                {(options as unknown as PickerOption[]).map((o) => (
                  <NativePicker.Item
                    label={o.label}
                    value={o.value}
                    key={o.value}
                  />
                ))}
              </NativePicker>
            </SafeAreaView>
          </View>
        </Portal>
      ) : (
        <NativePicker
          enabled={pickerVisible}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={{
            opacity: 0,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
          }}
        >
          {(options as unknown as PickerOption[]).map((o) => (
            <NativePicker.Item label={o.label} value={o.value} key={o.value} />
          ))}
        </NativePicker>
      )}
    </View>
  );
};

export default withTheme(Picker);
