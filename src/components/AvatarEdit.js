// @flow
import * as React from "react";
import { View, Image } from "react-native";
import Icon from "./Icon";
import Touchable from "./Touchable";
import Avatar from "./Avatar";
import { withTheme } from "../core/theming";
import type { Theme } from "../types";
import type { IconSource } from "./Icon";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

export type AvatarEditProps = {
  /**
   * Image source for the avatar
   */
  image: IconSource,
  /**
   * Size of avatar in width and height
   */
  size: number,
  /**
   * Function to execute when image pressed
   */
  onPress: () => void,
  style?: any,
  theme: Theme
};

class AvatarEdit extends React.PureComponent<AvatarEditProps> {
  static defaultProps = {
    onPress: () => {}
  };

  render() {
    const {
      image,
      size,
      onPress,
      style,
      theme: { colors }
    } = this.props;

    const colorStyles = {
      editBackgroundColor: colors.primary,
      editIconColor: colors.surface,
      editBorderColor: colors.surface
    };

    return (
      <Touchable style={style} onPress={onPress}>
        <View>
          <Avatar image={image} size={size} />
          <View
            style={{
              position: "absolute",
              top: -3,
              right: -3,
              borderColor: colorStyles.editBorderColor,
              backgroundColor: colorStyles.editBackgroundColor,
              borderRadius: size * (3 / 16),
              padding: size * (3 / 32)
            }}
          >
            <Icon
              name="MaterialIcons/edit"
              color={colorStyles.editIconColor}
              size={size * (3 / 16)}
            />
          </View>
        </View>
      </Touchable>
    );
  }
}

export default withTheme(AvatarEdit);

export const SEED_DATA = {
  name: "Avatar Edit",
  tag: "AvatarEdit",
  description: "An avatar with an edit icon in the top right",
  category: COMPONENT_TYPES.button,
  preview_image_url:
    "https://res.cloudinary.com/altos/image/upload/draftbit/Jigsaw/AvatarEdit.png",
  props: {
    size: {
      label: "Size",
      description: "Size of avatar / width, height",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      min: 0,
      max: 300,
      precision: 0,
      step: 1,
      value: 80
    },
    image: {
      label: "Image",
      description: "Name of the image",
      editable: true,
      required: true,
      type: FORM_TYPES.remoteImage,
      value: "brightness-5"
    }
  },
  layout: {
    width: 64,
    height: 64
  }
};
