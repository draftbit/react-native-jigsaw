import * as React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";

import Text from "../Text";
import type { IconSlot } from "../../interfaces/Icon";
import { extractStyles } from "../../utilities";
import { withTheme } from "../../theming";
import type { Theme } from "../../styles/DefaultTheme";

type Props = {
  icon?: string;
  label: string;
  iconColor?: string;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
} & IconSlot;

const AccordionItem = ({
  Icon,
  icon,
  label,
  style,
  iconColor,
  theme,
  ...rest
}: Props) => {
  const { textStyles, viewStyles } = extractStyles(style);
  return (
    <Pressable style={[styles.container, viewStyles]} {...rest}>
      <View style={styles.row}>
        {icon ? (
          <Icon
            name={icon}
            size={24}
            color={iconColor || theme.colors.primary}
          />
        ) : null}
        <View style={[styles.item, styles.content]}>
          <Text selectable={false} style={textStyles}>
            {label}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8,
  },
  item: {
    marginVertical: 6,
    paddingLeft: 8,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
});

export default withTheme(AccordionItem);
