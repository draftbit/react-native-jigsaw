import { TextInput } from "react-native"
import { COMPONENT_TYPES, FORM_TYPES, FIELD_NAME } from "../core/component-types"
import TextInputProps from "./props/TextInputProps"

export default TextInput

export const SEED_DATA = {
  name: "TextInput",
  tag: "TextInput",
  description: "An input field that allows users to type in data.",
  category: COMPONENT_TYPES.input,
  preview_image_url: "https://res.cloudinary.com/altos/image/upload/draftbit/Jigsaw/TextInput.png",
  supports_list_render: false,
  layout: {},
  props: {
    ...TextInputCommonProps,
    style: {
      label: "Style",
      description: "Text Style",
      editable: true,
      required: false,
      type: FORM_TYPES.typeStyle,
      value: null
    },
    clearButtonMode: {
      label: "Clear Button Mode",
      description: "Enables a button within the textInput to clear the data entered",
      editable: true,
      required: false,
      options: ["never", "while-editing", "unless-editing", "always"],
      value: null,
      type: FORM_TYPES.flatArray
    },
    clearTextOnFocus: {
      label: "Clear Text on Focus",
      description: "If true, clears the text field automatically when its focused.",
      editable: true,
      required: false,
      value: null,
      type: FORM_TYPES.boolean
    },
    enablesReturnKeyAutomatically: {
      label: "Enables Return Key Automatically",
      description:
        "If true, the keyboard disables the return key when there is no text and automatically enables it when there is (Default: false)",
      editable: true,
      required: false,
      value: null,
      type: FORM_TYPES.boolean
    },
    keyboardAppearance: {
      label: "Keyboard Appearance",
      description: "Determines color of the keyboard on iOS",
      editable: true,
      required: false,
      value: null,
      options: ["default", "light", "dark"],
      type: FORM_TYPES.flatArray
    },
    multiline: {
      label: "Multiple Lines",
      description:
        "Allows multiple lines of input, useful for situations where the user may be typing in a lot of data.",
      editable: true,
      required: false,
      value: null,
      type: FORM_TYPES.boolean
    },
    numberOfLines: {
      label: "Number of Lines",
      description: "Sets the number of lines for the input (Multiple Lines needs to be true)",
      editable: true,
      required: false,
      value: null,
      min: 0,
      step: 1,
      precision: 0,
      type: FORM_TYPES.number
    },
    scrollEnabled: {
      label: "Scroll Enabled",
      description:
        "If false, scrolling of the input will be disabled. Only works when Multiple Lines is true",
      editable: true,
      required: false,
      value: null,
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
      value: null,
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
      description: "(Android Only) Set the text break strategy. (Default: simple)",
      editable: true,
      required: false,
      value: null,
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
    },
    fieldName: {
      ...FIELD_NAME,
      value: "textInputValue",
      handlerPropName: "onChangeText"
    }
  }
}
