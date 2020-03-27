const TextInputProps = {
  allowFontScaling: {
    label: "Allow Font Scaling",
    description:
      "Whether fonts should scale to respect Text Size in the user's accessibility settings. (Default: true)",
    editable: true,
    required: false,
    value: null,
    type: FORM_TYPES.boolean
  },
  color: {
    label: "Text Color",
    description: "Text Color",
    editable: true,
    required: false,
    type: FORM_TYPES.color,
    value: "strong"
  },
  autoCapitalize: {
    label: "Auto Capitalize",
    description: "Can automatically capitalize sentences, words, and characters (Default: none).",
    editable: true,
    required: false,
    value: null,
    options: ["none", "sentences", "words", "characters"],
    type: FORM_TYPES.flatArray
  },
  autoCorrect: {
    label: "Auto Correct",
    description: "Enables auto correction",
    editable: true,
    required: false,
    value: null,
    type: FORM_TYPES.boolean
  },
  autoFocus: {
    label: "Auto Focus",
    description: "Focuses the input on load in and brings up the keyboard",
    editable: true,
    required: false,
    value: null,
    type: FORM_TYPES.boolean
  },
  caretHidden: {
    label: "Hide Caret",
    description:
      "Hides the caret(the line small line underneath each showing where you're editing/typing",
    editable: true,
    required: false,
    value: null,
    type: FORM_TYPES.boolean
  },
  contextMenuHidden: {
    label: "Hide Context Menu",
    description: "Hides the system context menu (Default: false)",
    editable: true,
    required: false,
    value: null,
    type: FORM_TYPES.boolean
  },
  defaultValue: {
    label: "Default Value",
    description:
      "The value that of the text-input initially, not a placeholder but the value that the textInput is taking in.",
    editable: true,
    required: false,
    value: null,
    type: FORM_TYPES.string
  },
  editable: {
    label: "Editable",
    description: "If false, the text is not editable",
    editable: true,
    required: false,
    value: null,
    type: FORM_TYPES.boolean
  },
  keyboardAppearance: {
    label: "Keyboard Appearance",
    description: "Determines the color of the keyboard.(iOS Only)",
    editable: true,
    required: false,
    value: "default",
    options: ["default", "light", "dark"],
    type: FORM_TYPES.flatArray
  },
  keyboardType: {
    label: "Keyboard Type",
    description: "Determines what keyboard is given to the user.",
    editable: true,
    required: false,
    value: null,
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
      "visible-password"
    ],
    type: FORM_TYPES.flatArray
  },
  maxLength: {
    label: "Max Length",
    description: "Limits the input to a set number of characters.",
    editable: true,
    required: false,
    value: null,
    min: 0,
    step: 1,
    precision: 0,
    type: FORM_TYPES.number
  },
  placeholder: {
    label: "Placeholder Text",
    description: "The text that is shown on load when no value is available.",
    editable: true,
    required: false,
    value: null,
    type: FORM_TYPES.string
  },
  placeholderTextColor: {
    label: "Placeholder Text Color",
    description: "The color of the placeholder text.",
    editable: true,
    required: false,
    value: null,
    type: FORM_TYPES.color
  },
  returnKeyLabel: {
    label: "Return Key Label",
    description:
      "(Android Only) Sets the label on the return key (use this instead of rewturnKeyType)",
    editable: true,
    required: false,
    value: null,
    type: FORM_TYPES.string
  },
  returnKeyType: {
    label: "Return Key Type",
    description: "Determines how the return key should look like",
    editable: true,
    required: false,
    value: null,
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
      "yahoo"
    ],
    type: FORM_TYPES.flatArray
  },
  secureTextEntry: {
    label: "Password Field",
    description:
      "Hides the characters with a *, useful for passwords and other sensitive information.",
    editable: true,
    required: false,
    value: null,
    type: FORM_TYPES.boolean
  },
  selectionColor: {
    label: "Selection Color",
    description: "Color of the highlighted portion when selecting.",
    editable: true,
    required: false,
    value: null,
    type: FORM_TYPES.color
  },
  selectTextOnFocus: {
    label: "Select Text on Focus",
    description: "If true, all the text will automatically be selected on focus",
    editable: true,
    required: false,
    value: null,
    type: FORM_TYPES.boolean
  }
}

export default TextInputProps
