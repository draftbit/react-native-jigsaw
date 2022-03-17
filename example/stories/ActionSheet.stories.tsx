import React, { useState } from "react";
import { View, Button } from "react-native";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ActionSheet, ActionSheetItem, ActionSheetCancel } from "@draftbit/ui";

export default {
  title: "ActionSheet",
  component: ActionSheet,
} as ComponentMeta<typeof ActionSheet>;

export const Basic: ComponentStory<typeof ActionSheet> = (args) => {
  const [isVisible, setIsVisible] = useState(args.visible);

  const toggleIsVisible = () => setIsVisible(!isVisible);

  // TODO need to fix Portal re-render Hook issue ... see:
  // packages/core/src/components/ActionSheet/ActionSheet.tsx
  // packages/core/src/components/Portal/Portal.tsx

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button onPress={toggleIsVisible} title="Toggle" />

      <ActionSheet visible={isVisible} onClose={args.onClose}>
        <ActionSheetItem
          // @ts-ignore
          {...Basic.args.childProps.ActionSheetItem1}
          onPress={toggleIsVisible}
        />

        <ActionSheetItem
          // @ts-ignore
          {...Basic.args.childProps.ActionSheetItem2}
          onPress={toggleIsVisible}
        />

        <ActionSheetCancel
          // @ts-ignore
          {...Basic.args.childProps.ActionSheetCancel}
          onPress={toggleIsVisible}
        />
      </ActionSheet>
    </View>
  );
};

Basic.args = {
  visible: false,
  //onClose: () => console.log('closed')
};

Basic.argTypes = {
  onClose: { action: "onClose" },
};

// @ts-ignore
Basic.args.childProps = {
  ActionSheetItem1: {
    color: "blue",
    style: { fontSize: 12, fontWeight: "300", color: "grey" },
    label:
      "This Action Sheet not only allows you to provide an option but also allows you to show some long text message like this.",
  },

  ActionSheetItem2: {
    color: "green",
    label: "Save",
  },

  ActionSheetCancel: {
    color: "red",
    label: "Cancel",
  },
};
