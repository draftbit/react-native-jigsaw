/* @flow */

import color from "color";
import type { Theme } from "../components/types";

export default function shadow(elevation: number, theme: Theme) {
  if (theme.elevation[elevation]) {
    const { borderOpacity, ...themeElevation } = theme.elevation[elevation];
    themeElevation.borderColor = color(themeElevation.borderColor)
      .alpha(borderOpacity)
      .rgb()
      .string();

    return themeElevation;
  } else return theme.elevation[0];
}
