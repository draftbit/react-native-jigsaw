import * as React from "react";
import { View, ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import Touchable from "../components/Touchable";
import CircleImage from "./CircleImage";
import { withTheme } from "@draftbit/theme";

import type { Theme } from "@draftbit/theme";
import type { IconSlot } from "../interfaces/Icon";

type Props = {
  image: string | ImageSourcePropType;
  size?: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
} & IconSlot;

/**
 * @deprecated DEPRECATED
 */
const AvatarEdit: React.FC<React.PropsWithChildren<Props>> = ({
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
