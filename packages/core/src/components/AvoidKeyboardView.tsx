import React from "react";
import { View } from "react-native";
import type {
  AvoidSoftInput as AvoidSoftInputType,
  AvoidSoftInputView as AvoidSoftInputViewType,
  AvoidSoftInputViewProps,
} from "react-native-avoid-softinput";

// `react-native-avoid-softinput` is an optional dependency and there is a possibility that it is not installed resulting in undefined references
let AvoidSoftInput: typeof AvoidSoftInputType | null = null;
let AvoidSoftInputView: typeof AvoidSoftInputViewType | null = null;

try {
  const avoidSoftInputPackage = require("react-native-avoid-softinput");
  AvoidSoftInput = avoidSoftInputPackage.AvoidSoftInput;
  AvoidSoftInputView = avoidSoftInputPackage.AvoidSoftInputView;
} catch (_) {
  console.warn(
    "`react-native-avoid-softinput` is not installed, falling back to `View`. No keyboard avoiding capabilties will be used."
  );
}

/**
 * Requires additional setup: https://mateusz1913.github.io/react-native-avoid-softinput/docs/guides
 * Cannot be used with Expo Go
 * Will work on on Draftbit Live Preview or an app that is setup according to the linked guide
 */

interface AvoidKeyboardViewProps
  extends Omit<
    AvoidSoftInputViewProps,
    "onSoftInputHidden" | "onSoftInputShown"
  > {
  onKeyboardShown?: () => void;
  onKeyboardHidden?: () => void;
}

const AvoidKeyboardView: React.FC<AvoidKeyboardViewProps> = ({
  onKeyboardHidden,
  onKeyboardShown,
  ...rest
}) => {
  React.useEffect(() => {
    if (AvoidSoftInput) {
      AvoidSoftInput.setShouldMimicIOSBehavior(true);
    }
    return () => {
      if (AvoidSoftInput) {
        AvoidSoftInput.setShouldMimicIOSBehavior(false);
      }
    };
  }, []);

  if (AvoidSoftInputView) {
    return (
      <AvoidSoftInputView
        onSoftInputHidden={onKeyboardHidden}
        onSoftInputShown={onKeyboardShown}
        {...rest}
      />
    );
  } else {
    return <View {...rest} />;
  }
};

export default AvoidKeyboardView;
