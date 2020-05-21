import * as React from "react";
import {
  HeaderLarge,
  HeaderMedium,
  HeaderOverline,
  withTheme,
} from "@draftbit/ui";
import { Container } from "./Section";

function HeaderExample({ theme }) {
  const { spacing, colors } = theme;
  return (
    <Container style={{ backgroundColor: colors.background }}>
      <HeaderLarge title="Title" style={{ marginVertical: spacing.large }} />
      <HeaderLarge
        title="Title that is quite long so"
        style={{ marginVertical: spacing.large }}
      />
      <HeaderLarge
        title="Title"
        buttonText="See All"
        onPress={() => {}}
        style={{ marginVertical: spacing.large }}
      />
      <HeaderLarge
        title="Title that is quite long so"
        buttonText="See All"
        onPress={() => {}}
        style={{ marginVertical: spacing.large }}
      />
      <HeaderMedium title="Title" style={{ marginVertical: spacing.large }} />
      <HeaderMedium
        title="Title that is quite long so"
        style={{ marginVertical: spacing.large }}
      />
      <HeaderMedium
        title="Title"
        buttonText="See All"
        onPress={() => {}}
        style={{ marginVertical: spacing.large }}
      />
      <HeaderMedium
        title="Title that is quite long so"
        buttonText="See All"
        onPress={() => {}}
        style={{ marginVertical: spacing.large }}
      />
      <HeaderOverline title="Title" style={{ marginVertical: spacing.large }} />
      <HeaderOverline
        title="Title that is quite long so"
        style={{ marginVertical: spacing.large }}
      />
      <HeaderOverline
        title="Title"
        buttonText="See All"
        onPress={() => {}}
        style={{ marginVertical: spacing.large }}
      />
      <HeaderOverline
        title="Title that is quite long so"
        buttonText="See All"
        onPress={() => {}}
        style={{ marginVertical: spacing.large }}
      />
    </Container>
  );
}

export default withTheme(HeaderExample);
