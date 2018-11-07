import React from "react";
import { Image, View, Text } from "react-native";
import Touchable from "./Touchable";
import Card from "./Card";
import { withTheme } from "../core/theming";
import type { Theme } from "./types";
import Config from "./Config";

export type BlockImageProps = {
  image: string | { uri: string },
  label?: string,
  leftDescription?: string,
  rightDescription?: string,
  labelCentered?: boolean,
  aspectRatio?: number,
  elevation: number,
  theme: Theme,
  style: any,
  onPress: () => void
};

class BlockImage extends React.PureComponent<BlockImageProps> {
  static defaultProps = {
    image: Config.cardImageUrl,
    label: "Beautiful West Coast Villa",
    leftDescription: "San Diego",
    rightDescription: "$100",
    aspectRatio: 3 / 2,
    elevation: 2
  };

  render() {
    const {
      image,
      label,
      leftDescription,
      rightDescription,
      labelCentered,
      aspectRatio,
      elevation,
      theme: { colors, borderRadius, typography, spacing },
      style,
      onPress
    } = this.props;

    let labelJustification;
    if (labelCentered && !leftDescription && !rightDescription) {
      labelJustification = "center";
    } else {
      labelJustification = "space-between";
    }

    const rightDescriptionStyles = [
      typography.subtitle2,
      { color: colors.light }
    ];

    return (
      <Touchable style={style} onPress={onPress}>
        <View>
          <Card style={{ elevation, borderRadius: borderRadius.global }}>
            <Image
              style={{
                borderRadius: borderRadius.global,
                aspectRatio
              }}
              source={typeof image === "string" ? { uri: image } : image}
              resizeMode="cover"
            />
          </Card>
          {label ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: labelJustification,
                marginTop: spacing.large
              }}
            >
              <Text
                numberOfLines={1}
                style={[typography.headline6, { color: colors.strong }]}
              >
                {label}
              </Text>
              {!leftDescription && rightDescription ? (
                <Text style={rightDescriptionStyles}>{rightDescription}</Text>
              ) : null}
            </View>
          ) : null}
          {leftDescription ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: spacing.text
              }}
            >
              <Text
                numberOfLines={1}
                style={[typography.body2, { color: colors.medium }]}
              >
                {leftDescription}
              </Text>
              {rightDescription ? (
                <Text numberOfLines={1} style={rightDescriptionStyles}>
                  {rightDescription}
                </Text>
              ) : null}
            </View>
          ) : null}
        </View>
      </Touchable>
    );
  }
}

export default withTheme(BlockImage);
