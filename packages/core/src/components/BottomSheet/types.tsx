import { StyleProp, ViewStyle, TextStyle } from "react-native";

export interface BottomSheetProps {
  style: StyleProp<ViewStyle | TextStyle>;
  children: React.ReactNode;
  step: number;
  isOpen?: Boolean;
}
