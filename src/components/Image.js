// @flow
import React from "react"
import { Image as NativeImage } from "react-native"
import { COMPONENT_TYPES, FORM_TYPES, BORDER_RADIUS_MODE } from "../core/component-types"
import Config from "./Config"

export type Props = {
  source: string,
  resizeMode: string
}

export default class Image extends React.PureComponent<Props> {
  static defaultProps = {
    source: Config.placeholderImageURL,
    resizeMode: "cover"
  }

  render() {
    const { source, ...props } = this.props
    return <NativeImage source={typeof source === "string" ? { uri: source } : source} {...props} />
  }
}

export const SEED_DATA = {
  name: "Image",
  tag: "Image",
  description: "A basic Image Component",
  type: COMPONENT_TYPES.content,
  supports_list_render: false,
  preview_image_url: "https://res.cloudinary.com/altos/image/upload/draftbit/Jigsaw/Image.png",
  layout: {
    width: "100%",
    height: 250
  },
  props: {
    source: {
      label: "Image Source",
      description: "The source of the image",
      editable: true,
      required: true,
      type: FORM_TYPES.localImage,
      value: null
    },
    resizeMode: {
      label: "Resize Mode",
      description:
        "Determines how to resize the image when the frame doesn't match the raw image dimensions",
      editable: true,
      required: false,
      value: "cover",
      type: FORM_TYPES.flatArray,
      options: ["cover", "contain", "stretch", "repeat", "center"]
    },
    borderRadiusMode: BORDER_RADIUS_MODE
  }
}
