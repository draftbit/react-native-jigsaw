import * as React from "react";
import { withTheme } from "../../theming";
//@ts-ignore
import PickerComponent from "./PickerComponent"; //unable to find file due to using .android/.web/.ios
import { PickerComponentProps, PickerOption } from "./PickerTypes";

type Props = PickerComponentProps & {
  placeholder?: string;
  value?: string;
  options: PickerOption[] | string[];
};

function normalizeOptions(options: Props["options"]): PickerOption[] {
  if (options.length === 0) {
    return [];
  }

  if (typeof options[0] === "string") {
    return (options as string[]).map((option) => ({
      label: option,
      value: String(option),
    }));
  }

  if (options[0].label && options[0].value) {
    return options.map((option) => {
      return {
        label: option.label,
        value: String(option.value),
      };
    });
  }

  throw new Error(
    'Picker options must be either an array of strings or array of { "label": string; "value": string; } objects.'
  );
}

const Picker: React.FC<Props> = ({
  options = [],
  placeholder,
  onValueChange: onValueChangeOverride,
  value,
  defaultValue,
  ...props
}) => {
  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    value || defaultValue
  );

  React.useEffect(() => {
    if (value != null) {
      setInternalValue(value);
    }
  }, [value]);

  React.useEffect(() => {
    if (defaultValue != null) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue]);

  const onValueChange = React.useCallback(
    (itemValue: string, itemIndex: number) => {
      if (placeholder && itemIndex === 0) {
        return;
      }
      onValueChangeOverride &&
        onValueChangeOverride(String(itemValue), itemIndex);
    },
    [placeholder, onValueChangeOverride]
  );

  const normalizedOptions = normalizeOptions(options);

  const pickerOptions = placeholder
    ? [{ value: placeholder, label: placeholder }, ...normalizedOptions]
    : normalizedOptions;

  const handleValueChange = (newValue: string, itemIndex: number) => {
    setInternalValue(newValue);
    if (onValueChange) {
      onValueChange(newValue, itemIndex);
    }
  };

  return (
    <PickerComponent
      {...props}
      selectedValue={String(internalValue)}
      placeholder={placeholder}
      options={pickerOptions}
      onValueChange={handleValueChange}
    />
  );
};

export default withTheme(Picker);
