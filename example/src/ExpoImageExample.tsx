import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ExpoImage, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

interface WrapperProps {
  label: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ label, children }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.boxLabel}>
        <Text>{label}</Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

const base64BlackImage =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR4hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

const ExpoImageExample: React.FC = () => {
  return (
    <Container style={{}}>
      <Section title="Image Examples" style={{}}>
        <View style={{ flexDirection: "row" }}>
          <Wrapper label="Basic remote image">
            <ExpoImage
              source={{
                uri: "https://picsum.photos/1100",
              }}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </Wrapper>
          <Wrapper label="Local image">
            <ExpoImage
              source={require("./assets/images/hamburger.png")}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </Wrapper>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Wrapper label="Content fit: contain">
            <ExpoImage
              source={{
                uri: "https://picsum.photos/1300",
              }}
              contentFit="contain"
              style={{
                width: 200,
                height: 200,
                backgroundColor: "#f0f0f0",
              }}
            />
          </Wrapper>
          <Wrapper label="With blur hash">
            <ExpoImage
              source={{
                uri: "https://picsum.photos/seed/696/3000/2000",
              }}
              blurhash="LEHLk~WB2yk8pyo0adR*.7kCMdnj"
              style={{
                width: 200,
                height: 200,
              }}
            />
          </Wrapper>
        </View>
        <Wrapper label="Base64 Image">
          <ExpoImage
            source={{ uri: base64BlackImage }}
            style={{ width: 200, height: 200 }}
          />
          <ExpoImage
            source={base64BlackImage}
            style={{ width: 200, height: 200 }}
          />
        </Wrapper>
      </Section>
      <Section title="SVG Image" style={styles.wrapper}>
        <Wrapper label="Remote SVG Image">
          <ExpoImage
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/3/30/Vector-based_example.svg",
            }}
            style={{
              width: 200,
              height: 200,
            }}
          />
        </Wrapper>
        <Wrapper label="Local SVG Image">
          <ExpoImage
            source={require("./assets/images/example.svg")}
            style={{
              width: 200,
              height: 200,
            }}
          />
        </Wrapper>
      </Section>
      <Section title="Transition Effects" style={{}}>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Wrapper label="Cross Dissolve - Ease In Out">
            <ExpoImage
              source={{ uri: "https://picsum.photos/1400" }}
              transitionDuration={3000}
              transitionEffect="cross-dissolve"
              transitionTiming="ease-in-out"
              style={{ width: 150, height: 150 }}
            />
          </Wrapper>
          <Wrapper label="Flip from Top - Ease Out">
            <ExpoImage
              source={{ uri: "https://picsum.photos/1500" }}
              transitionDuration={3000}
              transitionEffect="flip-from-top"
              transitionTiming="ease-out"
              style={{ width: 150, height: 150 }}
            />
          </Wrapper>
        </View>
      </Section>
      <Section title="Transition Timing" style={{}}>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Wrapper label="Curl Up - Linear">
            <ExpoImage
              source={{ uri: "https://picsum.photos/1600" }}
              transitionDuration={3000}
              transitionEffect="curl-up"
              transitionTiming="linear"
              style={{ width: 150, height: 150 }}
            />
          </Wrapper>
          <Wrapper label="Cross Dissolve - Ease In Out">
            <ExpoImage
              source={{ uri: "https://picsum.photos/1700" }}
              transitionDuration={3000}
              transitionEffect="cross-dissolve"
              transitionTiming="ease-in-out"
              style={{ width: 150, height: 150 }}
            />
          </Wrapper>
        </View>
      </Section>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  boxLabel: {
    margin: 10,
    flex: 1,
  },
});

export default withTheme(ExpoImageExample);
