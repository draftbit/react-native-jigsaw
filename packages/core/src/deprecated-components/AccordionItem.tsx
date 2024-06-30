import * as React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";

import Text from "../components/Text";
import type { IconSlot } from "../interfaces/Icon";
import { extractStyles } from "../utilities";
import { withTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";

type Props = {
  icon?: string;
  label: string;
  iconColor?: string;
  style?: StyleProp<ViewStyle>;
  theme: ReadTheme;
} & IconSlot;

/**
 * @deprecated DEPRECATED: Use direct children with AccordianGroup
 */
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
            color={iconColor || theme.colors.branding.primary}
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
