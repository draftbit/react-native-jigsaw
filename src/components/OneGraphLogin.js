import * as React from "react";
import { Button, View } from "react-native";
import Icon from "./Icon";
import Config from "./Config";
import OneGraphAuth from "onegraph-auth";

import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

export default class OneGraphLogin extends React.PureComponent {
  static defaultProps = {
    image: Config.avatarImageUrl,
    size: Config.avatarImageSize,
  };

  constructor(props) {
    super();
    const auth = new OneGraphAuth({
      appId: props.appId,
    });

    this.state = { isLoggedIn: false, auth: auth };

    auth.isLoggedIn(props.service).then((isLoggedIn) => {
      this.setState({ isLoggedIn: isLoggedIn });
    });
  }

  render() {
    const { size, service } = this.props;

    const colors = {
      primary: "blue",
      surface: "pink",
      editBorderColor: "green",
    };
    const colorStyles = {
      editBackgroundColor: colors.primary,
      editIconColor: colors.surface,
      editBorderColor: colors.surface,
    };

    return (
      <View>
        <Button
          title={"Log into " + service}
          onPress={async (event) => {
            var auth = this.state.auth;
            await auth.login(service);
            const isLoggedIn = await auth.isLoggedIn(service);
            this.setState({ isLoggedIn: isLoggedIn });
          }}
        />
        <View
          style={{
            position: "absolute",
            top: -3,
            right: -3,
            borderColor: colorStyles.editBorderColor,
            backgroundColor: colorStyles.editBackgroundColor,
            borderRadius: size * (3 / 16),
            padding: size * (3 / 32),
          }}
        >
          <Icon
            name={
              this.state.isLoggedIn
                ? "MaterialIcons/check"
                : "MaterialIcons/cancel"
            }
            color={colorStyles.editIconColor}
            size={size * (3 / 16)}
          />
        </View>
      </View>
    );
  }
}

export const SEED_DATA = {
  name: "OneGraphLogin",
  tag: "OneGraphLogin",
  category: COMPONENT_TYPES.button,
  props: {
    service: {
      label: "Service",
      description: "Service to log in the user with",
      editable: true,
      required: true,
      type: FORM_TYPES.string,
    },
    appId: {
      label: "AppId",
      description: "Your OneGraph appId",
      editable: true,
      required: true,
      type: FORM_TYPES.string,
    },
  },
  layout: {
    width: 80,
    height: 80,
  },
};
