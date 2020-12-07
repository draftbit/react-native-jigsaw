import * as React from "react";
import { View, Image, StyleProp, ViewStyle } from "react-native";
import { withTheme } from "../core/theming";
import Elevation from "./Elevation";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  createElevationType,
} from "../core/component-types";
import theme from "../styles/DefaultTheme";
import { ResizeModeType } from "./ResizeMode";

interface Props {
  theme: typeof theme;
  useThemeGutterPadding: boolean;
  borderColor: string;
  borderWidth: number;
  backgroundColor: string;
  backgroundImage?: string | Blob;
  backgroundImageResizeMode?: ResizeModeType;
  elevation?: number;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const Container: React.FC<Props> = ({
  theme: { spacing },
  useThemeGutterPadding,
  borderColor,
  borderWidth,
  backgroundColor,
  backgroundImage,
  backgroundImageResizeMode,
  elevation,
  style,
  children,
}) => {
  const containerStyle: StyleProp<ViewStyle> = {
    backgroundColor,
    borderColor,
    borderWidth,
    width: "100%",
  };

  const innerStyle: StyleProp<ViewStyle> = {
    paddingHorizontal: useThemeGutterPadding ? spacing.gutters : 0,
  };

  const Wrap = elevation ? Elevation : View;

  if (elevation) {
    containerStyle.elevation = elevation;
  }

  return (
    <Wrap style={[containerStyle, style]}>
      {backgroundImage ? (
        <Image
          source={
            typeof backgroundImage === "string"
              ? { uri: backgroundImage }
              : backgroundImage
          }
          resizeMode={backgroundImageResizeMode}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
          }}
        />
      ) : null}
      <View style={innerStyle}>{children}</View>
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
      defaultValue: true,
      editable: true,
      required: true,
    },
    backgroundImage: {
      group: GROUPS.data,
      label: "Background image",
      description: "Background image to apply to the container",
      formType: FORM_TYPES.remoteImage,
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
      options: ["cover", "contain", "stretch", "repeat", "center"],
    },
    elevation: createElevationType(0),
  },
};
