import * as React from "react";
import { Text as NativeText, I18nManager, TextProps } from "react-native";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";

type Props = {
  theme: Theme;
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

export const BaseLink = ({
  style,
  theme,
  title,
  ...props
}: any): JSX.Element => {
  return (
    <Text
      hitSlop={8}
      style={[{ color: theme.colors.primary, alignSelf: "baseline" }, style]}
      theme={theme}
      {...props}
    >
      {title}
    </Text>
  );
};

const Link: any = withTheme(BaseLink);
export { Link };

export default withTheme(Text);
