/**
 * This is an interface for a hybrid component.
 *
 * Its public implementation is `@draftbit/native`, and it is injected inside
 * `@draftbit/ui`.
 */
import React from "react";
import { ViewProps, StyleProp, ImageStyle } from "react-native";

type Props = {
  name: string;
  color?: string;
  size: number;
  style?: StyleProp<ImageStyle>;
} & ViewProps;

export type IconI = React.ComponentType<Props>;

export interface IconSlot {
  Icon: IconI;
}

type $Without<T, K> = Pick<T, Exclude<keyof T, K>>;

export const injectIcon = <P extends IconSlot>(
  Component: React.ComponentType<P>,
  Icon: IconI
) =>
  React.forwardRef<any, $Without<P, "Icon">>((props, ref) =>
    React.createElement(Component, { ...(props as P), Icon, ref })
  );
