import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

// @ts-ignore
import type { ImageSource } from "react-native/Libraries/Image/ImageSource";

import ScreenContainer from "../components/ScreenContainer";
import Button from "../components/Button";
import { withTheme } from "../core/theming";
import { Theme } from "../types";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
} from "../core/component-types";
import { DataContext } from "../core/DataContext";

type Props = {
  theme: Theme;
  mainImage: ImageSource;
  welcomeText: string;
  navigation: {
    navigate: (screen: string) => void;
  };
  navigateToOnLogin: string;
  navigateToOnSignUp: string;
};

const EmailLoginScreen = (props: Props) => {
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const {
    theme,
    mainImage,
    welcomeText,
    navigation,
    navigateToOnLogin,
    navigateToOnSignUp,
  } = props;

  const { signInWithEmailAndPassword } = React.useContext(DataContext);

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <KeyboardAvoidingView
        style={{ justifyContent: "space-around", flexGrow: 1 }}
        behavior="position"
        enabled={true}
        keyboardVerticalOffset={44}
      >
        <View
          style={{
            paddingLeft: 32,
            paddingRight: 32,
            paddingBottom: 34,
            paddingTop: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {mainImage ? (
            <Image
              style={styles.MainImage}
              resizeMode="contain"
              source={mainImage}
            />
          ) : null}
          <Text
            style={StyleSheet.flatten([
              theme.typography.headline2,
              { color: theme.colors.strong, textAlign: "center" },
            ])}
          >
            {welcomeText}
          </Text>
        </View>

        <View
          style={{
            paddingLeft: 32,
            paddingRight: 32,
            marginBottom: 24,
          }}
        >
          <TextInput
            style={StyleSheet.flatten([
              styles.EmailTextInput,
              {
                borderColor: theme.colors.divider,
                borderRadius: theme.borderRadius,
                color: theme.colors.strong,
                backgroundColor: theme.colors.background,
              },
            ])}
            value={emailInput}
            onChangeText={(email) => setEmailInput(email)}
            placeholder="Email"
            clearTextOnFocus={false}
            enablesReturnKeyAutomatically={true}
            placeholderTextColor={theme.colors.medium}
            clearButtonMode="while-editing"
            returnKeyType="next"
            textContentType="emailAddress"
          />
          <TextInput
            style={StyleSheet.flatten([
              styles.PasswordTextInput,
              {
                color: theme.colors.strong,
                borderColor: theme.colors.divider,
                borderRadius: theme.borderRadius,
                backgroundColor: theme.colors.background,
              },
            ])}
            enablesReturnKeyAutomatically={true}
            clearTextOnFocus={false}
            placeholder="Password"
            onChangeText={(password) => setPasswordInput(password)}
            value={passwordInput}
            placeholderTextColor={theme.colors.medium}
            clearButtonMode="while-editing"
            secureTextEntry={true}
            returnKeyType="done"
            textContentType="password"
          />
          <Button
            style={StyleSheet.flatten([
              styles.LoginButton,
              { borderRadius: theme.borderRadius },
            ])}
            type="solid"
            onPress={() =>
              signInWithEmailAndPassword(emailInput, passwordInput)
                .then(() => navigation.navigate(navigateToOnLogin))
                .catch((err: Error) =>
                  setErrorMessage(err.message || err.toString())
                )
            }
          >
            Log In
          </Button>
        </View>

        {errorMessage ? (
          <View>
            <Text>{errorMessage}</Text>
          </View>
        ) : null}

        {navigateToOnSignUp ? (
          <View style={styles.SignupView}>
            <Text
              style={StyleSheet.flatten([
                theme.typography.subtitle2,
                { color: theme.colors.medium },
              ])}
            >
              {"Don't have an account?"}
            </Text>

            <Button
              style={StyleSheet.flatten([
                styles.SignupButton,
                { borderColor: theme.colors.custom_rgba0_0_0_0 },
              ])}
              type="outline"
              color={theme.colors.primary}
              onPress={() => navigation.navigate(navigateToOnSignUp)}
            >
              Sign Up
            </Button>
          </View>
        ) : null}
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  MainImage: {
    width: 80,
    height: 80,
    marginBottom: 46,
  },
  EmailTextInput: {
    paddingRight: 14,
    paddingLeft: 14,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginTop: 12,
    marginBottom: 12,
    height: 54,
  },
  PasswordTextInput: {
    marginBottom: 12,
    marginTop: 12,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingRight: 14,
    paddingLeft: 14,
    height: 54,
  },
  SignupButton: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    alignSelf: "center",
    alignContent: "center",
    paddingLeft: 12,
    paddingRight: 12,
    borderBottomWidth: 0,
  },
  LoginButton: {
    justifyContent: "center",
    height: 54,
    marginTop: 12,
    alignItems: "center",
  },
  SignupView: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 32,
    paddingBottom: 32,
    alignItems: "center",
  },
});

export default withTheme(EmailLoginScreen);

export const SEED_DATA = {
  name: "Email Login Screen",
  tag: "EmailLoginScreen",
  category: COMPONENT_TYPES.screen,
  props: {
    mainImage: {
      group: GROUPS.data,
      label: "Main Image",
      description: "The source of the main image to show on the screen",
      editable: true,
      required: false,
      formType: FORM_TYPES.localImage,
      propType: PROP_TYPES.ASSET,
      defaultValue: null,
    },
    navigateToOnLogin: {
      group: GROUPS.basic,
      label: "Post-login screen",
      description: "After a successful login, navigate to...",
      editable: true,
      required: false,
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
    },
    navigateToOnSignUp: {
      group: GROUPS.basic,
      label: "Sign-up screen",
      description: "Go to this screen if the user wants to sign up",
      editable: true,
      required: false,
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
    },
    welcomeText: {
      group: GROUPS.basic,
      label: "Welcome Text",
      description: "Displayed at the top of the login page",
      editable: true,
      required: true,
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
    },
  },
};
