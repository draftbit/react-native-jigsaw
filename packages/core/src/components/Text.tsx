import * as React from "react";
import { Text as NativeText, I18nManager, TextProps } from "react-native";
import { withTheme } from "../theming";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
} from "@draftbit/types";
import themeT from "../styles/DefaultTheme";

type Props = {
  theme: typeof themeT;
} & TextProps;

class Text extends React.Component<Props> {
  _root: any;

  setNativeProps(args: TextProps) {
    return this._root && this._root.setNativeProps(args);
  }

  render() {
    const { style, ...rest } = this.props;
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
  layout: {
    color: "strong", // This is translated on collector script run by the extractValueAndType function
  },
  props: {
    children: {
      group: GROUPS.data,
      label: "Text",
      description: "Text",
      editable: true,
      required: true,
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: "Double click me to edit 👀",
    },
    accessibilityLabel: {
      group: GROUPS.accessibility,
      name: "accessibilityLabel",
      label: "accessibilityLabel",
      description:
        "Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.",
      editable: false,
      required: false,
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: null,
    },
    accessibilityRole: {
      group: GROUPS.accessibility,
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
      editable: false,
      required: false,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      defaultValue: null,
    },
    accessible: {
      group: GROUPS.accessibility,
      name: "accessible",
      label: "accessible",
      description:
        "When set to true, indicates that the view is an accessibility element. The default value for a Text element is true.See the Accessibility guide for more information.",
      editable: false,
      required: false,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: null,
    },
    adjustsFontSizeToFit: {
      group: GROUPS.advanced,
      name: "adjustsFontSizeToFit",
      label: "adjustsFontSizeToFit",
      description:
        "Specifies whether fonts should be scaled down automatically to fit given style constraints.",
      editable: false,
      required: false,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: null,
    },
    allowFontScaling: {
      group: GROUPS.advanced,
      name: "allowFontScaling",
      label: "allowFontScaling",
      description:
        "Specifies whether fonts should scale to respect Text Size accessibility settings. The default is true.",
      editable: false,
      required: false,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: null,
    },
    dataDetectorType: {
      group: GROUPS.advanced,
      name: "dataDetectorType",
      label: "dataDetectorType",
      description:
        "Determines the types of data converted to clickable URLs in the text element. By default no data types are detected.You can provide only one type.Possible values for dataDetectorType are:\n'phoneNumber'\n'link'\n'email'\n'none'\n'all'\n",
      options: ["phoneNumber", "link", "email", "none", "all"],
      editable: false,
      required: false,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      defaultValue: null,
    },
    disabled: {
      group: GROUPS.basic,
      name: "disabled",
      label: "disabled",
      description:
        "Specifies the disabled state of the text view for testing purposes",
      editable: false,
      required: false,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: null,
    },
    ellipsizeMode: {
      group: GROUPS.basic,
      name: "ellipsizeMode",
      label: "Truncate Text?",
      description:
        'When numberOfLines is set, this prop defines how text will be truncated. numberOfLines must be set in conjunction with this prop.This can be one of the following values:\nhead - The line is displayed so that the end fits in the container and the missing text at the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"\nmiddle - The line is displayed so that the beginning and end fit in the container and the missing text in the middle is indicated by an ellipsis glyph. "ab...yz"\ntail - The line is displayed so that the beginning fits in the container and the missing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."\nclip - Lines are not drawn past the edge of the text container.\nThe default is tail.',
      options: ["head", "middle", "tail", "clip"],
      editable: true,
      required: false,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      defaultValue: null,
    },
    maxFontSizeMultiplier: {
      group: GROUPS.advanced,
      name: "maxFontSizeMultiplier",
      label: "maxFontSizeMultiplier",
      description:
        "Specifies largest possible scale a font can reach when allowFontScaling is enabled. Possible values:\nnull/undefined (default): inherit from the parent node or the global default (0)\n0: no max, ignore parent/global default\n>= 1: sets the maxFontSizeMultiplier of this node to this value\n",
      editable: false,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      defaultValue: null,
    },
    minimumFontScale: {
      group: GROUPS.advanced,
      name: "minimumFontScale",
      label: "minimumFontScale",
      description:
        "Specifies smallest possible scale a font can reach when adjustsFontSizeToFit is enabled. (values 0.01-1.0).",
      editable: false,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      min: 0.01,
      step: 0.01,
      precision: 2,
      max: 1.0,
      defaultValue: null,
    },
    numberOfLines: {
      group: GROUPS.basic,
      name: "numberOfLines",
      label: "Max # of Lines",
      defaultValue: null,
      description:
        "Used to truncate the text with an ellipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number.This prop is commonly used with ellipsizeMode.",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      step: 1,
      precision: 1,
    },
    selectable: {
      group: GROUPS.advanced,
      name: "selectable",
      label: "selectable",
      description:
        "Lets the user select text, to use the native copy and paste functionality.",
      editable: false,
      required: false,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: null,
    },
    selectionColor: {
      group: GROUPS.advanced,
      name: "selectionColor",
      label: "selectionColor",
      description: "The highlight color of the text.",
      editable: false,
      required: false,
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      defaultValue: null,
    },
    suppressHighlighting: {
      group: GROUPS.advanced,
      name: "suppressHighlighting",
      label: "suppressHighlighting",
      description:
        "When true, no visual change is made when text is pressed down. By default, a gray oval highlights the text on press down.",
      editable: false,
      required: false,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: null,
    },
    textBreakStrategy: {
      group: GROUPS.advanced,
      name: "textBreakStrategy",
      label: "textBreakStrategy",
      description:
        "Set text break strategy on Android API Level 23+, possible values are simple, highQuality, balanced The default value is highQuality.",
      options: ["simple", "highQuality", "balanced"],
      editable: false,
      required: false,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      defaultValue: null,
    },
  },
};
