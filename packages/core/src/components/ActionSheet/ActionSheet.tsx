import React from "react";
import { View, StyleSheet } from "react-native";
import Portal from "../Portal/Portal";
import Touchable from "../Touchable";
import ActionSheetCancel from "./ActionSheetCancel";

interface Props {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ActionSheet = ({ visible = false, onClose, children }: Props) => {
  return visible ? (
    <Portal>
      <Touchable style={styles.wrapper} onPress={onClose}>
        <View style={styles.overlay} />
        <View style={styles.groupWrapper}>
          <View style={styles.group}>
            {React.Children.toArray(children).filter(
              (child: any) => child?.type !== ActionSheetCancel
            )}
          </View>
          <View style={styles.group}>
            {React.Children.toArray(children).filter(
              (child: any) => child.type === ActionSheetCancel
            )}
          </View>
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

export default ActionSheet;
