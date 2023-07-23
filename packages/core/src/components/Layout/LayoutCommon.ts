import { ViewProps, ViewStyle } from "react-native";

/**
 * Old and deprecated layout components of the same names had props that have since been removed
 * This maintains correct rendering when using the older/deprecated props as to not break existing usage
 * (See: deprecared-components/Layout)
 *
 * These deprecated props are not exposed in the component type to discourage their usage
 */

interface BackwardsCompatibleProps {
  width?: number;
  height?: number;
  bgColor?: string;
}

export function convertBackwardCompatiblePropsToStyle(
  props: BackwardsCompatibleProps & ViewProps
): ViewStyle {
  return {
    width: props.width,
    height: props.height,
    backgroundColor: props.bgColor,
  };
}
