import React from "react";
import {
  View,
  Text,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";
import Image from "./Image";
import Card from "./DeprecatedCardWrapper";
import Elevation from "./Elevation";
import { withTheme } from "../theming";
import Config from "./Config";
import theme from "../styles/DefaultTheme";

type Props = {
  image?: string | ImageSourcePropType;
  title?: string;
  subtitle?: string;
  mode?: "right" | "left";
  aspectRatio?: number;
  elevation?: number;
  theme: typeof theme;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const CardContainerShortImage: React.FC<Props> = ({
  image = Config.squareImageUrl,
  title,
  subtitle,
  mode = "left",
  aspectRatio = 1,
  elevation = 2,
  theme: { colors, roundness, typography },
  style,
  onPress,
  ...rest
}) => {
  return (
    <Card style={style} onPress={onPress} {...rest}>
      <Elevation
        style={{
          elevation,
          borderRadius: roundness,
        }}
      >
        <View
          style={{
            overflow: "hidden",
            flexDirection: "row",
            justifyContent: mode === "right" ? "space-between" : "flex-start",
            borderRadius: roundness,
          }}
        >
          {mode === "left" && (
            <Image
              style={{ aspectRatio }}
              source={typeof image === "string" ? { uri: image } : image}
              resizeMode="cover"
            />
          )}
          <View
            style={{
              padding: 16,
              backgroundColor: colors.surface,
              flex: 1,
            }}
          >
            <Text
              numberOfLines={1}
              style={[typography.headline5, { color: colors.strong }]}
            >
              {title}
            </Text>
            {subtitle ? (
              <Text
                numberOfLines={1}
                style={[
                  typography.body2,
                  { color: colors.medium, marginTop: 4 },
                ]}
              >
                {subtitle}
              </Text>
            ) : null}
          </View>
          {mode === "right" && (
            <Image
              style={{ aspectRatio }}
              source={typeof image === "string" ? { uri: image } : image}
              resizeMode="cover"
            />
          )}
        </View>
      </Elevation>
    </Card>
  );
};

export default withTheme(CardContainerShortImage);
