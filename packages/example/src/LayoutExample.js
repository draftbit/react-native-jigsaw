import * as React from "react";
import { View } from "react-native";
import {
  FAB,
  Icon,
  AvatarEdit,
  CircleImage,
  Row,
  withTheme,
} from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

function Box({ width = 50, height = 50 }) {
  return (
    <View style={{ width, height, backgroundColor: "#5a4fff", margin: 2 }} />
  );
}

function LayoutExample({ theme }) {
  const handlePress = () => {};
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Row">
        <Row>
          <Box />
          <Box />
          <Box />
        </Row>
      </Section>
      <Section title="CircleImage" style={styles.row}>
        <CircleImage size={60} style={styles.space} />
        <CircleImage
          size={60}
          style={styles.space}
          source="https://picsum.photos/seed/picsum/180"
        />
      </Section>
      <Section title="AvatarEdit" style={styles.row}>
        <AvatarEdit size={60} style={styles.space} />
        <AvatarEdit
          size={60}
          style={styles.space}
          image="https://picsum.photos/seed/picsum/180?grayscale"
        />
        <AvatarEdit
          size={60}
          style={styles.space}
          image="https://picsum.photos/seed/picsum/180"
        />
      </Section>
      <Section title="Icon" style={styles.row}>
        <Icon name="brightness-5" size={16} color="blue" />
        <Icon name="brightness-7" size={24} />
        <Icon name="file-download" size={36} color="purple" />
      </Section>
      <Section title="FAB" style={styles.row}>
        <FAB icon="MaterialIcons/add" onPress={handlePress} />
        <FAB icon="MaterialIcons/add" disabled onPress={handlePress} />
        <FAB icon="MaterialIcons/add" loading onPress={handlePress} />
      </Section>
    </Container>
  );
}

export default withTheme(LayoutExample);
