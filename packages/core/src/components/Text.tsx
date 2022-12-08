import * as React from "react";
import { Text as NativeText, I18nManager, TextProps } from "react-native";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";

type Props = {
  theme: Theme;
} & TextProps;

class Text extends React.Component<Props> {
  _root: any;

  state: any = {
    nativeProps: {},
  };

  setNativeProps(args: TextProps) {
    this.state.nativeProps = args || {};
  }

  render() {
    const { style, ...rest } = this.props;
    const writingDirection = I18nManager.isRTL ? "rtl" : "ltr";

    return (
      <NativeText
        {...rest}
        {...this.state.nativeProps}
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
      style={[{ color: theme.colors.primary }, style]}
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
