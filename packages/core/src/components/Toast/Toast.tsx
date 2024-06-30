import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { View, Text } from "react-native";
import { extractStyles } from "../../utilities";
import { ReadTheme, withTheme } from "@draftbit/theme";

type Props = {
  visible: boolean;
  title: string;
  style?: StyleProp<ViewStyle>;
  theme: ReadTheme;
};

const Toast: React.FC<React.PropsWithChildren<Props>> = ({
  visible = false,
  title,
  style,
  theme,
}) => {
  if (!visible) return null;
  const { textStyles, viewStyles } = extractStyles(style);
  return (
    <View
      style={[
        {
          backgroundColor: "rgba(0,0,0,0.7)",
        },
        viewStyles,
      ]}
    >
      <Text
        style={[
          {
            color: theme.colors.text.strong,
          },
          textStyles,
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

export default withTheme(Toast);
