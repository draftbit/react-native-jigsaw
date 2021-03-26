import * as React from "react";
import { withTheme, FAB } from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

function FABExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}></Container>
  );
}
export default withTheme(FABExample);
