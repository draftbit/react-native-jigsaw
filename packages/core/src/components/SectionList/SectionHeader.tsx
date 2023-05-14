import React from "react";
import { View, StyleProp, ViewStyle, Text } from "react-native";
import { withTheme } from "../../theming";
import type { Theme } from "../../styles/DefaultTheme";

export interface SectionHeaderProps {
  style?: StyleProp<ViewStyle>;
  isSectionHeader?: true; //Indicates to the parent SectionList that this is the section header component
}

const SectionHeader: React.FC<React.PropsWithChildren<SectionHeaderProps>> = ({
  style,
  children,
  // @ts-ignore Used by parent component only, ignore warning
  isSectionHeader = true, // eslint-disable-line @typescript-eslint/no-unused-vars
}) => <View style={[style]}>{children}</View>;

interface DefaultSectionHeaderProps {
  title: string;
  theme: Theme;
}
export const DefaultSectionHeader = withTheme(
  ({ title, theme }: DefaultSectionHeaderProps) => {
    return (
      <Text
        style={{
          color: theme.colors.background,
          backgroundColor: theme.colors.primary,
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
