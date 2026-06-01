import React from "react";
import {
  KeyboardAvoidingView as KeyboardAvoidingViewComponent,
  Platform,
  ViewProps,
} from "react-native";

const isIos = Platform.OS === "ios";
const isAndroid = Platform.OS === "android";

type KeyboardAvoidingViewBehavior = "height" | "position" | "padding" | null;

interface KeyboardAvoidingViewProps extends ViewProps {
  enabled?: boolean;
  behavior?: KeyboardAvoidingViewBehavior;
  keyboardVerticalOffset?: number;
  androidBehavior?: KeyboardAvoidingViewBehavior;
  androidKeyboardVerticalOffset?: number;
  iosBehavior?: KeyboardAvoidingViewBehavior;
  iosKeyboardVerticalOffset?: number;
  className?: string;
}

const KeyboardAvoidingView: React.FC<KeyboardAvoidingViewProps> = ({
  behavior = "padding",
  keyboardVerticalOffset = 0,
  androidBehavior,
  androidKeyboardVerticalOffset,
  iosBehavior,
  iosKeyboardVerticalOffset,
  className,
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
      behavior={behaviorResult ?? undefined}
      keyboardVerticalOffset={keyboardVerticalOffsetResult}
      // @ts-ignore
      className={className}
      {...rest}
    />
  );
};

export default KeyboardAvoidingView;
