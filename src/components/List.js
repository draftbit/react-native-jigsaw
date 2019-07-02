import { FlatList } from "react-native"
import { COMPONENT_TYPES } from "../core/component-types"
export default FlatList

export const SEED_DATA = {
  name: "List",
  tag: "FlatList",
  description: "A basic List component",
  category: COMPONENT_TYPES.content,
  supports_list_render: false,
  preview_image_url: "https://res.cloudinary.com/altos/image/upload/draftbit/Jigsaw/List.svg",
  layout: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0
  },
  props: {
    component: {
      label: "Component",
      description: "Component to render",
      editable: true,
      required: true,
      type: FORM_TYPES.component,
      value: null
    },
    horizontal: {
      label: "Horizontal",
      description: "Render list horizontally",
      editable: true,
      required: true,
      type: FORM_TYPES.boolean,
      value: false
    },
    numColumns: {
      label: "Number of columns",
      description: "Number of columns (vertical list only)",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      min: 1,
      max: 4,
      step: 1,
      precision: 0,
      value: null
    },
    numberComponents: {
      label: "Number of components",
      description: "Number of components to render in list",
      editable: true,
      required: true,
      type: FORM_TYPES.number,
      min: 1,
      max: 10,
      step: 1,
      precision: 0,
      value: 3
    }
  }
}
