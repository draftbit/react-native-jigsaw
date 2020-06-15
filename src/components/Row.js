import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { withTheme } from "../core/theming";
import Config from "./Config";

class Row extends React.Component {
  render() {
    const {
      titleTypeStyle,
      titleColor,
      subtitleTypeStyle,
      subtitleColor,
      title,
      subtitle,
      multilineSubtitle,
      image,
      right,
      style,
      theme: { spacing },
    } = this.props;

    return (
      <View style={[styles.container, { padding: spacing.large }, style]}>
        <View style={styles.leftContainer}>
          {image && (
            <Image
              source={typeof image === "string" ? { uri: image } : image}
              style={{
                marginRight: spacing.medium,
                width: subtitle
                  ? Config.rowMultiLineImageSize
                  : Config.rowSingleLineImageSize,
                height: subtitle
                  ? Config.rowMultiLineImageSize
                  : Config.rowSingleLineImageSize,
              }}
            />
          )}
          <View style={styles.textContainer}>
            <Text
              style={[
                titleTypeStyle,
                {
                  color: titleColor,
                },
              ]}
              numberOfLines={1}
            >
              {title}
            </Text>
            {subtitle ? (
              <Text
                style={[
                  subtitleTypeStyle,
                  {
                    color: subtitleColor,
                    marginTop: spacing.text,
                  },
                ]}
                numberOfLines={multilineSubtitle ? undefined : 1}
              >
                {subtitle}
              </Text>
            ) : null}
          </View>
        </View>
        {right && right()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: "row",
    flex: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default withTheme(Row);
