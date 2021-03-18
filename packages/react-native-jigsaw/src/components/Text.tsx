import * as React from "react";
import {
  Text as NativeText,
  TextStyle,
  StyleProp,
  StyleSheet,
} from "react-native";
import { withTheme } from "../core/theming";
import Theme from "../styles/DefaultTheme";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
} from "../core/component-types";

type Props = React.ComponentProps<typeof NativeText> & {
  style?: StyleProp<TextStyle>;
  /**
   * @optional
   */
  theme: typeof Theme;
};

// @component-group Typography

/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
const Text: React.RefForwardingComponent<{}, Props> = (
  { style, theme, ...rest }: Props,
  ref
) => {
  const root = React.useRef<NativeText | null>(null);

  React.useImperativeHandle(ref, () => ({
    setNativeProps: (args: Object) => root.current?.setNativeProps(args),
  }));

  return (
    <NativeText
      {...rest}
      ref={root}
      style={[
        {
          color: theme.colors.text,
        },
        styles.text,
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "left",
  },
});

export default withTheme(React.forwardRef(Text));

export const SEED_DATA = {
  name: "Text",
  tag: "Text",
  description: "A basic Text component",
  category: COMPONENT_TYPES.basic,
  layout: {
    color: "text",
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
    ellipsizeMode: {
      group: GROUPS.basic,
      name: "ellipsizeMode",
      label: "Truncate Text?",
      description: "Adds ... if the text is too long",
      options: ["head", "middle", "tail", "clip"],
      editable: true,
      required: false,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      defaultValue: null,
    },
    numberOfLines: {
      group: GROUPS.basic,
      name: "numberOfLines",
      label: "Max # of Lines",
      defaultValue: null,
      description: "The max number of lines. Set an ellipsize mode to add ...",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      step: 1,
      precision: 1,
    },
  },
};
