/**
 * This is an interface for a hybrid component.
 *
 * Its public implementation is `@draftbit/native`, and it is injected inside
 * `@draftbit/ui`.
 */
import React from "react";
import { ViewProps, StyleProp, ImageStyle } from "react-native";

import { Subtract } from "utility-types";

type Props = {
  name: string | number | { uri: string };
  color?: string;
  size: number;
  style?: StyleProp<ImageStyle>;
} & ViewProps;

export type IconI = React.ComponentType<Props>;

export interface IconSlot {
  Icon: IconI;
}

export const injectIcon =
  <P extends IconSlot>(Component: React.ComponentType<P>, Icon: IconI) =>
  (props: Subtract<P, IconSlot>) =>
    React.createElement(Component, { ...(props as P), Icon });
