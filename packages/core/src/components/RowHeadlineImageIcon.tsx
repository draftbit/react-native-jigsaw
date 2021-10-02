import * as React from "react";
import { withTheme } from "../theming";
import {
  COMPONENT_TYPES,
  createIconProp,
  createTextProp,
  createImageProp,
  createStaticBoolProp,
} from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

import Row from "./Row";
import Config from "./Config";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

type Props = {
  title?: string;
  image: string | ImageSourcePropType;
  subtitle?: string;
  multilineSubtitle?: boolean;
  icon: string;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
} & IconSlot;

const RowHeadlineImageIcon: React.FC<Props> = ({
  Icon,
  icon,
  title,
  image,
  subtitle,
  multilineSubtitle = false,
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
      multilineSubtitle={multilineSubtitle}
      image={image}
      right={() => (
        <Icon
          name={icon}
          size={
            multilineSubtitle
              ? Config.rowMultiLineIconSize
              : Config.rowSingleLineIconSize
          }
          color={colors.light}
          style={{
            marginLeft: 16,
            alignSelf: multilineSubtitle ? "flex-start" : "center",
            marginTop: multilineSubtitle ? 4 : 0,
          }}
        />
      )}
      style={style}
    />
  );
};

export default withTheme(RowHeadlineImageIcon);
const SEED_DATA_PROPS = {
  title: createTextProp({
    label: "Title",
    description: "Headline text to display",
  }),
  icon: createIconProp({
    defaultValue: null,
  }),
};

const IMAGE_PROP = createImageProp();
const MULTILINE_PROP = createStaticBoolProp({
  defaultValue: true,
  editable: false,
});
const SUBTITLE_PROP = createTextProp({
  label: "Subtitle",
  description: "Subtitle text to display",
  defaultValue: "San Diego",
});

export const SEED_DATA = [
  {
    name: "Row Single Line Headline Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned headline text and a right aligned icon",
    category: COMPONENT_TYPES.row,
    layout: {},
    props: {
      ...SEED_DATA_PROPS,
    },
  },
  {
    name: "Row Single Line Headline Icon Image",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned image and headline text and a right aligned icon",
    category: COMPONENT_TYPES.row,
    layout: {},
    props: {
      ...SEED_DATA_PROPS,
      image: IMAGE_PROP,
    },
  },
  {
    name: "Row Double Line Headline Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned headline text and subtitle text and a right aligned icon",
    category: COMPONENT_TYPES.row,
    layout: {},
    props: {
      ...SEED_DATA_PROPS,
      subtitle: SUBTITLE_PROP,
    },
  },
  {
    name: "Row Double Line Headline Image Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned headline text and subtitle text and a right aligned icon",
    category: COMPONENT_TYPES.row,
    layout: {},
    props: {
      ...SEED_DATA_PROPS,
      image: IMAGE_PROP,
      subtitle: SUBTITLE_PROP,
    },
  },
  {
    name: "Row Multiline Headline Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned headline text and multiline subtitle text and a right aligned icon",
    category: COMPONENT_TYPES.row,
    layout: {},
    props: {
      ...SEED_DATA_PROPS,
      multilineSubtitle: MULTILINE_PROP,
      subtitle: createTextProp({
        label: "Subtitle",
        description: "Subtitle text to display",
        defaultValue:
          "San Diego is a city on the Pacific coast of California known for its beaches, parks and warm climate",
      }),
    },
  },
  {
    name: "Row Multiline Headline Image Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned image, headline text, and multiline subtitle text, and a right aligned icon",
    category: COMPONENT_TYPES.row,
    layout: {},
    props: {
      ...SEED_DATA_PROPS,
      image: IMAGE_PROP,
      multilineSubtitle: MULTILINE_PROP,
      subtitle: createTextProp({
        label: "Subtitle",
        description: "Subtitle text to display",
        defaultValue:
          "San Diego is a city on the Pacific coast of California known for its beaches, parks and warm climate",
      }),
    },
  },
];
