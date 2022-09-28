import * as React from "react";
import { ViewProps, StyleProp, ImageStyle } from "react-native";
declare type Props = {
  name:
    | string
    | number
    | {
        uri: string;
      };
  color?: string;
  size: number;
  style?: StyleProp<ImageStyle>;
} & ViewProps;
declare const Icon: React.FC<React.PropsWithChildren<Props>>;
export default Icon;
