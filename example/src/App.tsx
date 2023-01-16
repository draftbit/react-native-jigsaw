import { Asset } from "expo-asset";
import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Animated,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

import { Provider, DefaultTheme, ScreenContainer } from "@draftbit/ui";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import * as Font from "expo-font";

import AudioPlayerExample from "./AudioPlayerExample";
import CircleImageExample from "./CircleImageExample";
import IconExample from "./IconExample";
import BannerExample from "./BannerExample";
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
import FieldSearchBarFullExample from "./FieldSearchBarFullExample";

// import HeaderExample from "./HeaderExample";
import LayoutExample from "./LayoutExample";

import MapViewExample from "./MapViewExample";
import MapViewDataDrivenExample from "./MapViewDataDrivenExample";

import PickerExample from "./PickerExample";

// import ProgressIndicatorExample from "./ProgressIndicatorExample.js";
// import ProgressExample from "./ProgressExample";
// import RowExample from "./RowExample";

import SliderExample from "./SliderExample";
import SwitchExample from "./SwitchExample";
import StepperExample from "./StepperExample";

import TextFieldExample from "./TextFieldExample";
import TextInputExample from "./TextInputExample";
import NumberInputExample from "./NumberInputExample";
import CheckboxExample from "./CheckboxExample";
import WebViewExample from "./WebViewExample";
import AccordionExample from "./AccordionExample";

import ActionSheetExample from "./ActionSheetExample";
import StarRatingExample from "./StarRatingExample";

import SwiperExample from "./SwiperExample";
import TableExample from "./TableExample";
import SVGExample from "./SvgExample";

import LinearGradientExample from "./LinearGradientExample";

import SurfaceExample from "./SurfaceExample";

const ROUTES = {
  AudioPlayer: AudioPlayerExample,
  Layout: LayoutExample,
  Icon: IconExample,
  Banner: BannerExample,
  Button: ButtonExample,
  FAB: FABExample,
  RadioButton: RadioButtonExample,
  ActionSheet: ActionSheetExample,
  Checkbox: CheckboxExample,
  Card: CardExample,
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
  LinearGradient: LinearGradientExample,
  MapView: MapViewExample,
  MapViewDataDriven: MapViewDataDrivenExample,
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
  StarRating: StarRatingExample,
  Surface: SurfaceExample,
  Swiper: SwiperExample,
  SVG: SVGExample,
  TextField: TextFieldExample,
  TextInput: TextInputExample,
  NumberInput: NumberInputExample,
  WebView: WebViewExample,
  Table: TableExample,
};

let customFonts = {
  "FiraCode": require("./assets/fonts/FiraCode-Bold.otf"),
  "Testing": require("./assets/fonts/Sriracha-Regular.ttf"),
  "Inter-SemiBoldItalic":
    "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
};

const Drawer = createDrawerNavigator();

type ExampleProps = { title: string; children: React.ReactNode };

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
  return (
    <SplashScreenProvider image={{ uri: Constants.manifest.splash.image }}>
      <Provider theme={DefaultTheme}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <Examples />
        </SafeAreaProvider>
      </Provider>
    </SplashScreenProvider>
  );
}

function SplashScreenProvider({ children, image }) {
  const [isSplashReady, setSplashReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any api calls you need to do here
        await Font.loadAsync(customFonts);
        await Asset.fromURI(image.uri).downloadAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setSplashReady(true);
      }
    }

    prepare();
  }, [image]);

  if (!isSplashReady) {
    return null;
  }

  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
}

function AnimatedSplashScreen({ children, image }) {
  const animation = useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady, animation]);

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
      // Load stuff
      await Promise.all([]);
    } catch (e) {
      // handle errors
    } finally {
      setAppReady(true);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Constants.manifest.splash.backgroundColor,
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: Constants.manifest.splash.resizeMode || "contain",
              transform: [
                {
                  scale: animation,
                },
              ],
            }}
            source={image}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}

function Example({ title, children }: ExampleProps) {
  const navigation = useNavigation();

  return (
    <ScreenContainer
      hasSafeArea={true}
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
        initialRouteName="Layout"
        drawerContentOptions={{
          activeTintColor: "rgba(90, 69, 255, 1)",
        }}
      >
        {Object.entries(ROUTES).map(([key, Screen]) => {
          return (
            <Drawer.Screen key={key} name={key}>
              {() => (
                <Example title={key}>
                  <Screen theme={{}} />
                </Example>
              )}
            </Drawer.Screen>
          );
        })}
      </Drawer.Navigator>
    </NavigationContainer>
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
