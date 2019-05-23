/* @flow */

import * as React from "react"
import { StyleSheet, Text } from "react-native"
import { ScreenContainer, Container, withTheme } from "@draftbit/ui"

class ContainerExample extends React.Component {
  static title = "Container"

  render() {
    const { theme } = this.props

    return (
      <ScreenContainer>
        <Container style={{ paddingVertical: theme.spacing.large }}>
          <Text>Container without theme gutter padding</Text>
        </Container>
        <Container useThemeGutterPadding style={{ paddingVertical: theme.spacing.large }}>
          <Text>Container with theme gutter padding</Text>
        </Container>
        <Container backgroundColor="#ff0000" style={{ paddingVertical: theme.spacing.large }}>
          <Text>Container with background color</Text>
        </Container>
        <Container
          backgroundImage="https://res.cloudinary.com/altos/image/upload/w_200,f_auto,c_scale/draftbit/components/Image.png"
          style={{
            paddingVertical: theme.spacing.large,
            width: 200,
            height: 133
          }}>
          <Text>Container with background image</Text>
        </Container>
        <Container
          backgroundImage="https://res.cloudinary.com/altos/image/upload/w_200,f_auto,c_scale/draftbit/components/Image.png"
          backgroundImageResizeMode="cover"
          style={{
            paddingVertical: theme.spacing.large,
            width: 200,
            height: 200
          }}>
          <Text>Container with background image and resize mode cover</Text>
        </Container>
        <Container
          backgroundImage="https://res.cloudinary.com/altos/image/upload/w_200,f_auto,c_scale/draftbit/components/Image.png"
          backgroundImageResizeMode="contain"
          style={{
            paddingVertical: theme.spacing.large,
            width: 200,
            height: 200
          }}>
          <Text>Container with background image and resize mode contain</Text>
        </Container>
        <Container
          style={{
            paddingVertical: theme.spacing.large,
            borderColor: "#39ff14",
            borderWidth: 1
          }}>
          <Text>Container with borderColor</Text>
        </Container>
      </ScreenContainer>
    )
  }
}

export default withTheme(ContainerExample)
