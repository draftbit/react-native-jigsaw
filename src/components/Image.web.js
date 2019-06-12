// @flow
import React from "react"
import { Image as NativeImage } from "react-native"
import AspectRatio from "./AspectRatio.web"
import { COMPONENT_TYPES, FORM_TYPES, BORDER_RADIUS_MODE } from "../core/component-types"
import Config from "./Config"

export type Props = { source: string, resizeMode: string }

export default class Image extends React.PureComponent<Props> {
  static defaultProps = {
    source: Config.placeholderImageURL,
    resizeMode: "cover"
  }

  state = {}
  onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height
    })
  }

  render() {
    const { source, style, image, resizeMode, ...props } = this.props
    if (style.aspectRatio) {
      return (
        <AspectRatio onLayout={this.onLayout} ratio={style.aspectRatio}>
          <NativeImage
            style={{ ...style, width: this.state.width, height: this.state.height }}
            source={source}
            resizeMode={resizeMode}
          />
        </AspectRatio>
      )
    }

    return <NativeImage source={source} {...props} />
  }
}
