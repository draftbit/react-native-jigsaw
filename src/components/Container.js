import * as React from "react";
import { View, Image } from "react-native";
import { withTheme } from "../core/theming";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  BORDER_RADIUS_MODE,
  ELEVATION_TYPE
} from "../core/component-types";
import Elevation from "./Elevation";

class Container extends React.Component {
  render() {
    const {
      theme: { spacing },
      useThemeGutterPadding,
      backgroundColor,
      backgroundImage,
      backgroundImageResizeMode,
      elevation,
      style,
      children
    } = this.props;

    const containerStyle = {
      paddingHorizontal: useThemeGutterPadding ? spacing.gutters : 0,
      backgroundColor,
      width: "100%"
    };

    const Wrap = elevation ? Elevation : View;

    if (elevation) {
      containerStyle.elevation = elevation;
    }

    return (
      <Wrap style={[containerStyle, style]}>
        <React.Fragment>
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
                bottom: 0,
                left: 0,
                right: 0
              }}
            />
          ) : null}
          {children}
        </React.Fragment>
      </Wrap>
    );
  }
}

export default withTheme(Container);

export const SEED_DATA = {
  name: "Container",
  tag: "Container",
  description: "A container component with gutter padding",
  type: COMPONENT_TYPES.primitive,
  supports_list_render: false,
  layout: {},
  props: {
    useThemeGutterPadding: {
      label: "Use gutter padding",
      description:
        "When true, uses the theme gutter spacing as the container's horizontal padding",
      type: FORM_TYPES.boolean,
      value: true,
      editable: true,
      required: true
    },
    backgroundColor: {
      label: "Background color",
      description: "Background color to apply to the container",
      type: FORM_TYPES.color,
      value: "background",
      editable: true,
      required: false
    },
    backgroundImage: {
      label: "Background image",
      description: "Background image to apply to the container",
      type: FORM_TYPES.remoteImage,
      value: null,
      editable: true,
      required: false
    },
    backgroundImageResizeMode: {
      label: "Background image resize mode",
      description:
        "Determines how to resize the background image when the frame doesn't match the raw image dimensions",
      editable: true,
      required: false,
      value: null,
      type: FORM_TYPES.flatArray,
      options: ["cover", "contain", "stretch", "repeat", "center"]
    },
    borderRadiusMode: BORDER_RADIUS_MODE,
    elevation: {
      ...ELEVATION_TYPE,
      value: 0
    }
  }
};
