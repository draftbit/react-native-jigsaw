import {
  COMPONENT_TYPES,
  createBoolProp,
  createColorProp,
  createNumberProp,
  createTextProp,
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Map View",
  tag: "MapView",
  packageName: "@draftbit/maps",
  description: "A map view",
  category: COMPONENT_TYPES.media,
  layout: {
    height: "100%",
    width: "100%",
  },
  props: {
    provider: {
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      editable: true,
      group: GROUPS.basic,
      label: "Provider",
      description: "The maps provider",
      required: false,
      defaultValue: null,
      options: ["google"],
    },
    latitude: createNumberProp({
      label: "Initial Latitude",
      description: "The longitude for the map's initial region",
      required: false,
      precision: 6,
      min: -90,
      max: 90,
      defaultValue: 37.40241,
    }),
    longitude: createNumberProp({
      label: "Initial Longitude",
      description: "The longitude for the map's initial region",
      required: false,
      precision: 6,
      min: -180,
      max: 180,
      defaultValue: -122.12125,
    }),
    latitudeDelta: createNumberProp({
      label: "Init Latitude Delta",
      description: "The latitude delta for the map's initial region",
      required: false,
      precision: 4,
      defaultValue: 1,
      group: GROUPS.basic,
    }),
    longitudeDelta: createNumberProp({
      label: "Init Longitude Delta",
      description: "The longitude delta for the map's initial region",
      required: false,
      precision: 4,
      defaultValue: 1,
      group: GROUPS.basic,
    }),
    zoom: createNumberProp({
      label: "Initial Zoom (Web)",
      description: "The initial zoom of the map",
      required: true,
      precision: 0,
      step: 1,
      defaultValue: 8,
      group: GROUPS.basic,
    }),
    mapType: {
      label: "Map Type",
      description: "The type of map to show",
      group: GROUPS.basic,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      required: false,
      defaultValue: null,
      options: [
        "standard",
        "satellite",
        "hybrid",
        "terrain",
        "none",
        "mutedStandard",
      ],
    },
    zoomEnabled: createBoolProp({
      label: "Zoom Enabled",
      description: "Whether zooming is enabled (native only)",
      group: GROUPS.basic,
      required: false,
      defaultValue: true,
    }),
    showsCompass: createBoolProp({
      label: "Shows Compass",
      description: "Whether compass is shown",
      group: GROUPS.basic,
      required: false,
      defaultValue: false,
    }),
    rotateEnabled: createBoolProp({
      label: "Rotate Enabled",
      description: "Whether rotating the map is enabled",
      group: GROUPS.basic,
      required: false,
      defaultValue: true,
    }),
    scrollEnabled: createBoolProp({
      label: "Scroll Enabled",
      description: "Whether scrolling the map view is enabled",
      group: GROUPS.basic,
      required: false,
      defaultValue: true,
    }),
    loadingEnabled: createBoolProp({
      label: "Loading Enabled",
      description:
        "If true a loading indicator will show while the map is loading",
      group: GROUPS.basic,
      required: false,
      defaultValue: true,
    }),
    loadingIndicatorColor: createColorProp({
      label: "Loading Indicator Color",
      description: "Color of the loading indicator",
    }),
    loadingBackgroundColor: createColorProp({
      label: "Loading BG Color",
      description: "Color of the background to show while the map is loading",
    }),
    apiKey: createTextProp({
      label: "API Key (PWA only)",
      description: "Your API Key",
      required: false,
      defaultValue: null,
      group: GROUPS.basic,
    }),
  },
};
