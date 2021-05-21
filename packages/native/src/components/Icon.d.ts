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
declare const Icon: React.FC<Props>;
export default Icon;
export declare const SEED_DATA: {
  name: string;
  tag: string;
  description: string;
  category: string;
  layout: {};
  props: {
    name: {
      label: string;
      description: string;
      formType: string;
      propType: string;
      defaultValue: string;
      required: boolean;
      editable: boolean;
      group: string;
    };
    color: {
      group: string;
      label: string;
      description: string;
      editable: boolean;
      required: boolean;
      defaultValue: null;
      formType: string;
      propType: string;
    };
    size: {
      label: string;
      description: string;
      formType: string;
      propType: string;
      group: string;
      defaultValue: null;
      editable: boolean;
      required: boolean;
      min: number;
      step: number;
    };
  };
};
