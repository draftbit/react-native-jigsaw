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
  tag: "ListViewScreen",
  category: COMPONENT_TYPES.layout, // TODO screen
  props: {
    numColumns: createNumColumnsType({
      defaultValue: 1,
    }),
    data: {
      label: "Data",
      description: "Data",
      required: true,
      editable: true,
      formType: FORM_TYPES.MAPPING,
      propType: PROP_TYPES.MAPPING,
      defaultValue: [],
    },
    renderItem: {
      label: "Render Item",
      description: "What you want to show up for each row",
      required: true,
      editable: true,
      formType: FORM_TYPES.ROW,
      propType: PROP_TYPES.ROW,
      defaultValue: () => {},
    },
    onPressRow: {
      group: GROUPS.basic,
      label: "On Press Row",
      description: "Upon pressing a row, take me to...",
      editable: true,
      required: false,
      formType: FORM_TYPES.NAVIGATE,
      propType: PROP_TYPES.NAVIGATE,
      defaultValue: null,
    },
  },
};
