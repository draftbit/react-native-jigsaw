import React from "react";
import {
  View,
  ImageSourcePropType,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import color from "color";
import Image from "./Image";
import Card from "./DeprecatedCardWrapper";
import Elevation from "./Elevation";
import StarRating from "./StarRating";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

import Config from "./Config";

const ICON_CONTAINER_SIZE = Config.cardIconSize * 2;
const ICON_CONTAINER_PADDING = Config.cardIconSize / 2 - 1;

type Props = {
  image?: string | ImageSourcePropType;
  title?: string;
  leftDescription?: string;
  rightDescription?: string;
  textCentered: boolean;
  icon?: string;
  rating: number;
  aspectRatio?: number;
  elevation?: number;
  numColumns?: number;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
} & IconSlot;

const CardContainerRating: React.FC<Props> = ({
  Icon,
  icon,
  image = Config.cardImageUrl,
  title,
  leftDescription,
  rightDescription,
  rating,
  aspectRatio = 1.5,
  elevation = 2,
  numColumns = 3,
  theme: { colors, roundness, typography },
  style,
  onPress,
  ...rest
}) => {
  let titleStyle, rightDescriptionStyle;
  switch (numColumns) {
    case 2:
      titleStyle = typography.headline6;
      rightDescriptionStyle = typography.body2;
      break;
    case 3:
      titleStyle = typography.headline5;
      rightDescriptionStyle = typography.caption;
      break;
  }

  return (
    <Card style={style} onPress={onPress} numColumns={numColumns} {...rest}>
      <Elevation style={{ elevation, borderRadius: roundness }}>
        <View
          style={{
            borderRadius: roundness,
            overflow: "hidden",
            backgroundColor: colors.background,
            //background color is needed for bug on android 9 - https://github.com/facebook/react-native/issues/25093
          }}
        >
          <Image
            style={{ aspectRatio }}
            source={typeof image === "string" ? { uri: image } : image}
            resizeMode="cover"
          />
          <View
            style={{
              padding: numColumns === 1 ? 8 : 16,
            }}
          >
            {title ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  numberOfLines={1}
                  style={[titleStyle, { color: colors.strong }]}
                >
                  {title}
                </Text>
              </View>
            ) : null}
            {leftDescription ? (
              <Text
                numberOfLines={1}
                style={[
                  typography.body2,
                  {
                    color: colors.medium,
                    marginTop: numColumns === 3 ? 4 : 4 / 2,
                  },
                ]}
              >
                {leftDescription}
              </Text>
            ) : null}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: numColumns === 3 ? 16 : 12,
              }}
            >
              <StarRating
                Icon={Icon}
                starSize={numColumns === 1 ? 10 : 16}
                rating={rating}
              />
              <Text
                style={[
                  rightDescriptionStyle,
                  {
                    color: colors.medium,
                    marginLeft: 8,
                  },
                ]}
                numberOfLines={1}
              >
                {rightDescription}
              </Text>
            </View>
          </View>
          {icon ? (
            <Elevation
              style={{
                elevation: Config.cardIconElevation,
                position: "absolute",
                top: 12,
                right: 12,
                width: ICON_CONTAINER_SIZE,
                height: ICON_CONTAINER_SIZE,
                padding: ICON_CONTAINER_PADDING,
                borderRadius: ICON_CONTAINER_SIZE,
                backgroundColor: color(colors.strong)
                  .alpha(Config.cardIconBackgroundOpacity)
                  .rgb()
                  .string(),
              }}
            >
              <Icon
                name={icon}
                size={Config.cardIconSize}
                color={colors.surface}
              />
            </Elevation>
          ) : null}
        </View>
      </Elevation>
    </Card>
  );
};

export default withTheme(CardContainerRating);
