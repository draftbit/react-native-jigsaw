import * as React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextInputProps,
} from "react-native";
import { withTheme } from "../core/theming";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  createFieldName,
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
  onChangeText?: (text: string) => void;
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
      theme: { dark, colors, borderRadius },
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
      rest.onChangeText?.("");
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    return (
      <View style={[styles.container, { borderRadius }, style]}>
        <SelectedIcon
          name={icon}
          size={Config.fieldSearchBarFullIconSize}
          color={focused ? colors.primary : colors.light}
        />
        <TextInput
          style={[styles.input, { color: colors.text }]}
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
          accessibilityRole="search"
          ref={root}
          {...rest}
        />
        {value ? (
          <IconButton
            size={20}
            icon="MaterialIcons/clear"
            onPress={handleClearPress}
            color={colors.placeholder}
            IconOverride={SelectedIcon}
            // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
            accessibilityTraits="button"
            accessibilityComponentType="button"
            accessibilityRole="button"
            hitSlop={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 12,
            }}
          />
        ) : null}
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
    layout: {
      padding: 8,
      borderColor: "#eee",
      borderWidth: 1,
    },
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
        description: "Placeholder text",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "Search for...",
        editable: true,
        required: false,
      },
      onSubmit: {
        group: GROUPS.basic,
        label: "Action",
        description: "Action to execute on submission",
        editable: true,
        required: false,
        formType: FORM_TYPES.action,
        propType: PROP_TYPES.STRING,
        defaultValue: null,
      },
      fieldName: createFieldName({
        defaultValue: "query",
        handlerPropName: "onChangeText",
      }),
    },
  },
];
