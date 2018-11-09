import React from "react";
import { KeepAwake } from "expo";
import { StatusBar, View, Text } from "react-native";
import { Provider, DefaultTheme, Touchable, Icon } from "@draftbit/ui";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import ButtonExample from "./src/ButtonExample";
import CardBlockExample from "./src/CardBlockExample";
import RowExample from "./src/RowExample";
import TextFieldExample from "./src/TextFieldExample";

const Drawer = createDrawerNavigator({
  Home: () => (
    <Text style={{ alignSelf: "center", marginTop: 30 }}>
      Select an example from the drawer
    </Text>
  ),
  Button: ButtonExample,
  CardBlock: CardBlockExample,
  Row: RowExample,
  TextField: TextFieldExample
});

const App = createStackNavigator(
  { Root: { screen: Drawer } },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Examples",
      headerLeft: (
        <Touchable
          onPress={navigation.toggleDrawer}
          style={{ paddingLeft: 12 }}
        >
          <Icon size={24} name="menu" />
        </Touchable>
      )
    })
  }
);

export default class Example extends React.Component<{}, State> {
  async componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  render() {
    return (
      <Provider theme={DefaultTheme}>
        <App />
        <KeepAwake />
      </Provider>
    );
  }
}
