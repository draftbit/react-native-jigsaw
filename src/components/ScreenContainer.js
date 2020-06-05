import * as React from "react";
import { StyleSheet, ScrollView, View, SafeAreaView } from "react-native";
import { withTheme } from "../core/theming";
import Config from "./Config";

class ScreenContainer extends React.Component {
  renderScrollableSafeAreaView(themeStyles) {
    const { children, style } = this.props;
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: themeStyles.backgroundColor,
            paddingTop: Config.topSafeAreaViewHeight,
          },
        ]}
      >
        <ScrollView
          style={themeStyles}
          contentContainerStyle={[
            {
              flexGrow: 1,
            },
            style,
          ]}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  renderSafeAreaView(themeStyles) {
    const { children, style } = this.props;
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: themeStyles.backgroundColor,
            paddingTop: Config.topSafeAreaViewHeight,
          },
        ]}
      >
        <View style={[styles.container, themeStyles, style]}>{children}</View>
      </SafeAreaView>
    );
  }

  renderScrollView(themeStyles) {
    const { children, style } = this.props;
    return (
      <ScrollView
        style={[themeStyles]}
        contentContainerStyle={[
          {
            flexGrow: 1,
          },
          style,
        ]}
      >
        {children}
      </ScrollView>
    );
  }

  renderView(themeStyles) {
    const { children, style } = this.props;
    return (
      <View style={[styles.container, themeStyles, style]}>{children}</View>
    );
  }

  render() {
    const { theme, hasSafeArea, scrollable } = this.props;

    const themeStyles = {
      backgroundColor: theme.colors.background,
    };

    if (scrollable && hasSafeArea) {
      return this.renderScrollableSafeAreaView(themeStyles);
    }

    if (hasSafeArea) {
      return this.renderSafeAreaView(themeStyles);
    }

    if (scrollable) {
      return this.renderScrollView(themeStyles);
    }

    return this.renderView(themeStyles);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withTheme(ScreenContainer);
