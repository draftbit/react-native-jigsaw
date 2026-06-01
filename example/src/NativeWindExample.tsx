import React from "react";
import { View, Text } from "react-native";
import {
  AudioPlayer,
  CircularProgress,
  CustomPinInputCell,
  CustomPinInputText,
  DeckSwiper,
  DeckSwiperCard,
  KeyboardAvoidingView,
  LinearProgress,
  LoadingIndicator,
  LottieAnimation,
  Markdown,
  PinInput,
  Shadow,
  Swiper,
  SwiperItem,
  Timer,
  VideoPlayer,
  WebView,
  YoutubePlayer,
  TextField,
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
          className="rounded-2xl bg-gray-100 h-12 border-0"
          source={{
            uri: "https://static.draftbit.com/audio/intro-to-draftbit-audio.mp3",
          }}
        />
      </Section>

      <Section title="CircularProgress" style={{}}>
        <View className="items-center">
          <CircularProgress className="w-60" value={PROGRESS_VALUE} />
          <CircularProgress
            className="w-40 mt-20"
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
        <DeckSwiper className="w-full" visibleCardCount={2}>
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

      <Section title="KeyboardAvoidingView" style={{}}>
        <KeyboardAvoidingView className="w-full" behavior="height">
          <TextField
            className="w-full"
            placeholder="Type here (keyboard avoiding)..."
            type="solid"
          />
        </KeyboardAvoidingView>
      </Section>

      <Section title="LinearProgress" style={{}}>
        <LinearProgress className="w-full" value={PROGRESS_VALUE} />
        <LinearProgress
          className="w-full mt-3"
          color="rgb(99,102,241)"
          trackColor="rgb(224,231,255)"
          thickness={12}
          value={PROGRESS_VALUE}
        />
        <LinearProgress
          className="w-full mt-3"
          thickness={8}
          trackThickness={8}
          dashWidth={12}
          dashGap={8}
          value={PROGRESS_VALUE}
        />
      </Section>

      <Section title="LoadingIndicator" style={{}}>
        <View className="flex-row justify-around">
          <View className="items-center gap-1">
            <LoadingIndicator
              className="m-2"
              type={LoadingIndicatorType.circle}
            />
            <Text className="text-xs text-gray-500">circle</Text>
          </View>
          <View className="items-center gap-1">
            <LoadingIndicator
              className="m-2"
              type={LoadingIndicatorType.wave}
            />
            <Text className="text-xs text-gray-500">wave</Text>
          </View>
          <View className="items-center gap-1">
            <LoadingIndicator
              className="m-2"
              type={LoadingIndicatorType.bounce}
            />
            <Text className="text-xs text-gray-500">bounce</Text>
          </View>
          <View className="items-center gap-1">
            <LoadingIndicator
              className="m-2"
              type={LoadingIndicatorType.pulse}
            />
            <Text className="text-xs text-gray-500">pulse</Text>
          </View>
        </View>
      </Section>

      <Section title="LottieAnimation" style={{}}>
        <LottieAnimation
          className="w-48 h-48 self-center"
          source={require("./assets/lottie_animation_example.json")}
        />
      </Section>

      <Section title="Markdown" style={{}}>
        <Markdown className="w-full">
          {
            "## NativeWind\n\nThis is **bold** and _italic_ text styled via `className`.\n\n- Item one\n- Item two\n- Item three"
          }
        </Markdown>
      </Section>

      <Section title="PinInput (default)" style={{}}>
        <PinInput
          className="self-center"
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
          renderItem={({ cellValue, isFocused }) => (
            <CustomPinInputCell
              className={`w-14 h-14 mx-1.5 rounded-xl bg-white items-center justify-center ${
                isFocused
                  ? "border-2 border-indigo-500"
                  : "border border-gray-300"
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

      <Section title="Shadow" style={{ alignItems: "center" }}>
        <Shadow>
          <View className="px-16 py-10 bg-white rounded-xl items-center justify-center">
            <Text className="text-base font-medium text-gray-700">
              NativeWind Shadow
            </Text>
          </View>
        </Shadow>
      </Section>

      <Section title="Swiper + SwiperItem" style={{}}>
        <Swiper className="w-full h-48" vertical={false} loop>
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
        <View className="items-center gap-4">
          <Timer
            ref={timerRef}
            className="text-5xl font-bold text-gray-800"
            initialTime={0}
            format="mm:ss"
            countDirection="up"
          />
          <View className="flex-row gap-3">
            <Text
              className="px-4 py-2 bg-indigo-500 text-white rounded-lg font-medium"
              onPress={() => timerRef.current?.start()}
            >
              Start
            </Text>
            <Text
              className="px-4 py-2 bg-gray-400 text-white rounded-lg font-medium"
              onPress={() => timerRef.current?.stop()}
            >
              Stop
            </Text>
            <Text
              className="px-4 py-2 bg-red-400 text-white rounded-lg font-medium"
              onPress={() => timerRef.current?.reset()}
            >
              Reset
            </Text>
          </View>
        </View>
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
          className="w-full h-64 rounded-xl overflow-hidden"
          source={{ uri: "https://docs.expo.io/" }}
        />
      </Section>

      <Section title="YoutubePlayer" style={{}}>
        <YoutubePlayer
          className="w-full"
          videoId="nwMUpDESXrI"
          style={{ height: 220 }}
        />
      </Section>
    </Container>
  );
};

export default NativeWindExample;
