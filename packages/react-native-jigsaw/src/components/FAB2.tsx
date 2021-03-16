import * as React from "react";
import { View, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import { withTheme } from "../core/theming";
import Icon from "./Icon";

type Props = {
  disabled?: boolean;
  loading?: boolean;
  iconName?: string;
  iconColor?: string;
  onPress: () => void;
  theme: typeof theme;
  IconOverride: typeof Icon;
  style?: StyleProp<ViewStyle>;
} & TouchableHighlightProps;

const FAB: React.FC<Props> = ({
  onPress,
  disabled,
  loading,
  bgColor = "#5a45ff",
  iconColor = "#000",
  iconName = "add",
  style,
  theme,
  size = 50,
  IconOverride = null,
  ...props
}) => {
  const SelectedIcon = IconOverride || Icon;
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        overflow: "hidden",
      }}
    >
      <Pressable
        onPress={onPress}
        disabled={disabled}
        android_ripple={{
          color: "#333",
          radius: size / 4,
        }}
        style={({ pressed }) => {
          return [
            styles.button,
            {
              bottom: "5%",
              right: "10%",
              opacity: pressed ? 0.75 : 1,
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: bgColor,
            },
            style,
          ];
        }}
        {...props}
      >
        {!loading ? (
          <ActivityIndicator size="small" color={iconColor} />
        ) : (
          <SelectedIcon
            name={iconName}
            size={28}
            color={iconColor}
            style={styles.icon}
          />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    userSelect: "none",
  },
});

export default withTheme(FAB);
