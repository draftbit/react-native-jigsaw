import React from "react"
import { Provider, DefaultTheme } from "@draftbit/ui"
import AppNavigator from "./AppNavigator"

export default class Example extends React.Component {
  render() {
    return (
      <Provider theme={DefaultTheme}>
        <AppNavigator />
      </Provider>
    )
  }
}
