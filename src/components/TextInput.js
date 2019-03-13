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
    autoCapitalize: {
      label: "Auto Capitalize",
      description:
        "Can automatically capitalize sentences, words, and characters (Default: none).",
      editable: true,
      required: true,
      value: "none",
      options: ["none", "sentences", "words", "characters"],
      type: FORM_TYPES.flatArray
    },
    autoComplete: {
      label: "Auto Capitalize",
      description: "Android Only, suggests hints to auto fill the input",
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
      value: false,
      type: FORM_TYPES.boolean
    },
    autoFocus: {
      label: "Auto Focus",
      description: "Highlights the field on load in and brings up the keyboard",
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
      value: "never"
    },
    defaultValue: {
      label: "Default Value",
      description:
        "The value that of the text-input intially, not a placeholder but the value that the textInput is taking in.",
      editable: true,
      required: false,
      value: "",
      type: FORM_TYPES.string
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
      value: 140,
      min: 0,
      step: 1,
      precision: 1,
      type: FORM_TYPES.number
    },
    placeholder: {
      label: "Placeholder Text",
      description:
        "The text that is shown on load and when no value is available.",
      editable: true,
      required: false,
      value: "",
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
    secureTextEntry: {
      label: "Secure Text Entry",
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
    underlineColorAndroid: {
      lablel: "Underline color",
      description:
        "Android Only, the color of the underline(the line undearneath the text when finished typing.",
      editable: true,
      required: false,
      value: null,
      type: FORM_TYPES.color
    }
  }
};
