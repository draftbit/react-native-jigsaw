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

import {
  COMPONENT_TYPES,
  createNumberProp,
  createIconProp,
  createTextProp,
  createStaticBoolProp,
  createColorProp,
} from "@draftbit/types";

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
  ...rest
}: Props) => {
  const [expanded, setExpanded] = React.useState<boolean>(
    expandedProp || false
  );

  const handlePressAction = () => {
    if (expandedProp === undefined) {
      setExpanded(!expanded);
    }
  };

  const expandedInternal = expandedProp !== undefined ? expandedProp : expanded;

  const expandedColor = openColor || theme.colors.primary;
  const collapsedColor = closedColor || theme.colors.divider;

  const labelColor = expanded ? expandedColor : collapsedColor;

  return (
    <View {...rest}>
      <Pressable
        style={[styles.container, style]}
        onPress={handlePressAction}
        accessibilityRole="button"
      >
        <View style={[styles.row, { backgroundColor: caretColor }]}>
          {icon ? (
            <Icon name={icon} size={iconSize} color={labelColor} />
          ) : null}
          <View style={[styles.item, styles.content]}>
            <Text
              selectable={false}
              style={[
                styles.label,
                {
                  color: labelColor,
                },
                style,
              ]}
            >
              {label}
            </Text>
          </View>
          <View style={[styles.item]}>
            <Icon
              name={
                expanded
                  ? "MaterialIcons/keyboard-arrow-up"
                  : "MaterialIcons/keyboard-arrow-down"
              }
              color={labelColor}
              size={24}
            />
          </View>
        </View>
      </Pressable>
      {expandedInternal
        ? React.Children.map(children, (child) => {
            if (
              React.isValidElement(child) &&
              !child.props.left &&
              !child.props.right
            ) {
              return React.cloneElement(child, {
                style: [styles.child, child.props.style],
              });
            }

            return child;
          })
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    fontSize: 16,
  },

  item: {
    margin: 8,
  },
  child: {
    paddingLeft: 64,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
});

export default withTheme(AccordionGroup);

export const SEED_DATA = {
  name: "Accordion Group",
  tag: "AccordionGroup",
  description: "An expandable container containing components",
  category: COMPONENT_TYPES.container,
  props: {
    openColor: createColorProp({
      label: "Color when expanded",
    }),
    closedColor: createColorProp({
      label: "Color when collapsed",
    }),
    caretColor: createColorProp({
      label: "Color of caret",
    }),

    iconSize: createNumberProp({
      defaultValue: 24,
    }),

    label: createTextProp({
      label: "Accordion label",
    }),
    expanded: createStaticBoolProp({
      label: "Whether the AccordionGroup should be expanded or not",
    }),
    icon: createIconProp(),
  },
};
