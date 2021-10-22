import * as React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";
import { withTheme } from "../theming";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  FIELD_NAME,
  Triggers,
  createBoolProp,
} from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
import Config from "./Config";
import { usePrevious } from "../hooks";

type Props = {
  showIcon: boolean;
  icon?: string;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
  onChange?: (text: string) => void;
  onSubmit?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  value?: string;
  initialValue?: string; // deprecated
  defaultValue?: string;
} & IconSlot;

const FieldSearchBarFull: React.FC<Props> = ({
  showIcon,
  Icon,
  icon = "search",
  placeholder = "",
  style,
  theme: { colors, typography },
  onChange: changeOverride,
  onSubmit: submitOverride,
  value,
  initialValue,
  defaultValue,
}) => {
  const [focused, setIsFocused] = React.useState(false);

  const onBlur = () => {
    setIsFocused(false);
  };

  const [internalValue, setIntervalValue] = React.useState<string | undefined>(
    value || defaultValue
  );

  React.useEffect(() => {
    setIntervalValue(value);
  }, [value]);

  const onChange = React.useCallback(
    (text: string) => {
      changeOverride && changeOverride(text);
    },
    [changeOverride]
  );

  const previousInitialValue = usePrevious(initialValue);
  React.useEffect(() => {
    if (initialValue !== previousInitialValue) {
      onChange(initialValue);
    }
  }, [initialValue, previousInitialValue, onChange]);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSubmit = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    submitOverride && submitOverride(e);
  };

  const { lineHeight, ...typeStyles } = typography.body2; // eslint-disable-line @typescript-eslint/no-unused-vars

  const handleChangeText = (newValue: string) => {
    setIntervalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <View style={[styles.container, style]}>
      {showIcon && (
        <Icon
          name={icon}
          size={Config.fieldSearchBarFullIconSize}
          color={focused ? colors.primary : colors.light}
        />
      )}
      <View style={{ marginLeft: showIcon ? 12 : 0, flex: 1 }}>
        <TextInput
          clearButtonMode="while-editing"
          placeholder={placeholder}
          value={internalValue}
          onBlur={onBlur}
          onFocus={onFocus}
          onChangeText={handleChangeText}
          onSubmitEditing={onSubmit}
          placeholderTextColor={colors.light}
          style={[
            {
              color: colors.medium,
            },
            typeStyles,
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default withTheme(FieldSearchBarFull);

export const SEED_DATA = [
  {
    name: "Search Bar",
    tag: "FieldSearchBarFull",
    description: "A search bar with accompanying search icon and clear button.",
    category: COMPONENT_TYPES.input,
    preview_image_url: "{CLOUDINARY_URL}/Field_SearchBar_Full.png",
    supports_list_render: false,
    triggers: [Triggers.OnChange], // TODO Triggers.OnSubmit for multiple triggers
    layout: {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      paddingBottom: 16,
    },
    props: {
      showIcon: createBoolProp({
        group: GROUPS.basic,
        label: "Show Icon",
        description: "Whether to show the Icon",
        defaultValue: true,
      }),
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
  },
];
