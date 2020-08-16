import * as React from "react";
import { Text as NativeText, I18nManager } from "react-native";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://facebook.github.io/react-native/docs/text.html#props
 */
class Text extends React.Component {
  /**
   * @internal
   */
  setNativeProps(...args) {
    return this._root && this._root.setNativeProps(...args);
  }

  render() {
    const { style, theme, ...rest } = this.props;
    const writingDirection = I18nManager.isRTL ? "rtl" : "ltr";

    return (
      <NativeText
        {...rest}
        ref={(c) => {
          this._root = c;
        }}
        style={[
          {
            textAlign: "left",
            writingDirection,
          },
          style,
        ]}
      />
    );
  }
}

export default withTheme(Text);

export const SEED_DATA = {
  name: "Text",
  tag: "Text",
  description: "A basic Text component",
  category: COMPONENT_TYPES.basic,
  supports_list_render: false,
  preview_image_url:
    "https://res.cloudinary.com/altos/image/upload/draftbit/Jigsaw/Text.svg",
  layout: {},
  props: {
    children: {
      label: "Text",
      description: "Text for the text",
      editable: true,
      required: true,
      formType: FORM_TYPES.string,
      defaultValue: "Hello World!",
    },
    accessibilityLabel: {
      name: "accessibilityLabel",
      label: "accessibilityLabel",
      description:
        "Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.",
      options: [],
      editable: true,
      required: false,
      formType: FORM_TYPES.string,
      defaultValue: null,
    },
    accessibilityRole: {
      name: "accessibilityRole",
      label: "accessibilityRole",
      description:
        "Tells the screen reader to treat the currently focused on element as having a specific role.Possible values for AccessibilityRole is one of:\n'none' - The element has no role.\n'button' - The element should be treated as a button.\n'link' - The element should be treated as a link.\n'header' - The element is a header that divides content into sections.\n'search' - The element should be treated as a search field.\n'image' - The element should be treated as an image.\n'key' - The element should be treated like a keyboard key.\n'text' - The element should be treated as text.\n'summary' - The element provides app summary information.\n'imagebutton' - The element has the role of both an image and also a button.\n'adjustable' - The element allows adjustment over a range of values.\nOn iOS, these roles map to corresponding Accessibility Traits. Image button has the same functionality as if the trait was set to both 'image' and 'button'. See the Accessibility guide for more information.On Android, these roles have similar functionality on TalkBack as adding Accessibility Traits does on Voiceover in iOS",
      options: [
        "none",
        "button",
        "link",
        "header",
        "search",
        "image",
        "key",
        "text",
        "summary",
        "imagebutton",
        "adjustable",
      ],
      editable: true,
      required: false,
      formType: FORM_TYPES.array,
      defaultValue: null,
    },
    accessible: {
      name: "accessible",
      label: "accessible",
      description:
        "When set to true, indicates that the view is an accessibility element. The default value for a Text element is true.See the Accessibility guide for more information.",
      options: [],
      editable: true,
      required: false,
      formType: FORM_TYPES.boolean,
      defaultValue: true,
    },
    adjustsFontSizeToFit: {
      name: "adjustsFontSizeToFit",
      label: "adjustsFontSizeToFit",
      description:
        "Specifies whether fonts should be scaled down automatically to fit given style constraints.",
      options: [],
      editable: true,
      required: false,
      formType: FORM_TYPES.boolean,
      defaultValue: false,
    },
    allowFontScaling: {
      name: "allowFontScaling",
      label: "allowFontScaling",
      description:
        "Specifies whether fonts should scale to respect Text Size accessibility settings. The default is true.",
      options: [],
      editable: true,
      required: false,
      formType: FORM_TYPES.boolean,
      defaultValue: true,
    },
    dataDetectorType: {
      name: "dataDetectorType",
      label: "dataDetectorType",
      description:
        "Determines the types of data converted to clickable URLs in the text element. By default no data types are detected.You can provide only one type.Possible values for dataDetectorType are:\n'phoneNumber'\n'link'\n'email'\n'none'\n'all'\n",
      options: ["phoneNumber", "link", "email", "none", "all"],
      editable: true,
      required: false,
      formType: FORM_TYPES.array,
      defaultValue: null,
    },
    disabled: {
      name: "disabled",
      label: "disabled",
      description:
        "Specifies the disabled state of the text view for testing purposes",
      options: [],
      editable: true,
      required: false,
      formType: FORM_TYPES.boolean,
      defaultValue: false,
    },
    ellipsizeMode: {
      name: "ellipsizeMode",
      label: "ellipsizeMode",
      description:
        'When numberOfLines is set, this prop defines how text will be truncated. numberOfLines must be set in conjunction with this prop.This can be one of the following values:\nhead - The line is displayed so that the end fits in the container and the missing text at the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"\nmiddle - The line is displayed so that the beginning and end fit in the container and the missing text in the middle is indicated by an ellipsis glyph. "ab...yz"\ntail - The line is displayed so that the beginning fits in the container and the missing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."\nclip - Lines are not drawn past the edge of the text container.\nThe default is tail.',
      options: ["head", "middle", "tail", "clip"],
      editable: true,
      required: false,
      formType: FORM_TYPES.array,
      defaultValue: "tail",
    },
    maxFontSizeMultiplier: {
      name: "maxFontSizeMultiplier",
      label: "maxFontSizeMultiplier",
      description:
        "Specifies largest possible scale a font can reach when allowFontScaling is enabled. Possible values:\nnull/undefined (default): inherit from the parent node or the global default (0)\n0: no max, ignore parent/global default\n>= 1: sets the maxFontSizeMultiplier of this node to this value\n",
      options: [],
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      defaultValue: null,
    },
    minimumFontScale: {
      name: "minimumFontScale",
      label: "minimumFontScale",
      description:
        "Specifies smallest possible scale a font can reach when adjustsFontSizeToFit is enabled. (values 0.01-1.0).",
      options: [],
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      defaultValue: null,
    },
    numberOfLines: {
      name: "numberOfLines",
      label: "numberOfLines",
      description:
        "Used to truncate the text with an ellipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number.This prop is commonly used with ellipsizeMode.",
      options: [],
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      step: 1,
      precision: 1,
      defaultValue: null,
    },
    selectable: {
      name: "selectable",
      label: "selectable",
      description:
        "Lets the user select text, to use the native copy and paste functionality.",
      options: [],
      editable: true,
      required: false,
      formType: FORM_TYPES.boolean,
      defaultValue: null,
    },
    selectionColor: {
      name: "selectionColor",
      label: "selectionColor",
      description: "The highlight color of the text.",
      options: [],
      editable: true,
      required: false,
      formType: FORM_TYPES.string,
      defaultValue: null,
    },
    suppressHighlighting: {
      name: "suppressHighlighting",
      label: "suppressHighlighting",
      description:
        "When true, no visual change is made when text is pressed down. By default, a gray oval highlights the text on press down.",
      options: [],
      editable: true,
      required: false,
      formType: FORM_TYPES.boolean,
      defaultValue: false,
    },
    textBreakStrategy: {
      name: "textBreakStrategy",
      label: "textBreakStrategy",
      description:
        "Set text break strategy on Android API Level 23+, possible values are simple, highQuality, balanced The default value is highQuality.",
      options: ["simple", "highQuality", "balanced"],
      editable: true,
      required: false,
      formType: FORM_TYPES.array,
      defaultValue: "highQuality",
    },
  },
};
