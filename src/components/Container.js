import * as React from "react";
import { View } from "react-native";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES } from "../core/component-types";

class Container extends React.Component {
  render() {
    const {
      theme: { spacing },
      style,
      children
    } = this.props;

    return (
      <View style={[{ paddingHorizontal: spacing.gutters }, style]}>
        {children}
      </View>
    );
  }
}

export default withTheme(Container);

export const SEED_DATA = {
  name: "Container",
  tag: "Container",
  description: "A container component with gutter padding",
  type: COMPONENT_TYPES.primitive,
  supports_list_render: false,
  layout: {
    width: 375,
    height: 100
  },
  props: {}
};
