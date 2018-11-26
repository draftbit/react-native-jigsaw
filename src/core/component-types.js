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
  aspectRatio: "aspectRatio"
};

export const COMPONENT_TYPES = {
  card: "card",
  carousel: "carousel",
  text: "text",
  button: "button",
  image: "image",
  primitive: "primitive",
  FAB: "FAB",
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
