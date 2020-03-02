import React from "react"
import { ImageBackground as NativeImage } from "react-native"
import AspectRatio from "./AspectRatio.web"
import Config from "./Config"

export default class ImageBackground extends React.PureComponent {
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
