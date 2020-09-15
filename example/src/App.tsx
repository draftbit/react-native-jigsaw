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
import { AppLoading } from "expo";
import * as Font from "expo-font";

import AvatarExample from "./AvatarExample";
import IconExample from "./IconExample";
import ButtonExample from "./ButtonExample";
import RadioButtonExample from "./RadioButtonExample";

import CardBlockExample from "./CardBlockExample";
import CardInlineExample from "./CardInlineExample";
import CardContainerShortImageExample from "./CardContainerShortImageExample";
import CardContainerExample from "./CardContainerExample";
import CardContainerRatingExample from "./CardContainerRatingExample";

import CarouselExample from "./CarouselExample";
import ContainerExample from "./ContainerExample";
import ControllerExample from "./ControllerExample";

import DatePickerExample from "./DatePickerExample";

import FABExample from "./FABExample";
import FieldSearchBarFullExample from "./FieldSearchBarFullExample";

import HeaderExample from "./HeaderExample";

import PickerExample from "./PickerExample";

import ProgressExample from "./ProgressExample";

import RowExample from "./RowExample";

import SliderExample from "./SliderExample";
import SwitchExample from "./SwitchExample";
import StepperExample from "./StepperExample";

import TextFieldExample from "./TextFieldExample";

import ProgressIndicatorExample from "./ProgressIndicatorExample.js";
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const ROUTES = {
  Avatar: AvatarExample,
  Icon: IconExample,
  Button: ButtonExample,
  FAB: FABExample,
  RadioButton: RadioButtonExample,
  CardBlock: CardBlockExample,
  CardInline: CardInlineExample,
  CardContainerShortImage: CardContainerShortImageExample,
  CardContainer: CardContainerExample,
  CardContainerRating: CardContainerRatingExample,
  Carousel: CarouselExample,
  Container: ContainerExample,
  Controllers: ControllerExample,
  DatePicker: DatePickerExample,
  FieldSearchBarFull: FieldSearchBarFullExample,
  // TODO fix Header (spacing problem, textOverflow ellipses doesn't work on web)
  Header: HeaderExample,
  Picker: PickerExample,
  ProgressBar: ProgressExample,
  ProgressIndicator: ProgressIndicatorExample,
  // TODO fix Row (spacing problem)
  Row: RowExample,
  // TODO (componentWillReceieveProps insider slider component)
  Slider: SliderExample,
  Switch: SwitchExample,
  Stepper: StepperExample,
  TextField: TextFieldExample,
};

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function Example({ title, children }) {
  const navigation = useNavigation();
  return (
    <View style={exampleStyles.mainParent}>
      <View style={exampleStyles.headerStyle}>
        <TouchableOpacity
          style={exampleStyles.menuButtonStyle}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Image
            style={exampleStyles.menuButtonImageStyle}
            source={require("../assets/images/hamburger.png")}
          />
        </TouchableOpacity>

        <Text style={[exampleStyles.headerTextStyle]}>{title}</Text>
      </View>

      <ScrollView>{children}</ScrollView>
    </View>
  );
}

let customFonts = {
  "FiraCode": require("../assets/fonts/FiraCode-Bold.otf"),
  "Testing": require("../assets/fonts/Sriracha-Regular.ttf"),
  "Inter-SemiBoldItalic":
    "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
};

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <Provider theme={DefaultTheme}>
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <NavigationContainer>
                <Drawer.Navigator
                  drawerContentOptions={{
                    activeTintColor: "rgba(90, 69, 255, 1)",
                  }}
                  initialRouteName="Avatar"
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
            </SafeAreaView>
          </SafeAreaProvider>
        </Provider>
      );
    } else {
      return <AppLoading />;
    }
  }
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
