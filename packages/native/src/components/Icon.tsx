import { withTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";
import * as React from "react";
import {
  View,
  StyleSheet,
  ViewProps,
  StyleProp,
  ImageStyle,
  Platform,
} from "react-native";

// This must use require to work in both web as a published project and in Snack
const VectorIcons = require("@expo/vector-icons");

type Props = {
  name: string;
  color?: string;
  size: number;
  style?: StyleProp<ImageStyle>;
  theme: ReadTheme;
} & ViewProps;

const Icon: React.FC<React.PropsWithChildren<Props>> = ({
  name,
  color,
  size,
  style,
  theme,
  ...rest
}) => {
  if (!name) return null;

  let iconSet = "MaterialIcons";
  if (name.indexOf("/") !== -1) {
    [iconSet, name] = name.split("/");
  }

  const IconSet = VectorIcons[iconSet];

  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      <IconSet
        {...rest}
        name={name}
        color={color ?? theme.colors.text.normal}
        size={size}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    ...Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none",
      },
    }),
  },
});

export default withTheme(Icon);
