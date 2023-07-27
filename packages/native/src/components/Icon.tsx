import * as React from "react";
import { ViewProps, StyleProp, ImageStyle, Platform } from "react-native";

// This must use require to work in both web as a published project and in Snack
const VectorIcons = require("@expo/vector-icons");

type Props = {
  name: string;
  color?: string;
  size: number;
  style?: StyleProp<ImageStyle>;
} & ViewProps;

const Icon: React.FC<React.PropsWithChildren<Props>> = ({
  name,
  color,
  size,
  style,
  ...rest
}) => {
  if (!name) return null;

  let iconSet = "MaterialIcons";
  if (name.indexOf("/") !== -1) {
    [iconSet, name] = name.split("/");
  }

  const IconSet = VectorIcons[iconSet];

  return (
    <IconSet
      {...rest}
      name={name}
      color={color}
      size={size}
      style={[
        {
          ...Platform.select({
            web: {
              cursor: "pointer",
              userSelect: "none",
            },
          }),
        },
        ,
        style,
      ]}
    />
  );
};

export default Icon;
