export const FORM_TYPES = {
  string: "string",
  boolean: "boolean",
  number: "number",
  select: "select",
  color: "color",
  typeStyle: "typeStyle",
  component: "component",
  geolocation: "geolocation",
  localImage: "localImage",
  remoteImage: "remoteImage",
  icon: "icon",
  style: "style",
  function: "function",
  array: "array",
  flatArray: "flatArray",
  aspectRatio: "aspectRatio",
  date: "date",
  component: "component",
  borderRadiusMode: "borderRadiusMode"
};

export const COMPONENT_TYPES = {
  card: "card",
  carousel: "carousel",
  header: "header",
  button: "button",
  image: "image",
  primitive: "primitive",
  FAB: "FAB",
  field: "field",
  formControl: "formControl",
  row: "row",
  map: "map"
};

export const ELEVATION_TYPE = {
  label: "Elevation",
  description: "Elevation of the component. A number 0-3.",
  type: FORM_TYPES.number,
  value: 2,
  min: 0,
  max: 3,
  step: 1,
  precision: 0,
  editable: true
};

export const BORDER_RADIUS_MODE = {
  label: "Border radius",
  description:
    "Border radius of the element - either None, Global (using theme global border radius), or Round (100%)",
  type: FORM_TYPES.borderRadiusMode,
  value: null,
  editable: true,
  required: true
};
