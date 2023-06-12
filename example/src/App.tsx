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
  ImageSourcePropType,
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
import IconExample from "./IconExample";
import ButtonExample from "./ButtonExample";
import RadioButtonExample from "./RadioButtonExample";
import DatePickerExample from "./DatePickerExample";
import LayoutExample from "./LayoutExample";
import MapViewExample from "./MapViewExample";
import MapViewDataDrivenExample from "./MapViewDataDrivenExample";
import PickerExample from "./PickerExample";
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
import SVGExample from "./SVGExample";
import LinearGradientExample from "./LinearGradientExample";
import SurfaceExample from "./SurfaceExample";
import ShadowExample from "./ShadowExample";
import DeckSwiperExample from "./DeckSwiperExample";
import TabViewExample from "./TabViewExample";
import MarkdownExample from "./MarkdownExample";
import BottomSheetExample from "./BottomSheetExample";
import YoutubeExample from "./YoutubeExample";
import TableExample from "./TableExample";
import SwipeableItemExample from "./SwipeableItemExample";
import SectionListExample from "./SectionListExample";
import LinearProgressExample from "./LinearProgressExample";
import CircularProgressExample from "./CircularProgressExample";
import VideoPlayerExample from "./VideoPlayerExample";
import CodeInputExample from "./CodeInputExample";

const ROUTES = {
  AudioPlayer: AudioPlayerExample,
  Layout: LayoutExample,
  Icon: IconExample,
  Button: ButtonExample,
  RadioButton: RadioButtonExample,
  ActionSheet: ActionSheetExample,
  Checkbox: CheckboxExample,
  Accordion: AccordionExample,
  DatePicker: DatePickerExample,
  LinearGradient: LinearGradientExample,
  MapView: MapViewExample,
  MapViewDataDriven: MapViewDataDrivenExample,
  Picker: PickerExample,
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
  Shadow: ShadowExample,
  DeckSwiper: DeckSwiperExample,
  TabView: TabViewExample,
  Markdown: MarkdownExample,
  BottomSheet: BottomSheetExample,
  Youtube: YoutubeExample,
  Table: TableExample,
  SwipeableView: SwipeableItemExample,
  SectionList: SectionListExample,
  LinearProgress: LinearProgressExample,
  CircularProgress: CircularProgressExample,
  VideoPlayer: VideoPlayerExample,
  CodeInput: CodeInputExample,
};

let customFonts = {
  "FiraCode": require("./assets/fonts/FiraCode-Bold.otf"),
  "Testing": require("./assets/fonts/Sriracha-Regular.ttf"),
  "Inter-SemiBoldItalic":
    "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
};

const splashImage = require("./assets/images/splash.png");

const Drawer = createDrawerNavigator();

type ExampleProps = { title: string; children: React.ReactNode };
type SplashScreenProviderProps = { image: ImageSourcePropType };

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
  return (
    <SplashScreenProvider image={splashImage}>
      <Provider theme={DefaultTheme}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <Examples />
        </SafeAreaProvider>
      </Provider>
    </SplashScreenProvider>
  );
}

const SplashScreenProvider: React.FC<
  React.PropsWithChildren<SplashScreenProviderProps>
> = ({ children, image }) => {
  const [isSplashReady, setSplashReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(customFonts);
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
};

const AnimatedSplashScreen: React.FC<
  React.PropsWithChildren<SplashScreenProviderProps>
> = ({ children, image }) => {
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
    } catch (e) {
      console.warn(e);
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
              backgroundColor:
                Constants?.manifest?.splash?.backgroundColor ||
                "rgba(90, 69, 255, 1)",
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: Constants?.manifest?.splash?.resizeMode || "contain",
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
};

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
