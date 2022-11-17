import {
  COMPONENT_TYPES,
  GROUPS,
  createBoolProp,
  createTextProp,
  createNumberProp,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = [
  {
    name: "Table",
    tag: "Table",
    category: COMPONENT_TYPES.container,
    stylesPanelSections: [
      StylesPanelSections.Background,
      StylesPanelSections.Borders,
      StylesPanelSections.Size,
      StylesPanelSections.MarginsAndPaddings,
      StylesPanelSections.Position,
      StylesPanelSections.Effects,
    ],
    layout: {
      width: "100%",
    },
    props: {},
  },
  {
    name: "Table Row",
    tag: "TableRow",
    category: COMPONENT_TYPES.container,
    stylesPanelSections: [
      StylesPanelSections.Background,
      StylesPanelSections.Borders,
      StylesPanelSections.Size,
      StylesPanelSections.MarginsAndPaddings,
      StylesPanelSections.Position,
      StylesPanelSections.Effects,
    ],
    layout: {
      paddingLeft: 16,
      paddingRight: 16,
      borderBottomWidth: 1,
      borderStyle: "solid",
    },
    props: {},
  },
  {
    name: "Table Cell",
    tag: "TableCell",
    category: COMPONENT_TYPES.container,
    layout: {
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 8,
      paddingRight: 8,
    },
    stylesPanelSections: [
      StylesPanelSections.Typography,
      StylesPanelSections.Background,
      StylesPanelSections.Borders,
      StylesPanelSections.Size,
      StylesPanelSections.MarginsAndPaddings,
      StylesPanelSections.Position,
      StylesPanelSections.Effects,
    ],
    props: {
      numeric: createBoolProp({
        label: "Is Numeric Cell?",
        description: "Does the cell contain a numeric value?",
        group: GROUPS.data,
      }),
      value: createTextProp({
        label: "Cell Value",
        description: "Table Cell Value",
        group: GROUPS.data,
      }),
    },
  },
  {
    name: "Table Header",
    tag: "TableHeader",
    category: COMPONENT_TYPES.container,
    stylesPanelSections: [
      StylesPanelSections.Background,
      StylesPanelSections.Borders,
      StylesPanelSections.Size,
      StylesPanelSections.MarginsAndPaddings,
      StylesPanelSections.Position,
      StylesPanelSections.Effects,
    ],
    layout: {
      paddingLeft: 16,
      paddingRight: 16,
      borderBottomWidth: 1,
      borderStyle: "solid",
      backgroundColor: "#EFEFEF",
    },
    props: {},
  },
  {
    name: "Table Title",
    tag: "TableTitle",
    category: COMPONENT_TYPES.container,
    stylesPanelSections: [
      StylesPanelSections.Typography,
      StylesPanelSections.Background,
      StylesPanelSections.Borders,
      StylesPanelSections.Size,
      StylesPanelSections.MarginsAndPaddings,
      StylesPanelSections.Position,
      StylesPanelSections.Effects,
    ],
    layout: {
      fontSize: 14,
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 8,
      paddingRight: 8,
    },
    props: {
      numeric: createBoolProp({
        label: "Is Numeric Cell?",
        description: "Does the cell contain a numeric value?",
        group: GROUPS.data,
      }),
      value: createTextProp({
        label: "Cell Value",
        description: "Table Cell Value",
        group: GROUPS.data,
      }),
      isAscending: createBoolProp({
        label: "Is Ascending?",
        description: "Does the cell contain a numeric value?",
        group: GROUPS.data,
      }),
      numberOfLines: createNumberProp({
        label: "Number of Lines",
        description: "Number of Lines",
        group: GROUPS.basic,
      }),
    },
  },
];
