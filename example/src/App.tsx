import * as React from "react";
import { View, Text, ScrollView } from "react-native";
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

import OneGraphLoginExample from "./OneGraphLoginExample";

import PickerExample from "./PickerExample";

import ProgressExample from "./ProgressExample";

import RowExample from "./RowExample";

import SliderExample from "./SliderExample";
import SwitchExample from "./SwitchExample";
import StepperExample from "./StepperExample";

import TextFieldExample from "./TextFieldExample";

import ProgressIndicatorExample from "./ProgressIndicatorExample.js";

const ROUTES = {
  OneGraphLogin: OneGraphLoginExample,
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

function Example({ title, children }) {
  return (
    <View style={{ marginBottom: 24 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontFamily: "Testing",
          fontSize: 28,
          backgroundColor: "rgba(250, 250, 0, 0.2)",
          marginBottom: 8,
          paddingVertical: 4,
        }}
      >
        {title}
      </Text>
      <View>{children}</View>
    </View>
  );
}

let customFonts = {
  "FiraCode": require("../assets/fonts/FiraCode-Bold.otf"),
  "Testing": require("../assets/fonts/Sriracha-Regular.ttf"),
  "Inter-SemiBoldItalic":
    "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
};

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
          <ScrollView style={{ flex: 1 }}>
            {Object.entries(ROUTES).map(([key, Screen]) => {
              return (
                <Example key={key} title={key}>
                  <Screen />
                </Example>
              );
            })}
          </ScrollView>
        </Provider>
      );
    } else {
      return <AppLoading />;
    }
  }
}
