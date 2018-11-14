import React from "react";
import { Image, View, Text } from "react-native";
import Card from "./Card";
import Elevation from "./Elevation";
import { withTheme } from "../core/theming";
import type { Theme } from "../types";
import Config from "./Config";

export type CardBlockProps = {
  image: string | { uri: string },
  title?: string,
  leftDescription?: string,
  rightDescription?: string,
  titleCentered?: boolean,
  aspectRatio?: number,
  elevation: number,
  numColumns: 1 | 2 | 3,
  theme: Theme,
  style: any,
  onPress: () => void
};

class CardBlock extends React.PureComponent<CardBlockProps> {
  static defaultProps = {
    aspectRatio: 1.5,
    elevation: 2,
    numColumns: 3
  };

  render() {
    const {
      image,
      title,
      leftDescription,
      rightDescription,
      titleCentered,
      aspectRatio,
      elevation,
      numColumns,
      theme: { colors, borderRadius, typography, spacing },
      style,
      onPress
    } = this.props;

    let titleJustification, titleStyle;
    if (titleCentered && !leftDescription && !rightDescription) {
      titleJustification = "center";
    } else {
      titleJustification = "space-between";
    }

    if (numColumns === 1) {
      titleStyle = typography.button;
    } else if (numColumns === 2) {
      titleStyle = typography.headline6;
    } else {
      titleStyle = typography.headline5;
    }

    const rightDescriptionStyles = [
      typography.subtitle2,
      { color: colors.light }
    ];

    return (
      <Card style={style} onPress={onPress} numColumns={numColumns}>
        <View>
          <Elevation style={{ elevation, borderRadius: borderRadius.global }}>
            <Image
              style={{
                borderRadius: borderRadius.global,
                aspectRatio
              }}
              source={typeof image === "string" ? { uri: image } : image}
              resizeMode="cover"
            />
          </Elevation>
          {title ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: titleJustification,
                marginTop: numColumns === 3 ? spacing.large : spacing.medium
              }}
            >
              <Text
                numberOfLines={1}
                style={[titleStyle, { color: colors.strong }]}
              >
                {title}
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
                marginTop: numColumns === 3 ? spacing.text : spacing.text / 2
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
      </Card>
    );
  }
}

export default withTheme(CardBlock);
