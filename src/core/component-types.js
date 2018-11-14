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
  listItem: "list_item",
  carousel: "carousel",
  grid: "grid",
  text: "text",
  icon: "icon",
  list: "list",
  button: "button",
  image: "image",
  primitive: "primitive",
  navigation: "navigation",
  FAB: "FAB",
  row: "row"
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
