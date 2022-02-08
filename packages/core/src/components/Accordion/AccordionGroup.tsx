import * as React from "react";
import {
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  Pressable,
} from "react-native";
import Text from "../Text";
import { withTheme } from "../../theming";
import type { IconSlot } from "../../interfaces/Icon";
import type { Theme } from "../../styles/DefaultTheme";
import { extractStyles } from "../../utilities";

type Props = {
  openColor: string;
  closedColor: string;
  caretColor: string;
  icon?: string;
  iconSize: number;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  label: string;
  expanded?: boolean;
  theme: Theme;
} & IconSlot;

const AccordionGroup = ({
  Icon,
  openColor,
  closedColor,
  caretColor,
  icon,
  iconSize = 24,
  style,
  label,
  children,
  expanded: expandedProp,
  theme,
}: Props) => {
  const [expanded, setExpanded] = React.useState<boolean>(
    expandedProp || false
  );

  const handlePressAction = () => {
    setExpanded(!expanded);
  };

  const expandedInternal = expandedProp !== undefined ? expandedProp : expanded;

  const expandedColor = openColor || theme.colors.primary;
  const collapsedColor = closedColor || theme.colors.primary;

  const labelColor = expanded ? expandedColor : collapsedColor;

  const { textStyles, viewStyles } = extractStyles(style);

  return (
    <>
      <Pressable
        style={[styles.row, viewStyles]}
        onPress={handlePressAction}
        accessibilityRole="button"
      >
        {icon ? (
          <Icon
            name={icon}
            size={iconSize}
            color={labelColor}
            style={styles.icon}
          />
        ) : null}
        <View style={styles.content}>
          <Text
            selectable={false}
            style={[
              textStyles,
              {
                color: labelColor,
              },
            ]}
          >
            {label}
          </Text>
        </View>
        <Icon
          name={
            expanded
              ? "MaterialIcons/keyboard-arrow-up"
              : "MaterialIcons/keyboard-arrow-down"
          }
          color={caretColor}
          size={24}
        />
      </Pressable>
      {expandedInternal ? children : null}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  icon: {
    marginRight: 8,
  },
});

export default withTheme(AccordionGroup);
