export enum PROP_TYPES {
  "STRING" = "STRING",
  "ARRAY" = "ARRAY",
  "NUMBER" = "NUMBER",
  "BOOLEAN" = "BOOLEAN",
  "OBJECT" = "OBJECT",
  "ASSET" = "ASSET",
  "THEME" = "THEME",
}

export enum GROUPS {
  accessibility = "accessibility",
  basic = "basic",
  advanced = "advanced",
  data = "data",
}

export enum FORM_TYPES {
  json = "json",
  position = "position",
  sourceUrl = "sourceUrl",
  string = "string",
  boolean = "boolean",
  number = "number",
  select = "select",
  color = "color",
  typeStyle = "typeStyle",
  component = "component",
  geolocation = "geolocation",
  localImage = "localImage",
  remoteImage = "remoteImage",
  localImageArray = "localImageArray",
  icon = "icon",
  style = "style",
  function = "function",
  flatArray = "flatArray",
  aspectRatio = "aspectRatio",
  date = "date",
  borderRadiusMode = "borderRadiusMode",
  fieldName = "fieldName",
  action = "action",
  arrayInput = "arrayInput",
}

export enum COMPONENT_TYPES {
  basic = "basic",
  media = "media",
  layout = "layout",
  input = "input",
  data = "data",
  card = "card",
  header = "header",
  button = "button",
  image = "image",
  field = "field",
  formControl = "formControl",
  row = "row",
  container = "container",
  blocks = "blocks",
  deprecated = "deprecated",
}

export interface Mapping {
  label: string;
  description: string;
  editable: boolean;
  required: boolean;
  defaultValue: string | number | boolean | null;
  formType: FORM_TYPES;
  propType: PROP_TYPES;
  options?: Array<string | number>;
  group: GROUPS;
}

export type FieldMapping = Mapping & {
  valuePropName: string;
  handlerPropName: string;
};

export type NumberMapping = Mapping & {
  min: number;
  max: number;
  step: number;
  precision: number;
};

export interface ComponentMapping {
  [key: string]: Mapping | FieldMapping | NumberMapping;
}

export interface ComponentManifest {
  name: string;
  tag: string;
  description: string;
  doc_link?: string;
  code_link?: string;
  category: COMPONENT_TYPES;
  layout?: {} | null;
  props: ComponentMapping;
}

const ELEVATION_TYPE: Mapping = {
  label: "Elevation",
  description: "Elevation of the component. A number 0-3.",
  options: [0, 1, 2, 3],
  defaultValue: 0,
  editable: true,
  required: false,
  group: GROUPS.basic,
  formType: FORM_TYPES.flatArray,
  propType: PROP_TYPES.NUMBER,
};

export const createElevationType = (defaultValue: number) => ({
  ...ELEVATION_TYPE,
  defaultValue,
});

export const BORDER_RADIUS_MODE: Mapping = {
  label: "Border radius",
  description:
    "Border radius of the element - either None, Global (using theme global border radius), or Round (must specify a width and height on component)",
  editable: true,
  required: true,
  defaultValue: null,
  formType: FORM_TYPES.borderRadiusMode,
  propType: PROP_TYPES.STRING,
  group: GROUPS.basic,
};

export const FIELD_NAME: FieldMapping = {
  label: "Field name",
  description:
    "The name of the field within the screen that will store this component's value",
  defaultValue: null,
  valuePropName: "value",
  handlerPropName: "onChange",
  editable: true,
  required: false,
  group: GROUPS.basic,
  formType: FORM_TYPES.fieldName,
  propType: PROP_TYPES.STRING,
};

export const TEXT_INPUT_PROPS: ComponentMapping = {
  allowFontScaling: {
    label: "Allow Font Scaling",
    description:
      "Whether fonts should scale to respect Text Size in the user's accessibility settings. (Default: true)",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    group: GROUPS.basic,
  },
  autoCapitalize: {
    label: "Auto Capitalize",
    description:
      "Can automatically capitalize sentences, words, and characters (Default: none).",
    editable: true,
    required: false,
    defaultValue: null,
    options: ["none", "sentences", "words", "characters"],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING,
    group: GROUPS.basic,
  },
  autoCorrect: {
    label: "Auto Correct",
    description: "Enables auto correction",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    group: GROUPS.basic,
  },
  autoFocus: {
    label: "Auto Focus",
    description: "Focuses the input on load in and brings up the keyboard",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    group: GROUPS.basic,
  },
  caretHidden: {
    label: "Hide Caret",
    description:
      "Hides the caret(the line small line underneath each showing where you're editing/typing",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    group: GROUPS.basic,
  },
  contextMenuHidden: {
    label: "Hide Context Menu",
    description: "Hides the system context menu (Default: false)",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    group: GROUPS.advanced,
  },
  defaultValue: {
    label: "Default Value",
    description:
      "The value that of the text-input initially, not a placeholder but the value that the textInput is taking in.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    group: GROUPS.basic,
  },
  editable: {
    label: "Editable",
    description: "If false, the text is not editable",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    group: GROUPS.basic,
  },
  keyboardAppearance: {
    label: "Keyboard Appearance",
    description: "Determines the color of the keyboard.(iOS Only)",
    editable: true,
    required: false,
    defaultValue: "default",
    options: ["default", "light", "dark"],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING,
    group: GROUPS.basic,
  },
  keyboardType: {
    label: "Keyboard Type",
    description: "Determines what keyboard is given to the user.",
    editable: true,
    required: false,
    defaultValue: null,
    options: [
      "default",
      "email-address",
      "numeric",
      "phone-pad",
      "ascii-capable",
      "numbers-and-punctuation",
      "url",
      "number-pad",
      "name-phone-pad",
      "decimal-pad",
      "twitter",
      "web-search",
      "visible-password",
    ],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING,
    group: GROUPS.basic,
  },
  maxLength: {
    label: "Max Length",
    description: "Limits the input to a set number of characters.",
    editable: true,
    required: false,
    defaultValue: null,
    min: 0,
    step: 1,
    precision: 0,
    formType: FORM_TYPES.number,
    propType: PROP_TYPES.NUMBER,
    group: GROUPS.basic,
  },
  placeholder: {
    label: "Placeholder Text",
    description:
      "The text that is shown on load when no defaultValue is available.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    group: GROUPS.basic,
  },
  placeholderTextColor: {
    label: "Placeholder Text Color",
    description: "The color of the placeholder text.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.STRING, // TODO color?
    group: GROUPS.basic,
  },
  returnKeyLabel: {
    label: "Return Key Label",
    description:
      "(Android Only) Sets the label on the return key (use this instead of rewturnKeyType)",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    group: GROUPS.advanced,
  },
  returnKeyType: {
    label: "Return Key Type",
    description: "Determines how the return key should look like",
    editable: true,
    required: false,
    defaultValue: null,
    options: [
      "done",
      "go",
      "next",
      "search",
      "send",
      "none",
      "previous",
      "default",
      "emergency-call",
      "google",
      "join",
      "route",
      "yahoo",
    ],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING,
    group: GROUPS.advanced,
  },
  secureTextEntry: {
    label: "Password Field",
    description:
      "Hides the characters with a *, useful for passwords and other sensitive information.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    group: GROUPS.basic,
  },
  selectionColor: {
    label: "Selection Color",
    description: "Color of the highlighted portion when selecting.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.STRING,
    group: GROUPS.advanced,
  },
  selectTextOnFocus: {
    label: "Select Text on Focus",
    description:
      "If true, all the text will automatically be selected on focus",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    group: GROUPS.basic,
  },
};
