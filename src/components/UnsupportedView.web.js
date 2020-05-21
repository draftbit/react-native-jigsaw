import React, { useState } from "react";
import { StyleSheet, Text, ImageBackground, Image } from "react-native";
import AspectRatio from "./AspectRatio";

function TextOrImage({ layout, message }) {
  if (layout.width * layout.height < 10000)
    return (
      <Image
        style={{ width: 32, height: 32 }}
        source={require("../assets/warning.png")}
      />
    );

  return <Text style={styles.text}>{message}</Text>;
}

export default function UnsupportedView({ tag, style }) {
  const { aspectRatio, ...extraStyles } = StyleSheet.flatten(style);
  const [layout, setLayout] = useState({ width: null, height: null });

  const message = `${tag} is not supported in Web Preview yet, please use Live Preview`;
  if (aspectRatio && extraStyles.position !== "absolute") {
    return (
      <AspectRatio
        ratio={aspectRatio}
        onLayout={(e) => {
          setLayout({
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height,
          });

          return {
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height,
          };
        }}
      >
        <ImageBackground
          style={[
            extraStyles,
            styles.container,
            { width: layout.width, height: layout.height },
          ]}
          imageStyle={styles.image}
          source={require("../assets/bg.png")}
          resizeMode="repeat"
        >
          <TextOrImage layout={layout} message={message} />
        </ImageBackground>
      </AspectRatio>
    );
  }

  return (
    <ImageBackground
      onLayout={(e) => {
        setLayout({
          width: e.nativeEvent.layout.width,
          height: e.nativeEvent.layout.height,
        });
      }}
      style={[extraStyles, styles.container]}
      source={require("../assets/bg.png")}
      resizeMode="repeat"
    >
      <TextOrImage layout={layout} message={message} />
    </ImageBackground>
  );
}

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
