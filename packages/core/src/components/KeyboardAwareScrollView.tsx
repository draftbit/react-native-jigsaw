import * as React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type Props = {
  children: React.ReactNode;
  viewIsInsideTabBar: boolean;
  enableAutomaticScroll?: boolean;
  extraHeight?: number;
  extraScrollHeight?: number;
  enableResetScrollToCoords?: boolean;
  keyboardOpeningTime?: number;
  enableOnAndroid?: boolean;
};

const KeyboardAware = ({ children, ...props }: Props) => (
  <KeyboardAwareScrollView {...props}>{children}</KeyboardAwareScrollView>
);

export default KeyboardAware;
