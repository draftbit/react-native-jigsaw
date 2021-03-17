import * as React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";
import { withTheme } from "../core/theming";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  FIELD_NAME,
} from "../core/component-types";
import Icon from "./Icon";
import IconButton from "./IconButton";
import Config from "./Config";
import theme from "../styles/DefaultTheme";

type Props = {
  icon?: string;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  theme: typeof theme;
  onChange: (text: string) => void;
  onSubmit?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  IconOverride?: typeof Icon;
  value: string;
};

type TextInputHandles = Pick<
  TextInput,
  "setNativeProps" | "isFocused" | "clear" | "blur" | "focus"
>;

const FieldSearchBarFull = React.forwardRef<TextInputHandles, Props>(
  (
    {
      icon = "MaterialIcons/search",
      placeholder = "Search for...",
      style,
      theme: { dark, colors, typography, borderRadius },
      onChange = () => {},
      onSubmit = () => {},
      IconOverride = null,
      value,
      ...rest
    },
    ref
  ) => {
    const SelectedIcon = IconOverride || Icon;
    const root = React.useRef<TextInput>(null);
    const [focused, setIsFocused] = React.useState(false);

    React.useImperativeHandle(ref, () => {
      const input = root.current;

      if (input) {
        return {
          focus: input.focus,
          clear: input.clear,
          setNativeProps: (args: TextInputProps) => input.setNativeProps(args),
          isFocused: input.isFocused,
          blur: input.blur,
        };
      }

      const noop = () => {
        throw new Error("TextInput is not available");
      };

      return {
        focus: noop,
        clear: noop,
        setNativeProps: noop,
        isFocused: noop,
        blur: noop,
      };
    });

    const handleClearPress = () => {
      root.current?.clear();
      rest.onChange?.("");
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const { lineHeight, ...typeStyles } = typography.body2; // eslint-disable-line @typescript-eslint/no-unused-vars

    return (
      <View style={[styles.container, { borderRadius }, style]}>
        <SelectedIcon
          name={icon}
          size={Config.fieldSearchBarFullIconSize}
          color={focused ? colors.primary : colors.light}
        />
        <TextInput
          style={[styles.input, { color: colors.text }, typeStyles]}
          clearButtonMode="never"
          placeholder={placeholder}
          placeholderTextColor={colors.placeholder}
          selectionColor={colors.primary}
          underlineColorAndroid="transparent"
          returnKeyType="search"
          keyboardAppearance={dark ? "dark" : "light"}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
          accessibilityRole="search"
          ref={root}
          {...rest}
        />
        <IconButton
          icon="MaterialIcons/clear"
          onPress={handleClearPress}
          size={24}
          color={colors.placeholder}
          IconOverride={SelectedIcon}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderColor: "#eee",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 8,
    alignSelf: "stretch",
    textAlign: "left",
    minWidth: 0,
  },
});

export default withTheme(FieldSearchBarFull);

export const SEED_DATA = [
  {
    name: "Search Bar",
    tag: "FieldSearchBarFull",
    description: "A search bar with accompanying search icon and clear button.",
    category: COMPONENT_TYPES.field,
    preview_image_url: "{CLOUDINARY_URL}/Field_SearchBar_Full.png",
    supports_list_render: false,
    props: {
      icon: {
        group: GROUPS.basic,
        label: "Icon",
        description: "Left icon to display",
        formType: FORM_TYPES.icon,
        propType: PROP_TYPES.ASSET,
        defaultValue: null,
        editable: true,
        required: false,
      },
      placeholder: {
        group: GROUPS.basic,
        label: "Placeholder",
        description: "Input placeholder text",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "Search for...",
        editable: true,
        required: false,
      },
      onSubmit: {
        group: GROUPS.basic,
        label: "Submit action",
        description: "Action to execute on submission",
        editable: true,
        required: false,
        formType: FORM_TYPES.action,
        propType: PROP_TYPES.STRING,
        defaultValue: null,
      },
      fieldName: {
        ...FIELD_NAME,
        defaultValue: "searchBarValue",
      },
    },
    layout: {},
  },
];
