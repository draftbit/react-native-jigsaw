import * as React from "react";
import { ThemeProvider } from "./theming";
import PortalHost from "./components/Portal/PortalHost";
import { Theme } from "@draftbit/types";

type Props = {
  children: React.ReactNode;
  theme?: Theme;
};

export default class Provider extends React.Component<Props> {
  render() {
    return (
      <PortalHost>
        {/* @ts-ignore */}
        <ThemeProvider theme={this.props.theme}>
          {this.props.children}
        </ThemeProvider>
      </PortalHost>
    );
  }
}
