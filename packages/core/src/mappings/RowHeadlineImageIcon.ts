import {
  COMPONENT_TYPES,
  createIconProp,
  createTextProp,
  createImageProp,
  createStaticBoolProp,
} from "@draftbit/types";

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
