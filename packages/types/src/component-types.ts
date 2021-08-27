// @ts-nocheck
// Make sure enum exists @draftbit
export const Triggers = {
  OnPress: "ON_PRESS",
  OnValueChange: "ON_VALUE_CHANGE",
  OnDateChange: "ON_DATE_CHANGE",
  OnChange: "ON_CHANGE",
  OnChangeText: "ON_CHANGE_TEXT",
  OnRefresh: "ON_REFRESH",
  OnBlur: "ON_BLUR",
  OnSwipe: "ON_SWIPE",
  OnSelect: "ON_SELECT",
};

export const PROP_TYPES = {
  STRING: "STRING",
  ARRAY: "ARRAY",
  NUMBER: "NUMBER",
  BOOLEAN: "BOOLEAN",
  OBJECT: "OBJECT",
  ASSET: "ASSET",
  THEME: "THEME",
};

export const PLATFORMS = {
  ios: "ios",
  android: "android",
  web: "web",
};

export const GROUPS = {
  accessibility: "accessibility",
  basic: "basic",
  layout: "layout",
  advanced: "advanced",
  data: "data",
  uncategorized: "uncategorized",
  action: "action",
  style: "style",
};

export const FORM_TYPES = {
  json: "json",
  multiselect: "multiselect",
  position: "position",
  sourceUrl: "sourceUrl",
  url: "url",
  string: "string",
  boolean: "boolean",
  number: "number",
  select: "select",
  color: "color",
  typeStyle: "typeStyle",
  component: "component",
  geolocation: "geolocation",
  image: "image",
  imageArray: "imageArray",
  icon: "icon",
  style: "style",
  function: "function",
  flatArray: "flatArray" /* array of strings or numbers */,
  array: "array" /* array of objects */,
  aspectRatio: "aspectRatio",
  date: "date",
  borderRadiusMode: "borderRadiusMode",
  fieldName: "fieldName",
  action: "action",
};

export const COMPONENT_TYPES = {
  basic: "basic",
  media: "media",
  layout: "layout",
  input: "input",
  data: "data",
  card: "card",
  button: "button",
  row: "row",
  header: "header",
  container: "container",
  deprecated: "deprecated",
};

const ELEVATION_TYPE = {
  label: "Elevation",
  description: "Elevation of the component. A number 0-3.",
  formType: FORM_TYPES.flatArray,
  propType: PROP_TYPES.NUMBER,
  options: [0, 1, 2, 3],
  defaultValue: 0,
  editable: true,
  required: false,
  group: GROUPS.basic,
};

export const createElevationType = (defaultValue) => ({
  ...ELEVATION_TYPE,
  defaultValue,
});

export const createTextProp = (overrides) => ({
  label: "Text",
  description: "Text you can customize however you'd like",
  formType: FORM_TYPES.string,
  propType: PROP_TYPES.STRING,
  defaultValue: "Beautiful West Coast Villa",
  editable: true,
  required: false,
  group: GROUPS.data,
  ...overrides,
});

export const createImageProp = (overrides = {}) => ({
  label: "Image",
  description: "Image",
  group: GROUPS.data,
  formType: FORM_TYPES.sourceUrl,
  propType: PROP_TYPES.OBJECT,
  defaultValue: "https://static.draftbit.com/images/placeholder-image.png",
  editable: true,
  required: true,
  ...overrides,
});

export const createSourceProp = (overrides = {}) => ({
  label: "Website URL",
  description: "A normal URL",
  defaultValue: "https://draftbit.com",
  group: GROUPS.data,
  formType: FORM_TYPES.sourceUrl,
  propType: PROP_TYPES.OBJECT,
  editable: true,
  required: true,
  ...overrides,
});

export const createResizeModeProp = (overrides = {}) => ({
  group: GROUPS.basic,
  label: "Resize Mode",
  description:
    "Determines how to resize the image when the frame doesn't match the raw image dimensions",
  editable: true,
  required: false,
  defaultValue: "cover",
  formType: FORM_TYPES.flatArray,
  propType: PROP_TYPES.STRING,
  options: ["cover", "contain", "stretch", "repeat", "center"],
  ...overrides,
});

export const createHitslopProp = (overrides = {}) => ({
  label: "Hit Slop",
  description:
    "Makes the Touchable easier to press by expanding the touchable area a specified number of points, without having to change the layout of the Touchable (e.g. by adding padding)",
  group: GROUPS.advanced,
  editable: true,
  required: false,
  formType: FORM_TYPES.position,
  propType: PROP_TYPES.OBJECT,
  defaultValue: null /* 8 */,
  ...overrides,
});

export const createIconProp = (overrides = {}) => ({
  label: "Icon",
  description: "Displays an icon of your choice",
  formType: FORM_TYPES.icon,
  propType: PROP_TYPES.STRING /* OR ASSET TODO TEST ME */,
  defaultValue: "FontAwesome/photo",
  required: true,
  editable: true,
  group: GROUPS.basic,
  ...overrides,
});

export const createAspectRatioProp = (overrides = {}) => ({
  label: "Aspect ratio",
  description: "Aspect ratio of the image",
  formType: FORM_TYPES.aspectRatio,
  propType: PROP_TYPES.NUMBER,
  defaultValue: 1.5,
  editable: true,
  required: false,
  group: GROUPS.basic,
  ...overrides,
});

export const createBoolProp = (overrides = {}) => ({
  label: "Centered Text",
  description: "Whether to center the text",
  formType: FORM_TYPES.boolean,
  propType: PROP_TYPES.BOOLEAN,
  defaultValue: false,
  editable: true,
  required: false,
  group: GROUPS.data,
  ...overrides,
});

export const createStaticBoolProp = (overrides = {}) =>
  createBoolProp({
    group: GROUPS.basic,
    ...overrides,
  });

export const createTextStyle = (overrides = {}) => ({
  group: GROUPS.basic,
  label: "Text Style",
  description: "Change the font styles of a given component",
  editable: true,
  required: true,
  formType: FORM_TYPES.typeStyle,
  propType: PROP_TYPES.THEME,
  defaultValue: null,
  ...overrides,
});

export const createNumberProp = (overrides = {}) => ({
  label: "Number",
  description: "A number",
  formType: FORM_TYPES.number,
  propType: PROP_TYPES.NUMBER,
  group: GROUPS.data,
  defaultValue: null,
  editable: true,
  required: true,
  step: 1,
  ...overrides,
});

export const createStaticNumberProp = (overrides = {}) =>
  createNumberProp({
    group: GROUPS.basic,
    ...overrides,
  });

export const createNumColumnsType = (overrides = {}) => ({
  label: "Number of Columns",
  description: "Number of Columns",
  group: GROUPS.basic,
  formType: FORM_TYPES.number,
  propType: PROP_TYPES.NUMBER,
  defaultValue: 1,
  editable: false,
  required: false,
  ...overrides,
});

export const createColorProp = (overrides = {}) => ({
  group: GROUPS.basic,
  label: "Color",
  description: "Select or create a color",
  editable: true,
  required: false,
  defaultValue: null,
  formType: FORM_TYPES.color,
  propType: PROP_TYPES.THEME,
  ...overrides,
});

export const createTextEnumProp = (overrides = {}) => ({
  group: GROUPS.basic,
  label: "Enum",
  description: "Enum",
  editable: true,
  required: false,
  formType: FORM_TYPES.flatArray,
  propType: PROP_TYPES.STRING,
  defaultValue: null,
  options: [],
  ...overrides,
});

export const createDirectionProp = (overrides = {}) =>
  createTextEnumProp({
    label: "Direction",
    description:
      "Whether the checkbox rows should be shown horizontally or vertically",
    formType: FORM_TYPES.flatArray,
    defaultValue: null,
    options: ["horizontal", "vertical"],
    ...overrides,
  });

export const createRowDirectionProp = (overrides = {}) =>
  createTextEnumProp({
    label: "Direction",
    description: "Whether the element will appear on the left or right",
    formType: FORM_TYPES.flatArray,
    options: ["row", "row-reverse"],
    ...overrides,
  });

export const createIconSizeProp = (overrides = {}) => ({
  group: GROUPS.basic,
  label: "Icon Size",
  description: "Size of icon",
  editable: true,
  required: false,
  formType: FORM_TYPES.flatArray,
  propType: PROP_TYPES.NUMBER,
  defaultValue: 32,
  options: [12, 16, 24, 32, 48, 64],
  ...overrides,
});

export const createBorderRadiusProp = (overrides = {}) => ({
  group: GROUPS.style,
  label: "Border radius",
  description:
    "Border radius of the element - either None, Global (using theme global border radius), or Round (must specify a width and height on component)",
  formType: FORM_TYPES.borderRadiusMode,
  propType: PROP_TYPES.THEME,
  defaultValue: null,
  editable: true,
  required: true,
  ...overrides,
});

export const FIELD_NAME = {
  group: GROUPS.basic,
  label: "Field name",
  description:
    "The name of the field within the screen that will store this component's value",
  formType: FORM_TYPES.fieldName,
  propType: PROP_TYPES.STRING,
  defaultValue: "value",
  valuePropName: "value",
  handlerPropName: "onChange",
  editable: true,
  required: false,
};

export const createFieldNameProp = (overrides = {}) => ({
  ...FIELD_NAME,
  handlerPropName: "onPress",
  ...overrides,
});

export const createActionProp = (overrides = {}) => ({
  label: "Action",
  description: "Action to execute when button pressed",
  editable: true,
  required: false,
  formType: FORM_TYPES.action,
  propType: PROP_TYPES.STRING,
  defaultValue: null,
  group: GROUPS.basic,
  ...overrides,
});

export const TEXT_INPUT_PROPS = {
  allowFontScaling: {
    group: GROUPS.advanced,
    label: "Allow Font Scaling",
    description:
      "Whether fonts should scale to respect Text Size in the user's accessibility settings. (Default: true)",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
  autoCapitalize: {
    group: GROUPS.advanced,
    label: "Auto Capitalize",
    description:
      "Can automatically capitalize sentences, words, and characters (Default: none).",
    editable: true,
    required: false,
    defaultValue: null,
    options: ["none", "sentences", "words", "characters"],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING,
  },
  autoCorrect: {
    group: GROUPS.advanced,
    label: "Auto Correct",
    description: "Enables auto correction",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
  autoFocus: {
    group: GROUPS.basic,
    label: "Auto Focus",
    description: "Focuses the input on load in and brings up the keyboard",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
  caretHidden: {
    group: GROUPS.advanced,
    label: "Hide Caret",
    description:
      "Hides the caret(the line small line underneath each showing where you're editing/typing",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
  contextMenuHidden: {
    group: GROUPS.advanced,
    label: "Hide Context Menu",
    description: "Hides the system context menu (Default: false)",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
  defaultValue: {
    group: GROUPS.basic,
    label: "Default Value",
    description:
      "The value that of the text-input initially, not a placeholder but the value that the textInput is taking in.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
  },
  disabled: {
    group: GROUPS.basic,
    label: "Disabled",
    description:
      "Whether the input should be disabled. Will prevent input and show a greyed out state.",
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    defaultValue: null,
    editable: true,
    required: false,
  },
  editable: {
    group: GROUPS.advanced,
    label: "Editable",
    description: "If false, the text is not editable",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
  keyboardAppearance: {
    group: GROUPS.advanced,
    label: "Keyboard Appearance",
    description: "Determines the color of the keyboard.(iOS Only)",
    editable: true,
    required: false,
    defaultValue: null,
    options: ["default", "light", "dark"],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING,
  },
  keyboardType: {
    group: GROUPS.advanced,
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
  },
  maxLength: {
    group: GROUPS.basic,
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
  },
  placeholder: {
    group: GROUPS.basic,
    label: "Placeholder Text",
    description: "The text that is shown on load when no value is available.",
    editable: true,
    required: false,
    defaultValue: "Change my fieldname to email or password on the right side",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
  },
  placeholderTextColor: {
    group: GROUPS.basic,
    label: "Placeholder Text Color",
    description: "The color of the placeholder text.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.STRING,
  },
  returnKeyLabel: {
    group: GROUPS.advanced,
    label: "Return Key Label",
    description:
      "(Android Only) Sets the label on the return key (use this instead of rewturnKeyType)",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
  },
  returnKeyType: {
    group: GROUPS.advanced,
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
  },
  secureTextEntry: {
    group: GROUPS.basic,
    label: "Password Input?",
    description:
      "Hides the characters with a *, useful for passwords and other sensitive information.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
  selectionColor: {
    group: GROUPS.advanced,
    label: "Selection Color",
    description: "Color of the highlighted portion when selecting.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.STRING,
  },
  selectTextOnFocus: {
    group: GROUPS.advanced,
    label: "Select Text on Focus",
    description:
      "If true, all the text will automatically be selected on focus",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
};
