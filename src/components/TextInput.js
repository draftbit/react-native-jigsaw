import { TextInput } from "react-native";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

export default TextInput;

export const SEED_DATA = {
  name: "TextInput",
  tag: "TextInput",
  description: "An input field that allows users to type in data.",
  type: COMPONENT_TYPES.primitive,
  supports_list_render: false,
  layout: {},
  props: {
    allowFontScaling: {
      label: "Allow Font Scaling",
      description:
        "Whether fonts should scale to respect Text Size in the user's accessibility settings. (Default: true)",
      editable: true,
      required: false,
      value: true,
      type: FORM_TYPES.boolean
    },
    autoCapitalize: {
      label: "Auto Capitalize",
      description:
        "Can automatically capitalize sentences, words, and characters (Default: none).",
      editable: true,
      required: false,
      value: "none",
      options: ["none", "sentences", "words", "characters"],
      type: FORM_TYPES.flatArray
    },
    autoComplete: {
      label: "Auto Complete",
      description:
        "(Android Only) Suggests hints to autocomplete from the system",
      editable: true,
      required: false,
      value: "off",
      options: [
        "off",
        "username",
        "password",
        "email",
        "name",
        "tel",
        "street-address",
        "postal-code",
        "cc-number",
        "cc-csc",
        "cc-exp",
        "cc-exp-month",
        "cc-exp-year"
      ],
      type: FORM_TYPES.flatArray
    },
    autoCorrect: {
      label: "Auto Correct",
      description: "Enables auto correction",
      editable: true,
      required: false,
      value: true,
      type: FORM_TYPES.boolean
    },
    autoFocus: {
      label: "Auto Focus",
      description: "Focuses the input on load in and brings up the keyboard",
      editable: true,
      required: false,
      value: false,
      type: FORM_TYPES.boolean
    },
    caretHidden: {
      label: "Hide Caret",
      description:
        "Hides the caret(the line small line underneath each showing where you're editing/typing",
      editable: true,
      required: false,
      value: false,
      type: FORM_TYPES.boolean
    },
    clearButtonMode: {
      label: "Clear Button Mode",
      description:
        "Enables a button within the textInput to clear the data entered",
      editable: true,
      required: false,
      options: ["never", "while-editing", "unless-editing", "always"],
      value: "never",
      type: FORM_TYPES.flatArray
    },
    clearTextOnFocus: {
      label: "Clear Text on Focus",
      description:
        "If true, clears the text field automatically when its focused.",
      editable: true,
      required: false,
      value: false,
      type: FORM_TYPES.boolean
    },
    contextMenuHidden: {
      label: "Hide Context Menu",
      description: "Hides the system context menu (Default: false)",
      editable: true,
      required: false,
      value: false,
      type: FORM_TYPES.boolean
    },
    defaultValue: {
      label: "Default Value",
      description:
        "The value that of the text-input initially, not a placeholder but the value that the textInput is taking in.",
      editable: true,
      required: false,
      value: "",
      type: FORM_TYPES.string
    },
    editable: {
      label: "Editable or Disabled",
      description: "If false, the text is not editable",
      editable: true,
      required: false,
      value: true,
      type: FORM_TYPES.boolean
    },
    enablesReturnKeyAutomatically: {
      label: "Enables Return Key Automatically",
      description:
        "If true, the keyboard disables the return key when there is no text and automatically enables it when there is (Default: false)",
      editable: true,
      required: false,
      value: false,
      type: FORM_TYPES.boolean
    },
    keyboardAppearance: {
      label: "Keyboard Appearance",
      description: "Determines color of the keyboard on iOS",
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
      value: "default",
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
    multiline: {
      label: "Multiple Lines",
      description:
        "Allows multiple lines of input, useful for situations where the user may be typing in a lot of data.",
      editable: true,
      required: false,
      value: false,
      type: FORM_TYPES.boolean
    },
    numberOfLines: {
      label: "Number of Lines",
      description:
        "Sets the number of lines for the input (Multiple Lines needs to be true)",
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
      value: "default",
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
    scrollEnabled: {
      label: "Scroll Enabled",
      description:
        "If false, scrolling of the input will be disabled. Only works when Multiple Lines is true",
      editable: true,
      required: false,
      value: true,
      type: FORM_TYPES.boolean
    },
    secureTextEntry: {
      label: "Password Field",
      description:
        "Hides the characters with a *, useful for passwords and other sensitive information.",
      editable: true,
      required: false,
      value: false,
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
      description:
        "If true, all the text will automatically be selected on focus",
      editable: true,
      required: false,
      value: false,
      type: FORM_TYPES.boolean
    },
    spellcheck: {
      label: "Disable Spell Check",
      description:
        "If false, disables spell-check style (red underlines). Default comes from Auto Correct",
      editable: true,
      required: false,
      value: null,
      type: FORM_TYPES.boolean
    },
    textContentType: {
      label: "Text Content Type",
      description:
        "Give the keyboard and system about what it should do with the input. For example, if its an address, autofill from address book",
      editable: true,
      required: false,
      value: "none",
      options: [
        "none",
        "URL",
        "addressCity",
        "addressCityAndState",
        "addressState",
        "countryName",
        "creditCardNumber",
        "emailAddress",
        "familyName",
        "fullStreetAddress",
        "givenName",
        "jobTitle",
        "location",
        "middleName",
        "name",
        "namePrefix",
        "nameSuffix",
        "nickname",
        "organizationName",
        "postalCode",
        "streetAddressLine1",
        "streetAddressLine2",
        "sublocality",
        "telephoneNumber",
        "username",
        "password"
      ],
      type: FORM_TYPES.flatArray
    },
    textBreakStrategy: {
      label: "Text Break Strategy",
      description:
        "(Android Only) Set the text break strategy. (Default: simple)",
      editable: true,
      required: false,
      value: "simple",
      options: ["simple", "highQuality", "balanced"],
      type: FORM_TYPES.flatArray
    },
    underlineColorAndroid: {
      label: "Underline color",
      description:
        "(Android Only) The color of the underline(the line underneath the text when finished typing.",
      editable: true,
      required: false,
      value: null,
      type: FORM_TYPES.color
    }
  }
};
