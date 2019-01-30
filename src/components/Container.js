import * as React from "react";
import { View, Image } from "react-native";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

class Container extends React.Component {
  render() {
    const {
      theme: { spacing },
      useThemeGutterPadding,
      backgroundColor,
      backgroundImage,
      backgroundImageResizeMode,
      style,
      children
    } = this.props;

    const containerStyle = {
      paddingHorizontal: useThemeGutterPadding ? spacing.gutters : 0,
      backgroundColor
    };

    return (
      <View style={[containerStyle, style]}>
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
      </View>
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
  layout: {
    width: 375,
    height: 100
  },
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
      value: null,
      editable: true,
      required: false
    },
    backgroundImage: {
      label: "Background image",
      description: "Background image to apply to the container",
      type: FORM_TYPES.localImage,
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
    }
  }
};
