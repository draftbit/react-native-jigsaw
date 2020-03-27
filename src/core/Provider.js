/* eslint-disable react/no-unused-prop-types */

import * as React from "react"
import { ThemeProvider } from "./theming"
import Portal from "../components/Portal/Portal"

export default class Provider extends React.Component {
  render() {
    return (
      <Portal.Host>
        <ThemeProvider theme={this.props.theme}>{this.props.children}</ThemeProvider>
      </Portal.Host>
    )
  }
}
