import * as React from "react";
import { View } from "react-native";
import Icon from "./Icon";
import Touchable from "./Touchable";
import Avatar from "./Avatar";
import { withTheme } from "../core/theming";

import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

class AvatarEdit extends React.PureComponent {
  static defaultProps = {
    size: 80,
    onPress: () => {},
  };

  render() {
    const {
      image,
      size,
      onPress,
      style,
      theme: { colors },
    } = this.props;

    const colorStyles = {
      editBackgroundColor: colors.primary,
      editIconColor: colors.surface,
      editBorderColor: colors.surface,
    };

    const dimensions = {
      width: size,
      height: size,
    };

    return (
      <View style={[style, dimensions]}>
        <Touchable onPress={onPress}>
          <Avatar image={image} size={size} />
          <View
            style={{
              position: "absolute",
              top: -3,
              right: -3,
              borderColor: colorStyles.editBorderColor,
              backgroundColor: colorStyles.editBackgroundColor,
              borderRadius: size * (3 / 16),
              padding: size * (3 / 32),
            }}
          >
            <Icon
              name="MaterialIcons/edit"
              color={colorStyles.editIconColor}
              size={size * (3 / 16)}
            />
          </View>
        </Touchable>
      </View>
    );
  }
}

export default withTheme(AvatarEdit);

export const SEED_DATA = {
  name: "Avatar Edit",
  tag: "AvatarEdit",
  description: "An avatar with an edit icon in the top right",
  category: COMPONENT_TYPES.deprecated,
  preview_image_url:
    "https://res.cloudinary.com/altos/image/upload/draftbit/Jigsaw/AvatarEdit.png",
  props: {
    size: {
      label: "Size",
      description: "Size of avatar / width, height",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 0,
      max: 300,
      precision: 0,
      step: 1,
      value: 80,
    },
    image: {
      label: "Image",
      description: "Name of the image",
      editable: true,
      required: true,
      formType: FORM_TYPES.remoteImage,
      value: "brightness-5",
    },
  },
  layout: {
    width: 64,
    height: 64,
  },
};
