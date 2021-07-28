import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Provider, DefaultTheme, ScreenContainer } from "@draftbit/ui";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import CircleImageExample from "./CircleImageExample";
import IconExample from "./IconExample";
import ButtonExample from "./ButtonExample";
import RadioButtonExample from "./RadioButtonExample";

import CardExample from "./CardExample";
import CardBlockExample from "./CardBlockExample";
import CardInlineExample from "./CardInlineExample";
// import CardContainerShortImageExample from "./CardContainerShortImageExample";
import CardContainerExample from "./CardContainerExample";
import CardContainerRatingExample from "./CardContainerRatingExample";

import CarouselExample from "./CarouselExample";
import ContainerExample from "./ContainerExample";
// import ControllerExample from "./ControllerExample";

import DatePickerExample from "./DatePickerExample";

import FABExample from "./FABExample";
import ToggleButtonExample from "./ToggleButtonExample";
import FieldSearchBarFullExample from "./FieldSearchBarFullExample";

// import HeaderExample from "./HeaderExample";
import LayoutExample from "./LayoutExample";

import PickerExample from "./PickerExample";

// import ProgressIndicatorExample from "./ProgressIndicatorExample.js";
// import ProgressExample from "./ProgressExample";
// import RowExample from "./RowExample";

import SliderExample from "./SliderExample";
import SwitchExample from "./SwitchExample";
import StepperExample from "./StepperExample";

import TextFieldExample from "./TextFieldExample";
import TextInputExample from "./TextInputExample";
import CheckboxExample from "./CheckboxExample";
import WebViewExample from "./WebViewExample";
import AccordionExample from "./AccordionExample";

import ActionSheetExample from "./ActionSheetExample";

const ROUTES = {
  Layout: LayoutExample,
  Icon: IconExample,
  Button: ButtonExample,
  FAB: FABExample,
  RadioButton: RadioButtonExample,
  ActionSheet: ActionSheetExample,
  Checkbox: CheckboxExample,
  Card: CardExample,
  ToggleButton: ToggleButtonExample,
  Accordion: AccordionExample,
  CardBlock: CardBlockExample,
  CardInline: CardInlineExample,
  CardContainer: CardContainerExample,
  CardContainerRating: CardContainerRatingExample,
  Carousel: CarouselExample,
  Container: ContainerExample,
  CircleImage: CircleImageExample,
  // Controllers: ControllerExample,
  DatePicker: DatePickerExample,
  FieldSearchBarFull: FieldSearchBarFullExample,
  // TODO fix Header (spacing problem, textOverflow ellipses doesn't work on web)
  // Header: HeaderExample,
  Picker: PickerExample,
  // ProgressBar: ProgressExample,
  // ProgressIndicator: ProgressIndicatorExample,
  // TODO fix Row (spacing problem)
  // Row: RowExample,
  // TODO (componentWillReceieveProps insider slider component)
  Slider: SliderExample,
  Switch: SwitchExample,
  Stepper: StepperExample,
  TextField: TextFieldExample,
  TextInput: TextInputExample,
  WebView: WebViewExample,
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
    <ScreenContainer
      hasTopSafeArea={true}
      hasBottomSafeArea={true}
      scrollable={false}
    >
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
      <ScreenContainer scrollable={true} hasSafeArea={false}>
        {children}
      </ScreenContainer>
    </ScreenContainer>
  );
}

function Examples() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="CircleImage"
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
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
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
