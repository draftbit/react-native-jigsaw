import * as React from "react";
import {
  View,
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { withTheme } from "../core/theming";

import Elevation from "./Elevation";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  createElevationType,
} from "../core/component-types";
import ThemeT from "../styles/DefaultTheme";
import { ResizeModeType } from "./ResizeMode";

type Props = {
  theme: typeof ThemeT;
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
  const { flexDirection, justifyContent, alignItems, ...styleProp } =
    StyleSheet.flatten(style) || {};

  const containerStyle: StyleProp<ViewStyle> = {
    backgroundColor,
    borderColor,
    borderWidth,
    width: "100%",
    ...styleProp,
  };

  const innerStyle: StyleProp<ViewStyle> = {
    flex: 1,
    paddingHorizontal: useThemeGutterPadding ? 16 : 0,
    flexDirection,
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
  category: COMPONENT_TYPES.layout,
  supports_list_render: false,
  layout: {},
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
    backgroundImage: {
      group: GROUPS.data,
      label: "Background image",
      description: "Background image to apply to the container",
      formType: FORM_TYPES.image,
      propType: PROP_TYPES.ASSET,
      defaultValue: null,
      editable: true,
      required: false,
    },
    backgroundImageResizeMode: {
      group: GROUPS.basic,
      label: "Background image resize mode",
      description:
        "Determines how to resize the background image when the frame doesn't match the raw image dimensions",
      editable: true,
      required: false,
      defaultValue: null,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      options: ["cover", "contain", "stretch", "repeat", "center"],
    },
    elevation: createElevationType(0),
  },
};
