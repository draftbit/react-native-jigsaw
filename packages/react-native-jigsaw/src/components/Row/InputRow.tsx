import * as React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import Icon from "../Icon";
import Switch from "../Switch";
import { Title, Subtitle } from "../Typography";

export function InputRow({
  title,
  subtitle,
  icon,
  iconStyle,
  titleStyle,
  subtitleStyle,
  style,
  onPress = () => {},
}) {
  return (
    <Pressable
      disabled={!onPress}
      onPress={onPress}
      style={({ pressed }) => {
        return [
          {
            opacity: pressed ? 0.8 : 1,
          },
          styles.container,
          style,
        ];
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {icon ? (
          <Icon
            name={icon}
            size={24}
            style={[{ width: 24, height: 24, color: "#5a45ff" }, iconStyle]}
          />
        ) : null}
        <View style={{ marginLeft: icon ? 12 : 0 }}>
          {title ? (
            <Title text={title} style={[styles.title, titleStyle]} />
          ) : null}
          {subtitle ? (
            <Subtitle
              text={subtitle}
              style={[styles.subtitle, subtitleStyle]}
            />
          ) : null}
        </View>
      </View>
      <Switch value={false} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 14,
    margin: 0,
    lineHeight: 16,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 14,
    color: "#333",
  },
});
