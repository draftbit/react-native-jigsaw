import React from "react";
import PortalHost from "./components/Portal/PortalHost";
import type { ValidatedTheme, Breakpoints } from "@draftbit/theme";
import { ThemeProvider } from "@draftbit/theme";

type ProviderProps = {
  themes: ValidatedTheme[];
  breakpoints: Breakpoints;
  initialThemeName: string;
  children: React.ReactNode;
};

export default class Provider extends React.Component<ProviderProps> {
  render() {
    return (
      <PortalHost>
        <ThemeProvider
          themes={this.props.themes}
          breakpoints={this.props.breakpoints}
          initialThemeName={this.props.initialThemeName}
        >
          {this.props.children}
        </ThemeProvider>
      </PortalHost>
    );
  }
}
