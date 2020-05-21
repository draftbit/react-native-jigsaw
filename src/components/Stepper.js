import * as React from "react";
import { View, Text } from "react-native";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FIELD_NAME } from "../core/component-types";
import IconButton from "./IconButton";
import Config from "./Config";

class Stepper extends React.Component {
  static defaultProps = {
    value: 0,
  };

  state = {
    value: 0,
  };

  handleMinus = () => {
    const { value, onChange } = this.props;
    if (value || value === 0) {
      onChange && onChange(value - 1);
    } else {
      const { value: stateValue } = this.state;
      this.setState({ value: stateValue - 1 });
    }
  };

  handlePlus = () => {
    const { value, onChange } = this.props;
    if (value || value === 0) {
      onChange && onChange(value + 1);
    } else {
      const { value: stateValue } = this.state;
      this.setState({ value: stateValue + 1 });
    }
  };

  render() {
    const {
      value,
      theme: { colors, spacing, typography },
      style,
    } = this.props;

    const { value: stateValue } = this.state;

    return (
      <View style={[{ flexDirection: "row" }, style]}>
        <IconButton
          icon="MaterialIcons/remove"
          onPress={this.handleMinus}
          size={Config.stepperButtonSize}
          color={colors.strong}
          disabled={value ? value === 0 : stateValue === 0}
        />
        <Text
          style={[
            typography.body1,
            {
              textAlign: "center",
              alignSelf: "center",
              color: colors.medium,
              marginHorizontal: spacing.medium,
            },
          ]}
        >
          {value || stateValue}
        </Text>
        <IconButton
          icon="MaterialIcons/add"
          onPress={this.handlePlus}
          size={Config.stepperButtonSize}
          color={colors.strong}
        />
      </View>
    );
  }
}

export default withTheme(Stepper);

export const SEED_DATA = [
  {
    name: "Stepper",
    tag: "Stepper",
    description: "A component used to control the quantity of something",
    category: COMPONENT_TYPES.field,
    preview_image_url: "{CLOUDINARY_URL}/Control_Stepper.png",
    supports_list_render: false,
    props: {
      fieldName: {
        ...FIELD_NAME,
        value: "stepperValue",
      },
    },
    layout: {},
  },
];
