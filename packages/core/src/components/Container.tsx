import * as React from "react";
import {
  View,
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { withTheme } from "../theming";

import Elevation from "./Elevation";
import type { Theme } from "../styles/DefaultTheme";
import { ResizeModeType } from "./ResizeMode";

type Props = {
  theme: Theme;
  useThemeGutterPadding: boolean;
  borderColor: string;
  borderWidth: number;
  backgroundColor: string;
  backgroundImage?: string | ImageSourcePropType;
  backgroundImageResizeMode?: ResizeModeType;
  elevation?: number;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const Container: React.FC<React.PropsWithChildren<Props>> = ({
  useThemeGutterPadding,
  borderColor,
  borderWidth,
  backgroundColor,
  backgroundImage,
  backgroundImageResizeMode,
  elevation,
  style,
  children,
  theme, // eslint-disable-line @typescript-eslint/no-unused-vars
  ...rest
}) => {
  const {
    flex,
    flexGrow,
    flexWrap,
    flexBasis,
    flexShrink,
    flexDirection,
    alignContent,
    justifyContent,
    alignItems,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingVertical,
    paddingHorizontal,
    ...styleProp
  } = StyleSheet.flatten(style) || {};

  const containerStyle: StyleProp<ViewStyle> = {
    backgroundColor,
    borderColor,
    borderWidth,
    width: "100%",
    ...styleProp,
  };

  const innerStyle: StyleProp<ViewStyle> = {
    flex,
    flexGrow,
    flexWrap,
    flexBasis,
    flexShrink,
    flexDirection,
    alignContent,
    justifyContent,
    alignItems,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingVertical,
    paddingHorizontal: paddingHorizontal || useThemeGutterPadding ? 16 : 0,
  };

  const Wrap = elevation ? Elevation : View;

  if (elevation) containerStyle.elevation = elevation;

  return (
    <Wrap style={[containerStyle, style]} {...rest}>
      {backgroundImage ? (
        <ImageBackground
          source={
            typeof backgroundImage === "string"
              ? { uri: backgroundImage }
              : backgroundImage
          }
          resizeMode={backgroundImageResizeMode}
          style={{
            flex: 1,
          }}
        >
          <View style={innerStyle}>{children}</View>
        </ImageBackground>
      ) : (
        <View style={innerStyle}>{children}</View>
      )}
    </Wrap>
  );
};

export default withTheme(Container);
