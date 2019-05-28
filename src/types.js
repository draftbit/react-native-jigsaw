/* @flow */

export type Color = string

export type Colors = {|
  primary: Color,
  secondary: Color,
  surface: Color,
  background: Color,
  error: Color,
  divider: Color,
  strong: Color,
  medium: Color,
  light: Color,
  strongInverse: Color,
  mediumInverse: Color,
  lightInverse: Color
|}

export type TypeStyle = {|
  fontFamily: string,
  fontWeight: string,
  fontSize: number,
  lineHeight: number,
  letterSpacing: number
|}

export type Typography = {|
  headline1: TypeStyle,
  headline2: TypeStyle,
  headline3: TypeStyle,
  headline4: TypeStyle,
  headline5: TypeStyle,
  headline6: TypeStyle,
  subtitle1: TypeStyle,
  subtitle2: TypeStyle,
  body1: TypeStyle,
  body2: TypeStyle,
  button: TypeStyle,
  caption: TypeStyle,
  overline: TypeStyle
|}

export type Spacing = {|
  gutters: number,
  text: number,
  small: number,
  medium: number,
  large: number
|}

export type BorderRadius = {|
  global: number,
  button: number
|}

export type Elevation = {|
  shadowColor: Color,
  shadowOffset: {| width: number, height: number |},
  shadowRadius: number,
  shadowOpacity: number,
  borderWidth: number,
  borderColor: Color,
  borderOpacity: number
|}

export type Theme = {|
  disabledOpacity: number,
  colors: Colors,
  typography: Typography,
  spacing: Spacing,
  borderRadius: BorderRadius,
  elevation: {| 0: Elevation, 1: Elevation, 2: Elevation, 3: Elevation |}
|}

export type ThemeShape = $Shape<{
  ...Theme,
  colors: $Shape<$PropertyType<Theme, "colors">>,
  typography: $Shape<$PropertyType<Theme, "typography">>,
  spacing: $Shape<$PropertyType<Theme, "spacing">>,
  borderRadius: $Shape<$PropertyType<Theme, "borderRadius">>,
  elevation: $Shape<$PropertyType<Theme, "elevation">>
}>
