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
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

import Config from "./Config";
import { justificationType } from "./Justification";

const ICON_CONTAINER_SIZE = Config.cardIconSize * 2;
const ICON_CONTAINER_PADDING = Config.cardIconSize / 2 - 1;

type Props = {
  image?: string | ImageSourcePropType;
  title?: string;
  leftDescription?: string;
  rightDescription?: string;
  textCentered: boolean;
  icon?: string;
  aspectRatio?: number;
  elevation?: number;
  numColumns?: number;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
} & IconSlot;

const CardContainer: React.FC<Props> = ({
  Icon,
  icon,
  image = Config.cardImageUrl,
  title,
  leftDescription,
  rightDescription,
  textCentered,
  aspectRatio = 1.5,
  elevation = 2,
  numColumns = 3,
  theme: { colors, roundness, typography },
  style,
  onPress,
  ...rest
}) => {
  let textJustification: justificationType;

  let titleStyle;

  if (textCentered && !rightDescription) {
    textJustification = "center";
  } else {
    textJustification = "space-between";
  }

  switch (numColumns) {
    case 2:
      titleStyle = typography.headline6;
      break;
    case 3:
      titleStyle = typography.headline5;
      break;
  }

  return (
    <Card style={style} onPress={onPress} numColumns={numColumns} {...rest}>
      <Elevation style={{ elevation, borderRadius: roundness }}>
        <View
          style={{
            borderRadius: roundness,
            overflow: "hidden",
            backgroundColor: colors.surface,
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
                  justifyContent: textJustification,
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
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: textJustification,
                  alignItems: "center",
                  marginTop: numColumns === 3 ? 4 : 4 / 2,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={[typography.body2, { color: colors.medium }]}
                >
                  {leftDescription}
                </Text>
                {rightDescription ? (
                  <Text
                    numberOfLines={1}
                    style={[typography.subtitle2, { color: colors.light }]}
                  >
                    {rightDescription}
                  </Text>
                ) : null}
              </View>
            ) : null}
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

export default withTheme(CardContainer);
