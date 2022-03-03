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

type AccordionGroupProps = {
  label?: string;
  expanded?: boolean;
  openColor?: string;
  closedColor?: string;
  caretColor?: string;
  caretSize?: number;
  icon?: string;
  iconSize?: number;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  theme: Theme;
} & IconSlot;

const AccordionGroup = ({
  label,
  expanded: expandedProp = false,
  openColor,
  closedColor,
  caretColor: caretColorProp,
  caretSize = 24,
  icon,
  iconSize = 24,
  style,
  children,
  theme,
  Icon,
}: AccordionGroupProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(expandedProp);
  const { textStyles, viewStyles } = extractStyles(style);
  const expandedColor = openColor || theme.colors.primary;
  const collapsedColor = closedColor || theme.colors.primary;
  const labelColor = expanded ? expandedColor : collapsedColor;
  const caretColor = caretColorProp || labelColor;

  const handlePressAction = () => {
    setExpanded(!expanded);
  };

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
          size={caretSize}
        />
      </Pressable>
      {expanded ? children : null}
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
