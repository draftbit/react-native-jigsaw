import "react-native-gesture-handler";
import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Provider, DefaultTheme } from "@draftbit/ui";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import CircleImageExample from "./CircleImageExample";
import IconExample from "./IconExample";
import ButtonExample from "./ButtonExample";
import RadioButtonExample from "./RadioButtonExample";
import RowsExample from "./RowsExample";

import CardInlineExample from "./CardInlineExample";
import CardExample from "./CardExample";
import CardWithRatingExample from "./CardWithRatingExample";

import CarouselExample from "./CarouselExample";
import ContainerExample from "./ContainerExample";

import DatePickerExample from "./DatePickerExample";

import FABExample from "./FABExample";
import SearchbarExample from "./SearchbarExample";

import HeaderExample from "./HeaderExample";
import LayoutExample from "./LayoutExample";

import PickerExample from "./PickerExample";

import ProgressExample from "./ProgressExample";

import RowExample from "./RowExample";

import TextFieldExample from "./TextFieldExample";

import ProgressIndicatorExample from "./ProgressIndicatorExample.js";
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const ROUTES = {
  "Rows": RowsExample,
  "Layout": LayoutExample,
  "CircleImage": CircleImageExample,
  "Icon": IconExample,
  "Button": ButtonExample,
  "FAB": FABExample,
  "RadioButton": RadioButtonExample,
  "Card": CardExample,
  "CardInline": CardInlineExample,
  "Card with Rating": CardWithRatingExample,
  "Carousel": CarouselExample,
  "Container": ContainerExample,
  "DatePicker": DatePickerExample,
  "Searchbar": SearchbarExample,
  // TODO fix Header (spacing problem, textOverflow ellipses doesn't work on web)
  "Header": HeaderExample,
  "Picker": PickerExample,
  "ProgressBar": ProgressExample,
  "ProgressIndicator": ProgressIndicatorExample,
  // TODO fix Row (spacing problem)
  "Row": RowExample,
  "TextField": TextFieldExample,
};

let customFonts = {
  "FiraCode": require("./assets/fonts/FiraCode-Bold.otf"),
  "Testing": require("./assets/fonts/Sriracha-Regular.ttf"),
  "Inter-SemiBoldItalic":
    "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
};

const Drawer = createDrawerNavigator();

function Example({ title, children }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView insets={["top", "bottom"]} style={exampleStyles.mainParent}>
      <View style={exampleStyles.headerStyle}>
        <TouchableOpacity
          style={exampleStyles.menuButtonStyle}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Image
            style={exampleStyles.menuButtonImageStyle}
            source={require("./assets/images/hamburger.png")}
          />
        </TouchableOpacity>

        <Text style={[exampleStyles.headerTextStyle]}>{title}</Text>
      </View>

      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
}

function Examples() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Rows"
        drawerContentOptions={{
          activeTintColor: "rgba(90, 69, 255, 1)",
        }}
      >
        {Object.entries(ROUTES).map(([key, Screen]) => {
          return (
            <Drawer.Screen key={key} name={key}>
              {() => (
                <Example title={key}>
                  <Screen />
                </Example>
              )}
            </Drawer.Screen>
          );
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [loaded] = Font.useFonts(customFonts);

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <Provider theme={DefaultTheme}>
      <SafeAreaProvider>
        <Examples />
      </SafeAreaProvider>
    </Provider>
  );
}

const exampleStyles = StyleSheet.create({
  mainParent: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(251, 252, 253, 1)",
  },
  headerStyle: {
    flexDirection: "row",
    backgroundColor: "rgba(90, 69, 255, 1)",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "10%",
    maxHeight: 60,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  menuButtonStyle: {
    flex: 0.2,
    alignItems: "center",
  },
  menuButtonImageStyle: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    tintColor: "white",
  },
  headerTextStyle: {
    flex: 1,
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    marginTop: 5,
    marginStart: "2%",
    marginBottom: 8,
    paddingVertical: 4,
  },
  scrollViewStyle: {
    paddingBottom: 20,
  },
});
