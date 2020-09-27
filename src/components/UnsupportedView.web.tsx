import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  StyleProp,
  ViewStyle,
} from "react-native";
import AspectRatio from "./AspectRatio.web";

interface TextOrImageProps {
  layout: { width: number; height: number };
  message?: string;
}
const TextOrImage: React.FC<TextOrImageProps> = ({ layout, message }) => {
  if (layout.width * layout.height < 10000)
    return (
      <Image
        style={{ width: 32, height: 32 }}
        source={require("../assets/warning.png")}
      />
    );

  return <Text style={styles.text}>{message}</Text>;
};

interface Props {
  tag: string;
  style?: StyleProp<ViewStyle>;
}
const UnsupportedView: React.FC<Props> = ({ tag, style }) => {
  const { aspectRatio, ...extraStyles } = StyleSheet.flatten(style);

  const message = `${tag} is not supported in Web Preview yet, please use Live Preview`;
  if (aspectRatio && extraStyles.position !== "absolute") {
    return (
      <AspectRatio style={{ aspectRatio }}>
        <ImageBackground
          style={[
            extraStyles,
            styles.container,
            { width: "100%", height: "100%" },
          ]}
          source={require("../assets/bg.png")}
          resizeMode="repeat"
        >
          <TextOrImage layout={{ width: 200, height: 200 }} message={message} />
        </ImageBackground>
      </AspectRatio>
    );
  }

  return (
    <ImageBackground
      onLayout={() => {}}
      style={[extraStyles, styles.container]}
      source={require("../assets/bg.png")}
      resizeMode="repeat"
    >
      <TextOrImage layout={{ width: 200, height: 200 }} message={message} />
    </ImageBackground>
  );
};

export default UnsupportedView;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#571081",
    textAlign: "center",
  },
});
