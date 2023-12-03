import React from "react";
import {
  KeyboardAvoidingView as KeyboardAvoidingViewComponent,
  Platform,
  ViewProps,
} from "react-native";

const isIos = Platform.OS === "ios";
const isAndroid = Platform.OS === "android";

type KeyboardAvoidingViewBehavior = "height" | "position" | "padding";

interface KeyboardAvoidingViewProps extends ViewProps {
  enabled?: boolean;
  behavior?: KeyboardAvoidingViewBehavior;
  keyboardVerticalOffset?: number;
  androidBehavior?: KeyboardAvoidingViewBehavior;
  androidKeyboardVerticalOffset?: number;
  iosBehavior?: KeyboardAvoidingViewBehavior;
  iosKeyboardVerticalOffset?: number;
}

const KeyboardAvoidingView: React.FC<KeyboardAvoidingViewProps> = ({
  behavior = "padding",
  keyboardVerticalOffset = 0,
  androidBehavior,
  androidKeyboardVerticalOffset,
  iosBehavior,
  iosKeyboardVerticalOffset,
  ...rest
}) => {
  let behaviorResult: KeyboardAvoidingViewBehavior;

  if (isIos && iosBehavior !== undefined) {
    behaviorResult = iosBehavior;
  } else if (isAndroid && androidBehavior !== undefined) {
    behaviorResult = androidBehavior;
  } else {
    behaviorResult = behavior;
  }

  let keyboardVerticalOffsetResult: number;

  if (isIos && iosKeyboardVerticalOffset !== undefined) {
    keyboardVerticalOffsetResult = iosKeyboardVerticalOffset;
  } else if (isAndroid && androidKeyboardVerticalOffset !== undefined) {
    keyboardVerticalOffsetResult = androidKeyboardVerticalOffset;
  } else {
    keyboardVerticalOffsetResult = keyboardVerticalOffset;
  }

  return (
    <KeyboardAvoidingViewComponent
      behavior={behaviorResult}
      keyboardVerticalOffset={keyboardVerticalOffsetResult}
      {...rest}
    />
  );
};

export default KeyboardAvoidingView;
