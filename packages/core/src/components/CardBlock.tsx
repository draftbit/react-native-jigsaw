import React from "react";
import {
  ImageSourcePropType,
  View,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import Image from "./Image";
import Card from "./DeprecatedCardWrapper";
import Elevation from "./Elevation";
import { withTheme } from "../theming";
import Config from "./Config";
import theme from "../styles/DefaultTheme";
import { justificationType } from "./Justification";

type Props = {
  image?: string | ImageSourcePropType;
  title?: string;
  leftDescription?: string;
  rightDescription?: string;
  titleCentered: boolean;
  aspectRatio?: number;
  elevation?: number;
  numColumns?: number;
  theme: typeof theme;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const CardBlock: React.FC<Props> = ({
  image = Config.cardImageUrl,
  title,
  leftDescription,
  rightDescription,
  titleCentered,
  aspectRatio = 1.5,
  elevation = 2,
  numColumns = 3,
  theme: { colors, roundness, typography },
  style,
  onPress,
  ...rest
}) => {
  let titleJustification: justificationType;

  let titleStyle;
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
    { color: colors.light },
  ];

  return (
    <Card style={style} onPress={onPress} numColumns={numColumns} {...rest}>
      <View style={{ backgroundColor: colors.background }}>
        <Elevation style={{ elevation, borderRadius: roundness }}>
          <Image
            style={{
              borderRadius: roundness,
              aspectRatio,
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
              marginTop: numColumns === 3 ? 16 : 12,
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
              <Text numberOfLines={1} style={rightDescriptionStyles}>
                {rightDescription}
              </Text>
            ) : null}
          </View>
        ) : null}
      </View>
    </Card>
  );
};

export default withTheme(CardBlock);
