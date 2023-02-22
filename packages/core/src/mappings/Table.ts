import {
  COMPONENT_TYPES,
  StylesPanelSections,
  createColorProp,
  createStaticBoolProp,
  createStaticNumberProp,
  BLOCK_STYLES_SECTIONS,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
  createTextEnumProp,
} from "@draftbit/types";

const SHARED_SEED_DATA_PROPS = {
  borderWidth: createStaticNumberProp({
    label: "Border Width",
    description:
      "Specifies the width of the border. Passed down to child Table(Row/Cell) components unless overridden",
    required: false,
    defaultValue: null,
  }),
  borderColor: createColorProp({
    label: "Border Color",
    description:
      "Specifies the color of the border. Passed down to child Table(Row/Cell) components unless overridden",
    defaultValue: null,
  }),
  borderStyle: createTextEnumProp({
    label: "Border Style",
    description:
      "Specifies the style of the border. Passed down to child Table(Row/Cell) components unless overridden",
    options: ["solid", "dotted", "dashed"],
    defaultValue: null,
  }),
  drawTopBorder: createStaticBoolProp({
    label: "Draw Top Border",
    description:
      "Whether to draw the top border at this layer of the Table tree or not",
    defaultValue: false,
  }),
  drawBottomBorder: createStaticBoolProp({
    label: "Draw Bottom Border",
    description:
      "Whether to draw the bottom border at this layer of the Table tree or not",
    defaultValue: false,
  }),
  drawStartBorder: createStaticBoolProp({
    label: "Draw Start Border",
    description:
      "Whether to draw the start border at this layer of the Table tree or not",
    defaultValue: false,
  }),
  drawEndBorder: createStaticBoolProp({
    label: "Draw End Border",
    description:
      "Whether to draw the end border at this layer of the Table tree or not",
    defaultValue: false,
  }),
};

export const SEED_DATA = [
  {
    name: "Table",
    tag: "Table",
    description: "Top level table container",
    category: COMPONENT_TYPES.table,
    stylesPanelSections: BLOCK_STYLES_SECTIONS,
    props: {
      ...SHARED_SEED_DATA_PROPS,
      borderWidth: { ...SHARED_SEED_DATA_PROPS.borderWidth, defaultValue: 1 },
      borderColor: {
        ...SHARED_SEED_DATA_PROPS.borderColor,
        defaultValue: "divider",
      },
      borderStyle: {
        ...SHARED_SEED_DATA_PROPS.borderStyle,
        defaultValue: "solid",
      },
      drawTopBorder: {
        ...SHARED_SEED_DATA_PROPS.drawTopBorder,
        defaultValue: true,
      },
      cellVerticalPadding: createStaticNumberProp({
        label: "Cell Vertical Padding",
        description:
          "Specifies the vertical padding of the cell. Passed down to child Table Row components unless overridden",
        required: false,
        defaultValue: 10,
      }),
      cellHorizontalPadding: createStaticNumberProp({
        label: "Cell Horizontal Padding",
        description:
          "Specifies the horizontal padding of the cell. Passed down to child Table Row components unless overridden",
        required: false,
        defaultValue: 10,
      }),
    },
  },
  {
    name: "Table Row",
    tag: "TableRow",
    description: "Table Row container",
    category: COMPONENT_TYPES.table,
    stylesPanelSections: [StylesPanelSections.Background],
    props: {
      ...SHARED_SEED_DATA_PROPS,
      drawStartBorder: {
        ...SHARED_SEED_DATA_PROPS.drawStartBorder,
        defaultValue: true,
      },
      drawBottomBorder: {
        ...SHARED_SEED_DATA_PROPS.drawBottomBorder,
        defaultValue: true,
      },
      cellVerticalPadding: createStaticNumberProp({
        label: "Cell Vertical Padding",
        description:
          "Specifies the vertical padding of the cell. Passed down to child Table Cell components unless overridden",
        required: false,
        defaultValue: null,
      }),
      cellHorizontalPadding: createStaticNumberProp({
        label: "Cell Horizontal Padding",
        description:
          "Specifies the horizontal padding of the cell. Passed down to child Table Cell components unless overridden",
        required: false,
        defaultValue: null,
      }),
    },
  },
  {
    name: "Table Cell",
    tag: "TableCell",
    description: "Table Cell container",
    category: COMPONENT_TYPES.table,
    stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS.filter(
      (item) => item !== StylesPanelSections.Borders
    ),
    layout: {
      flex: 1,
      flexDirection: "row",
    },
    props: {
      ...SHARED_SEED_DATA_PROPS,
      drawEndBorder: {
        ...SHARED_SEED_DATA_PROPS.drawEndBorder,
        defaultValue: true,
      },
      cellVerticalPadding: createStaticNumberProp({
        label: "Vertical Padding",
        description: "Specifies the vertical padding of the cell",
        required: false,
        defaultValue: null,
      }),
      cellHorizontalPadding: createStaticNumberProp({
        label: "Horizontal Padding",
        description: "Specifies the horizontal padding of the cell",
        required: false,
        defaultValue: null,
      }),
    },
  },
];
