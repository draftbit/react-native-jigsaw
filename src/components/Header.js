/* @flow */

import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { withTheme } from "../core/theming";
import Divider from "./Divider";
import Icon from "./Icon";
import Touchable from "./Touchable";
import Config from "./Config";
import type { Theme, Color, TypeStyle } from "../types";

type Props = {
  titleTypeStyle: TypeStyle,
  titleColor: Color,
  title: string,
  buttonText: string,
  icon: string,
  onPress: () => void,
  theme: Theme,
  style?: any
};

class Header extends React.Component<Props> {
  static defaultProps = {
    icon: "chevron-right"
  };

  render() {
    const {
      titleTypeStyle,
      titleColor,
      title,
      buttonText,
      dividerTopMargin,
      icon,
      onPress,
      style,
      theme: { colors, spacing, typography }
    } = this.props;

    return (
      <View style={style}>
        <View style={styles.topContainer}>
          <Text
            style={[
              titleTypeStyle,
              {
                color: titleColor,
                flex: 1
              }
            ]}
            numberOfLines={1}
          >
            {title}
          </Text>
          {onPress && (
            <Touchable
              style={{ alignSelf: "center", marginLeft: spacing.medium }}
              onPress={onPress}
            >
              <View style={styles.buttonContainer}>
                <Text
                  style={[
                    typography.subtitle2,
                    {
                      color: colors.light,
                      marginRight: spacing.small
                    }
                  ]}
                  numberOfLines={1}
                >
                  {buttonText}
                </Text>
                <Icon
                  name={icon}
                  size={Config.headerIconSize}
                  color={colors.light}
                />
              </View>
            </Touchable>
          )}
        </View>
        <Divider style={{ marginTop: dividerTopMargin || spacing.large }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default withTheme(Header);
