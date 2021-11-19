// @ts-nocheck
import React from "react";
import {
  Pressable,
  View,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";
import { Title, Subtitle } from "./Typography";
import Image from "./Image";
import Surface from "./Surface";
import Config from "./Config";
import { withTheme } from "../theming";
import theme from "../styles/DefaultTheme";

type Props = {
  image?: string | ImageSourcePropType;
  title?: string;
  subtitle?: string;
  aspectRatio?: number;
  elevation?: number;
  theme: typeof theme;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  onPress: () => void;
};

const CardInline: React.FC<Props> = ({
  image = Config.cardImageUrl,
  title,
  subtitle,
  aspectRatio = 1.5,
  elevation = 2,
  style,
  titleStyle,
  subtitleStyle,
  onPress,
}) => {
  const { alignItems, justifyContent, width, height } = StyleSheet.flatten(
    style || {}
  );
  const imageStyles = width && height ? { width, height } : { aspectRatio };
  return (
    <Surface style={[{ elevation }, style]}>
      <Pressable
        disabled={!onPress}
        onPress={onPress}
        style={({ pressed }) => {
          return [
            {
              opacity: pressed ? 0.8 : 1,
            },
          ];
        }}
      >
        <Image
          style={imageStyles}
          source={typeof image === "string" ? { uri: image } : image}
          resizeMode="cover"
        />
        <View style={[styles.overlay, { justifyContent, alignItems }]}>
          {title ? (
            <Title style={[{ color: "white" }, titleStyle]} text={title} />
          ) : null}
          {subtitle ? (
            <Subtitle
              style={[{ color: "rgba(255, 255, 255, 0.7)" }, subtitleStyle]}
              text={subtitle}
            />
          ) : null}
        </View>
      </Pressable>
    </Surface>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
});

export default withTheme(CardInline);
