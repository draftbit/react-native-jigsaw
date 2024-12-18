import React from "react";
import { View, StyleProp, ViewStyle, Text } from "react-native";
import { withTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";

interface SectionHeaderProps {
  style?: StyleProp<ViewStyle>;
}

const SectionHeader: React.FC<React.PropsWithChildren<SectionHeaderProps>> = ({
  style,
  children,
}) => <View style={[style]}>{children}</View>;

interface DefaultSectionHeaderProps {
  title: string;
  theme: ReadTheme;
}
export const DefaultSectionHeader = withTheme(
  ({ title, theme }: DefaultSectionHeaderProps) => {
    return (
      <Text
        testID="default-section-header"
        style={{
          color: theme.colors.background.base,
          backgroundColor: theme.colors.branding.primary,
          fontSize: 16,
          padding: 10,
        }}
      >
        {title}
      </Text>
    );
  }
);

export default SectionHeader;
