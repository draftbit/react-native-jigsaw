import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  FIELD_NAME,
  Triggers,
  createColorProp,
  createNumberProp,
  createFieldNameProp,
  StylesPanelSections,
} from "@draftbit/types";

const SEED_DATA_PROPS = {
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
    defaultValue: "none",
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
  disabled: {
    group: GROUPS.data,
    label: "Disabled",
    description:
      "Whether the input should be disabled. Will prevent input and show a greyed out state.",
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    defaultValue: false,
    editable: true,
    required: false,
  },
  editable: {
    group: GROUPS.data,
    label: "Editable",
    description: "If false, the text is not editable",
    editable: true,
    required: false,
    defaultValue: true,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
  },
  blurOnSubmit: {
    group: GROUPS.advanced,
    label: "Blur On Submit",
    description: "If true, the text field will blur when submitted. ",
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
    group: GROUPS.data,
    label: "Placeholder Text",
    description: "The text that is shown on load when no value is available.",
    editable: true,
    required: false,
    defaultValue:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
  label: {
    group: GROUPS.data,
    label: "Label",
    description: "The label to be displayed on the text field",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: true,
  },
  assistiveText: {
    group: GROUPS.basic,
    label: "Assistive text",
    description: "Helper text to display below the input",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: false,
  },
  error: {
    group: GROUPS.data,
    label: "Error",
    description: "Whether the input should display the error state",
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    defaultValue: null,
    editable: true,
    required: false,
  },
  leftIconName: {
    group: GROUPS.basic,
    label: "Left icon name",
    description: "The icon to display on the left",
    formType: FORM_TYPES.icon,
    propType: PROP_TYPES.ASSET,
    defaultValue: null,
    editable: true,
    required: false,
  },
  leftIconMode: {
    group: GROUPS.basic,
    label: "Left icon mode",
    description:
      "The mode of the icon to display on the left. 'inset' or 'outset'.",
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING,
    defaultValue: null /* inset */,
    options: ["inset", "outset"],
    editable: true,
    required: true,
  },
  rightIconName: {
    group: GROUPS.basic,
    label: "Right icon name",
    description: "The icon to display on the right",
    formType: FORM_TYPES.icon,
    propType: PROP_TYPES.ASSET,
    defaultValue: null,
    editable: true,
    required: false,
  },
  fieldName: {
    ...FIELD_NAME,
    handlerPropName: "onChangeText",
    defaultValue: "textFieldValue",
  },
};

const SEED_DATA_TRIGGERS = [Triggers.OnChangeText];
export const SEED_DATA = [
  {
    name: "Styled Text Field",
    tag: "TextField",
    description: "A text input with a solid border or underline",
    category: COMPONENT_TYPES.input,
    preview_image_url: "{CLOUDINARY_URL}/Textfield.png",
    supports_list_render: false,
    triggers: SEED_DATA_TRIGGERS,
    props: {
      ...SEED_DATA_PROPS,
      type: {
        label: "Appearance",
        description: "Type of Datepicker",
        formType: FORM_TYPES.flatArray,
        propType: PROP_TYPES.STRING,
        defaultValue: "solid",
        options: ["solid", "underline"],
        editable: true,
        required: true,
        group: GROUPS.basic,
      },
      underlineColor: createColorProp({
        label: "Underline Color",
        defaultValue: "light",
      }),
      activeBorderColor: createColorProp({
        label: "Active Border Color",
        defaultValue: "primary",
      }),
      secureTextEntry: {
        group: GROUPS.basic,
        label: "Password field",
        description:
          "If true, this turns the field into a password field, hiding the text",
        formType: FORM_TYPES.boolean,
        propType: PROP_TYPES.BOOLEAN,
        defaultValue: null,
        editable: true,
        required: false,
      },
    },
    layout: {},
  },
  {
    name: "Styled Text Area",
    tag: "TextField",
    description: "A text area with a solid border or underline",
    category: COMPONENT_TYPES.input,
    stylesPanelSections: [
      StylesPanelSections.Typography,
      StylesPanelSections.Background,
      StylesPanelSections.Size,
      StylesPanelSections.MarginsAndPaddings,
      StylesPanelSections.Position,
      StylesPanelSections.Borders,
      StylesPanelSections.Effects,
    ],
    preview_image_url: "{CLOUDINARY_URL}/TextArea.png",
    supports_list_render: false,
    triggers: SEED_DATA_TRIGGERS,
    props: {
      ...SEED_DATA_PROPS,
      type: {
        label: "Appearance",
        description: "Type of Datepicker",
        formType: FORM_TYPES.flatArray,
        propType: PROP_TYPES.STRING,
        defaultValue: "solid",
        options: ["solid", "underline"],
        editable: true,
        required: true,
        group: GROUPS.basic,
      },
      multiline: {
        label: "Multiline",
        description: "Multiline",
        group: GROUPS.uncategorized,
        formType: FORM_TYPES.boolean,
        propType: PROP_TYPES.BOOLEAN,
        defaultValue: true,
        editable: false,
        required: false,
      },
      numberOfLines: createNumberProp({
        label: "Number of Lines",
        description: "Number of Lines for Multiline Field",
        defaultValue: 4,
        group: GROUPS.basic,
      }),
      fieldName: createFieldNameProp({
        defaultValue: "textAreaValue",
      }),
    },
    layout: {},
  },
];
