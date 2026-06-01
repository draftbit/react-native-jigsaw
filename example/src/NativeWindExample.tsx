import React from "react";
import { View, Text } from "react-native";
import {
  AudioPlayer,
  CircularProgress,
  CustomPinInputCell,
  CustomPinInputText,
  DeckSwiper,
  DeckSwiperCard,
  LinearProgress,
  LoadingIndicator,
  LottieAnimation,
  Markdown,
  PinInput,
  Swiper,
  SwiperItem,
  Timer,
  VideoPlayer,
  WebView,
} from "@draftbit/ui";
import { LoadingIndicatorType } from "@draftbit/core/lib/typescript/src/components/LoadingIndicator";
import Section, { Container } from "./Section";

const PROGRESS_VALUE = 65;

const NativeWindExample: React.FC<{ theme?: any }> = () => {
  const [pinValue, setPinValue] = React.useState("");
  const timerRef = React.useRef<any>(null);

  return (
    <Container style={{}}>
      <Section title="AudioPlayer" style={{}}>
        <AudioPlayer
          className="rounded-2xl bg-gray-100 h-12 border-0 w-100"
          source={{
            uri: "https://static.draftbit.com/audio/intro-to-draftbit-audio.mp3",
          }}
        />
      </Section>

      <Section title="CircularProgress" style={{}}>
        <View className="items-center flex-row">
          <CircularProgress className="w-60" value={PROGRESS_VALUE} />
          <CircularProgress
            className="w-40 ml-20"
            color="rgb(99,102,241)"
            trackColor="rgb(224,231,255)"
            value={PROGRESS_VALUE}
          />
        </View>
      </Section>

      <Section
        title="DeckSwiper + DeckSwiperCard"
        style={{ paddingBottom: 30 }}
      >
        <DeckSwiper className="w-100" visibleCardCount={2}>
          <DeckSwiperCard className="bg-red-100 p-10 items-center justify-center rounded-xl">
            <Text className="text-base font-semibold text-red-700">Card 1</Text>
          </DeckSwiperCard>
          <DeckSwiperCard className="bg-blue-100 p-10 items-center justify-center rounded-xl">
            <Text className="text-base font-semibold text-blue-700">
              Card 2
            </Text>
          </DeckSwiperCard>
          <DeckSwiperCard className="bg-green-100 p-10 items-center justify-center rounded-xl">
            <Text className="text-base font-semibold text-green-700">
              Card 3
            </Text>
          </DeckSwiperCard>
        </DeckSwiper>
      </Section>

      <Section title="LinearProgress" style={{}}>
        <LinearProgress className="w-100" value={PROGRESS_VALUE} />
        <LinearProgress
          className="w-100 mt-3"
          color="rgb(99,102,241)"
          trackColor="rgb(224,231,255)"
          thickness={12}
          value={PROGRESS_VALUE}
        />
        <LinearProgress
          className="w-150 mt-10"
          thickness={8}
          trackThickness={8}
          dashWidth={12}
          dashGap={8}
          value={PROGRESS_VALUE}
        />
      </Section>

      <Section title="LoadingIndicator" style={{}}>
        <View className="flex-row">
          <LoadingIndicator
            className="m-2 border-2 p-4"
            type={LoadingIndicatorType.circle}
          />
          <LoadingIndicator className="m-2" type={LoadingIndicatorType.wave} />

          <LoadingIndicator
            className="m-2"
            type={LoadingIndicatorType.bounce}
          />

          <LoadingIndicator className="m-2" type={LoadingIndicatorType.pulse} />
        </View>
      </Section>

      <Section title="LottieAnimation" style={{}}>
        <LottieAnimation
          className="w-48 h-48 border-2"
          source={require("./assets/lottie_animation_example.json")}
        />
      </Section>

      <Section title="Markdown" style={{}}>
        <Markdown className="w-200">
          {
            "## NativeWind\n\nThis is **bold** and _italic_ text styled via `className`.\n\n- Item one\n- Item two\n- Item three"
          }
        </Markdown>
      </Section>

      <Section title="PinInput (default)" style={{}}>
        <PinInput
          className="border-2 w-100"
          value={pinValue}
          onChangeText={setPinValue}
        />
      </Section>

      <Section
        title="PinInput (CustomPinInputCell + CustomPinInputText)"
        style={{}}
      >
        <PinInput
          value={pinValue}
          onChangeText={setPinValue}
          className="w-100"
          renderItem={({ cellValue, isFocused }) => (
            <CustomPinInputCell
              className={`w-14 h-14 mx-1.5 rounded-xl bg-white items-center justify-center ${
                isFocused ? "border-2 border-red-500" : "border border-gray-300"
              }`}
            >
              <CustomPinInputText
                className={`text-xl font-bold ${
                  isFocused ? "text-indigo-500" : "text-gray-800"
                }`}
                isFocused={isFocused}
              >
                {cellValue}
              </CustomPinInputText>
            </CustomPinInputCell>
          )}
        />
      </Section>

      <Section title="Swiper + SwiperItem" style={{}}>
        <Swiper
          keyExtractor={(key) => key}
          className="w-100 h-48"
          vertical={false}
          loop
        >
          <SwiperItem className="items-center justify-center bg-red-100">
            <Text className="text-lg font-semibold text-red-700">Slide 1</Text>
          </SwiperItem>
          <SwiperItem className="items-center justify-center bg-indigo-100">
            <Text className="text-lg font-semibold text-indigo-700">
              Slide 2
            </Text>
          </SwiperItem>
          <SwiperItem className="items-center justify-center bg-green-100">
            <Text className="text-lg font-semibold text-green-700">
              Slide 3
            </Text>
          </SwiperItem>
        </Swiper>
      </Section>

      <Section title="Timer" style={{}}>
        <Timer
          ref={timerRef}
          className="text-5xl text-red-800"
          initialTime={0}
          format="mm:ss"
          countDirection="up"
        />
      </Section>

      <Section title="VideoPlayer" style={{}}>
        <VideoPlayer
          className="w-100 h-56 rounded-xl overflow-hidden"
          source={{
            uri: "http://static.draftbit.com/videos/intro-to-draftbit.mp4",
          }}
          useNativeControls
          resizeMode="cover"
        />
      </Section>

      <Section title="WebView" style={{}}>
        <WebView
          className="w-200 h-100 rounded-xl overflow-hidden"
          source={{ uri: "https://docs.expo.io/" }}
        />
      </Section>
    </Container>
  );
};

export default NativeWindExample;
