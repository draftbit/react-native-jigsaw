import React from "react";
import {
  AvoidSoftInput,
  AvoidSoftInputView,
  AvoidSoftInputViewProps,
} from "react-native-avoid-softinput";

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
    AvoidSoftInput.setShouldMimicIOSBehavior(true);
    return () => {
      AvoidSoftInput.setShouldMimicIOSBehavior(false);
    };
  }, []);

  return (
    <AvoidSoftInputView
      onSoftInputHidden={onKeyboardHidden}
      onSoftInputShown={onKeyboardShown}
      {...rest}
    />
  );
};

export default AvoidKeyboardView;
