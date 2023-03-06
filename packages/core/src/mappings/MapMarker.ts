import {
  COMPONENT_TYPES,
  createBoolProp,
  createColorProp,
  createNumberProp,
  createTextProp,
  FORM_TYPES,
  GROUPS,
  PROP_TYPES,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Map Marker",
  tag: "MapMarker",
  packageName: "@draftbit/maps",
  description: "A marker to show inside map view",
  category: COMPONENT_TYPES.map,
  stylesPanelSections: [
    StylesPanelSections.Size,
    StylesPanelSections.Margins,
    StylesPanelSections.Effects,
  ],
  layout: {},
  props: {
    latitude: createNumberProp({
      label: "Latitude",
      description: "The latitude in which the marker is located",
      required: true,
      precision: 6,
      min: -90,
      max: 90,
    }),
    longitude: createNumberProp({
      label: "Longitude",
      description: "The longitude in which the marker is located",
      required: true,
      precision: 6,
      min: -180,
      max: 180,
    }),
    title: createTextProp({
      label: "Title",
      description: "Title to show along with the marker",
      defaultValue: null,
    }),
    description: createTextProp({
      label: "Description",
      description: "Optional description for the marker",
      defaultValue: null,
    }),
    flat: createBoolProp({
      label: "Flat",
      description:
        "Sets whether this marker should be flat against the map (if true) or a billboard facing the camera (if false)",
      group: GROUPS.basic,
      defaultValue: false,
    }),
    pinColor: createColorProp({
      label: "Pin Color",
      description: "Sets the color of the marker",
    }),
    pinImage: {
      group: GROUPS.data,
      label: "Pin image",
      description: "Image to be used instead of the default pin",
      editable: true,
      required: false,
      formType: FORM_TYPES.image,
      propType: PROP_TYPES.ASSET,
    },
  },
};
