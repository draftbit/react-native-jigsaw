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
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  createElevationType,
  createImageProp,
  createResizeModeProp,
} from "@draftbit/types";
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

const Container: React.FC<Props> = ({
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
    paddingHorizontal: useThemeGutterPadding ? 16 : 0,
    flex,
    flexGrow,
    flexWrap,
    flexBasis,
    flexShrink,
    flexDirection,
    alignContent,
    justifyContent,
    alignItems,
  };

  const Wrap = elevation ? Elevation : View;

  if (elevation) {
    containerStyle.elevation = elevation;
  }

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

export const SEED_DATA = {
  name: "Container",
  tag: "Container",
  description: "A container component with gutter padding",
  category: COMPONENT_TYPES.deprecated,
  layout: {
    height: 250,
  },
  props: {
    useThemeGutterPadding: {
      group: GROUPS.basic,
      label: "Use gutter padding",
      description:
        "When true, uses the theme gutter spacing as the container's horizontal padding",
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: false,
      editable: false,
      required: true,
    },
    backgroundImage: createImageProp({
      label: "Background Image",
      description: "Apply a custom background image",
      defaultValue: null,
    }),
    backgroundImageResizeMode: createResizeModeProp(),
    elevation: createElevationType(0),
  },
};
