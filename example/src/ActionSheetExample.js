import React from "react";
import {
  ActionSheet,
  ActionSheetItem,
  ButtonSolid,
  withTheme,
} from "@draftbit/ui";
import Section, { Container } from "./Section";

function ActionSheetExample({ theme }) {
  const [visible, setVisible] = React.useState(false);

  const showActionSheet = React.useCallback(() => {
    setVisible(true);
  }, []);

  const hideActionSheet = React.useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Action Sheet">
        <ButtonSolid title="Open Action Sheet" onPress={showActionSheet} />
        <ActionSheet
          visible={visible}
          cancelLabelStyle={{ fontWeight: "bold" }}
          onCancelPress={hideActionSheet}
          onClose={hideActionSheet}
        >
          <ActionSheetItem
            labelStyle={{ fontSize: 12, fontWeight: "300", color: "grey" }}
          >
            This Action Sheet doesn't only allow to give option but also allows
            you to show some long text message like this.
          </ActionSheetItem>
          <ActionSheetItem
            labelStyle={{ color: theme.colors.error }}
            onPress={hideActionSheet}
          >
            Delete Draft
          </ActionSheetItem>
          <ActionSheetItem onPress={hideActionSheet}>
            Save Draft
          </ActionSheetItem>
        </ActionSheet>
      </Section>
    </Container>
  );
}

export default withTheme(ActionSheetExample);
