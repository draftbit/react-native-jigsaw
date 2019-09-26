import React from "react"
import { View, Text } from "react-native"
import MapView from "react-native-maps"
import { withTheme } from "../core/theming"
import type { Theme } from "../types"
import { COMPONENT_TYPES, FORM_TYPES, BORDER_RADIUS_MODE } from "../core/component-types"

export type MapSimpleProps = {
  aspectRatio?: number,
  interactionDisabled?: boolean,
  initialLatitude: number,
  initialLongitude: number,
  initialLatitudeDelta: number,
  initialLongitudeDelta: number,
  pinColor: string,
  markers?: Array<{
    title?: string,
    description?: string,
    latitude: number,
    longitude: number
  }>,
  style: any,
  theme: Theme
}

class MapSimple extends React.PureComponent<MapSimpleProps> {
  static defaultProps = {
    aspectRatio: 1,
    markers: []
  }

  render() {
    const {
      aspectRatio,
      initialLatitude,
      initialLongitude,
      initialLatitudeDelta,
      initialLongitudeDelta,
      markers,
      style,
      pinColor,
      interactionDisabled,
      theme: { borderRadius, colors }
    } = this.props

    return (
      <MapView
        initialRegion={{
          latitude: initialLatitude,
          longitude: initialLongitude,
          latitudeDelta: initialLatitudeDelta,
          longitudeDelta: initialLongitudeDelta
        }}
        pitchEnabled={!interactionDisabled}
        rotateEnabled={!interactionDisabled}
        scrollEnabled={!interactionDisabled}
        zoomEnabled={!interactionDisabled}
        style={[
          {
            width: "100%",
            aspectRatio
          },
          style
        ]}>
        {markers.map((m, i) => (
          <MapView.Marker
            coordinate={{
              latitude: m.latitude,
              longitude: m.longitude
            }}
            title={m.title}
            description={m.description}
            pinColor={pinColor || colors.primary}
            key={i}
          />
        ))}
      </MapView>
    )
  }
}

export default withTheme(MapSimple)

export const SEED_DATA = {
  name: "Map",
  tag: "MapSimple",
  description: "A map, with optional markers",
  category: COMPONENT_TYPES.blocks,
  preview_image_url: "{CLOUDINARY_URL}/Map_Simple.png",
  supports_list_render: false,
  layout: {},
  props: {
    initialLatitude: {
      label: "Initial latitude",
      description: "The latitude of the location to center the map on initially",
      type: FORM_TYPES.number,
      min: -90,
      max: 90,
      step: 1,
      precision: 6,
      value: 37.402184,
      required: true,
      editable: true
    },
    initialLongitude: {
      label: "Initial longitude",
      description: "The longitude of the location to center the map on initially",
      type: FORM_TYPES.number,
      min: -180,
      max: 180,
      step: 1,
      precision: 6,
      value: -122.121264,
      required: true,
      editable: true
    },
    initialLatitudeDelta: {
      label: "Initial latitude delta",
      description: "The amount of latitude to display on the map initially (the horizontal zoom)",
      type: FORM_TYPES.number,
      min: 0.0001,
      max: 100,
      step: 1,
      precision: 4,
      value: 0.2,
      required: true,
      editable: true
    },
    initialLongitudeDelta: {
      label: "Initial longitude delta",
      description: "The amount of longitude to display on the map initially (the vertical zoom)",
      type: FORM_TYPES.number,
      min: 0.0001,
      max: 100,
      step: 1,
      precision: 4,
      value: 0.2,
      required: true,
      editable: true
    },
    aspectRatio: {
      label: "Aspect ratio",
      description: "Aspect ratio of the map",
      type: FORM_TYPES.aspectRatio,
      value: 1,
      editable: true,
      required: true
    },
    interactionDisabled: {
      label: "Disable Interaciton",
      description: "Prevent users from dragging or zooming on the map",
      type: FORM_TYPES.boolean,
      value: false,
      editable: true,
      required: false
    },
    markers: {
      label: "Markers",
      description:
        "An array of marker objects, containing required latitude and longitdue, and optional title and description",
      type: FORM_TYPES.array,
      value: null,
      required: false,
      editable: true
    },
    borderRadiusMode: BORDER_RADIUS_MODE
  },
  layout: {}
}
