import color from "color"

export default function shadow(elevation, theme) {
  if (theme.elevation[elevation]) {
    const { borderOpacity, ...themeElevation } = theme.elevation[elevation]
    themeElevation.borderColor = color(themeElevation.borderColor)
      .alpha(borderOpacity)
      .rgb()
      .string()

    return themeElevation
  } else return theme.elevation[0]
}
