import React from "react";
import { View, StyleSheet, StyleProp, TextStyle } from "react-native";
import ActionSheetItem from "./ActionSheetItem";
import Portal from "../Portal/Portal";
import Touchable from "../Touchable";
import {
  COMPONENT_TYPES,
  createColorProp,
  createStaticBoolProp,
  createTextProp,
  createTextStyle,
} from "@draftbit/types";

interface Props {
  children: React.ReactNode;
  visible: boolean;
  showCancel?: boolean;
  cancelLabel?: string;
  cancelLabelStyle?: StyleProp<TextStyle>;
  cancelButtonColor?: string;
  onCancelPress?: () => {};
  onClose: () => void;
}

const ActionSheet = ({
  visible,
  showCancel = true,
  cancelLabelStyle,
  cancelButtonColor,
  children,
  cancelLabel = "Cancel",
  onClose,
  onCancelPress,
}: Props) => {
  return visible ? (
    <Portal>
      <Touchable style={styles.wrapper} onPress={onClose}>
        <View style={styles.overlay} />
        <View style={styles.groupWrapper}>
          <View style={styles.group}>{children}</View>
          {showCancel && (
            <View style={styles.group}>
              <ActionSheetItem
                labelStyle={[
                  { color: "#FF453A", fontWeight: "bold" },
                  cancelLabelStyle,
                ]}
                buttonColor={cancelButtonColor}
                onPress={onCancelPress}
              >
                {cancelLabel}
              </ActionSheetItem>
            </View>
          )}
        </View>
      </Touchable>
    </Portal>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000000",
    opacity: 0.3,
  },
  groupWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    display: "flex",
    marginBottom: 25,
  },
  group: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
    marginHorizontal: 7,
    marginVertical: 2.5,
    overflow: "hidden",
  },
});

export const SEED_DATA = {
  name: "Action Sheet",
  tag: "ActionSheet",
  description: "Action Sheet container",
  category: COMPONENT_TYPES.container,
  props: {
    visible: createStaticBoolProp({
      label: "Show Action Sheet",
    }),
    showCancel: createStaticBoolProp({
      label: "Show cancel",
      description: "Whether the ActionSheet should show cancel button or not",
    }),
    cancelLabel: createTextProp({
      label: "Accordion label",
      defaultValue: "Cancel",
    }),
    cancelLabelStyle: createTextStyle({
      label: "Cancel Label Style",
    }),
    cancelButtonColor: createColorProp({
      label: "Cancel Button Color",
    }),
  },
};

export default ActionSheet;
