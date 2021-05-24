import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { withTheme } from "../theming";
import Divider from "./Divider";
import Touchable from "./Touchable";
import Config from "./Config";

import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

type Props = {
  titleTypeStyle?: StyleProp<TextStyle>;
  titleColor: string;
  title: string;
  buttonText: string;
  dividerTopMargin?: number;
  icon: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
} & IconSlot;

const Header: React.FC<Props> = ({
  Icon,
  titleTypeStyle,
  titleColor,
  title,
  buttonText,
  dividerTopMargin,
  icon,
  onPress,
  style,
  theme: { colors, typography },
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.topContainer}>
        <Text
          style={[
            titleTypeStyle,
            {
              color: titleColor,
              flex: 1,
            },
          ]}
          numberOfLines={1}
        >
          {title}
        </Text>
        {onPress && (
          <Touchable
            style={{ alignSelf: "center", marginLeft: 12 }}
            onPress={onPress}
          >
            <View style={styles.buttonContainer}>
              <Text
                style={[
                  typography.subtitle2,
                  {
                    color: colors.light,
                    marginRight: 8,
                  },
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
      <Divider style={{ marginTop: dividerTopMargin || 16 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default withTheme(Header);
