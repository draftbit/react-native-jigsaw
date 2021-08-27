import React from "react";
import {
  ActionSheet,
  ActionSheetItem,
  ActionSheetCancel,
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
          // onCancelPress={hideActionSheet}
          onClose={hideActionSheet}
        >
          <ActionSheetItem
            style={{ fontSize: 12, fontWeight: "300", color: "grey" }}
            label="This Action Sheet not only allows you to provide an option but also allows
            you to show some long text message like this."
          />
          <ActionSheetItem
            style={{ color: theme.colors.error }}
            onPress={hideActionSheet}
            label=" Delete Draft"
          />
          <ActionSheetItem onPress={hideActionSheet} label="Save Draft" />
          <ActionSheetCancel onPress={hideActionSheet} />
        </ActionSheet>
      </Section>
    </Container>
  );
}

export default withTheme(ActionSheetExample);
