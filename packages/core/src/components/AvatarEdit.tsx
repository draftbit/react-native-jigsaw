import * as React from "react";
import { View, ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import Touchable from "./Touchable";
import CircleImage from "./CircleImage";
import { withTheme } from "../theming";

import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
} from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

type Props = {
  image: string | ImageSourcePropType;
  size?: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
} & IconSlot;

const AvatarEdit: React.FC<Props> = ({
  Icon,
  image,
  size = 80,
  onPress = () => {},
  style,
  theme,
  ...rest
}) => {
  const colorStyles = {
    editBackgroundColor: theme.colors.primary,
    editIconColor: theme.colors.surface,
    editBorderColor: theme.colors.surface,
  };

  const dimensions = {
    width: size,
    height: size,
  };

  return (
    <View style={[style, dimensions]} {...rest}>
      <Touchable onPress={onPress}>
        <CircleImage source={image} size={size} />
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
};

export default withTheme(AvatarEdit);

export const SEED_DATA = {
  name: "Avatar Edit",
  tag: "AvatarEdit",
  description: "An avatar with an edit icon in the top right",
  category: COMPONENT_TYPES.deprecated,
  layout: {
    width: 64,
    height: 64,
  },
  props: {
    size: {
      group: GROUPS.basic,
      label: "Size",
      description: "Size of avatar / width, height",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      min: 0,
      max: 300,
      precision: 0,
      step: 1,
      defaultValue: 80,
    },
    image: {
      group: GROUPS.data,
      label: "Image",
      description: "Name of the image",
      editable: true,
      required: true,
      formType: FORM_TYPES.image,
      propType: PROP_TYPES.ASSET,
      defaultValue: "brightness-5",
    },
  },
};
