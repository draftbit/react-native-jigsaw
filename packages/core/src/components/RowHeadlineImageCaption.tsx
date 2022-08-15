import * as React from "react";
import { Text, ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import { withTheme } from "../theming";
import Row from "./Row";
import theme from "../styles/DefaultTheme";

type Props = {
  title?: string;
  subtitle?: string;
  caption?: string;
  image: string | ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  theme: typeof theme;
};

const RowHeadlineImageCaption: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  subtitle,
  caption,
  image,
  style,
  theme: { colors, typography },
}) => {
  return (
    <Row
      titleTypeStyle={typography.headline6}
      titleColor={colors.strong}
      subtitleTypeStyle={typography.body2}
      subtitleColor={colors.medium}
      title={title}
      subtitle={subtitle}
      image={image}
      right={() => (
        <Text
          style={{
            ...typography.caption,
            color: colors.strong,
            marginLeft: 16,
          }}
        >
          {caption}
        </Text>
      )}
      style={style}
    />
  );
};

export default withTheme(RowHeadlineImageCaption);
