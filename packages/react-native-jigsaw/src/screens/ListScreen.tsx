// @ts-nocheck
import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { withTheme } from "../core/theming";

import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  createNumColumnsType,
} from "../core/component-types";

type Props = {
  numColumns?: number;
  inverted?: boolean;
  data?: any[];
  renderItem: () => any;
};

function ListViewScreen({ inverted, numColumns, data, renderItem }: Props) {
  return (
    <FlatList
      style={styles.container}
      inverted={inverted}
      numColumns={numColumns}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id || item.uuid}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withTheme(ListViewScreen);

export const SEED_DATA = {
  name: "ListView Screen",
  tag: "ListScreen",
  category: COMPONENT_TYPES.button, // TODO screen
  props: {
    numColumns: createNumColumnsType({
      defaultValue: 1,
    }),
    data: {
      group: GROUPS.basic,
      label: "Data",
      description: "Data",
      required: true,
      editable: true,
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: [],
    },
    renderItem: {
      group: GROUPS.basic,
      label: "Render Item",
      description: "What you want to show up for each row",
      required: true,
      editable: true,
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: "",
    },
    onPressRow: {
      group: GROUPS.basic,
      label: "On Press Row",
      description: "Upon pressing a row, take me to...",
      editable: true,
      required: false,
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: "",
    },
  },
};
