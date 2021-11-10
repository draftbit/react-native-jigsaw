import * as React from "react";
import { StyleSheet } from "react-native";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableTitle,
  withTheme,
} from "@draftbit/ui";
import Section, { Container } from "./Section";

function TableExample() {
  return (
    <Container>
      <Section title="Table Example 1">
        <Table style={styles.table}>
          <TableHeader style={styles.header}>
            <TableTitle title="Header" style={styles.title} />
            <TableTitle style={styles.title}>Header 2</TableTitle>
            <TableTitle style={styles.title} numeric>
              Header 3
            </TableTitle>
            <TableTitle style={styles.title} numeric>
              Header 4
            </TableTitle>
          </TableHeader>
          <TableRow style={styles.row}>
            <TableCell value="Data in Cell value" style={styles.cell} />
            <TableCell style={styles.cell}>Data 2</TableCell>
            <TableCell style={styles.cell} numeric>
              30.00
            </TableCell>
            <TableCell style={styles.cell} numeric>
              3000
            </TableCell>
          </TableRow>
          <TableRow style={styles.row}>
            <TableCell style={styles.cell}>Data 1</TableCell>
            <TableCell style={styles.cell}>Data 2</TableCell>
            <TableCell style={styles.cell} numeric>
              30.00
            </TableCell>
            <TableCell style={styles.cell} numeric>
              3000
            </TableCell>
          </TableRow>
          <TableRow style={styles.row}>
            <TableCell style={styles.cell}>Data 1</TableCell>
            <TableCell style={styles.cell}>Data 2</TableCell>
            <TableCell style={styles.cell} numeric>
              30.00
            </TableCell>
            <TableCell style={styles.cell} numeric>
              3000
            </TableCell>
          </TableRow>
          <TableRow style={styles.row}>
            <TableCell style={styles.cell}>Data 1</TableCell>
            <TableCell style={styles.cell}>Data 2</TableCell>
            <TableCell style={styles.cell} numeric>
              30.00
            </TableCell>
            <TableCell style={styles.cell} numeric>
              3000
            </TableCell>
          </TableRow>
        </Table>
      </Section>

      <Section title="Table Example 2">
        <Table style={styles2.table}>
          <TableHeader style={styles2.header}>
            <TableTitle title="Header" style={styles2.title} />
            <TableTitle style={styles2.title}>Header 2</TableTitle>
            <TableTitle style={styles2.title} numeric>
              Header 3
            </TableTitle>
            <TableTitle style={styles2.title} numeric>
              Header 4
            </TableTitle>
          </TableHeader>
          <TableRow style={styles2.row}>
            <TableCell value="Data in Cell value" style={styles2.cell} />
            <TableCell style={styles2.cell}>Data 2</TableCell>
            <TableCell style={styles2.cell} numeric>
              30.00
            </TableCell>
            <TableCell style={styles2.cell} numeric>
              3000
            </TableCell>
          </TableRow>
          <TableRow style={styles2.row}>
            <TableCell style={styles2.cell}>Data 1</TableCell>
            <TableCell style={styles2.cell}>Data 2</TableCell>
            <TableCell style={styles2.cell} numeric>
              30.00
            </TableCell>
            <TableCell style={styles2.cell} numeric>
              3000
            </TableCell>
          </TableRow>
          <TableRow style={styles2.row}>
            <TableCell style={styles2.cell}>Data 1</TableCell>
            <TableCell style={styles2.cell}>Data 2</TableCell>
            <TableCell style={styles2.cell} numeric>
              30.00
            </TableCell>
            <TableCell style={styles2.cell} numeric>
              3000
            </TableCell>
          </TableRow>
          <TableRow style={styles2.row}>
            <TableCell style={styles2.cell}>Data 1</TableCell>
            <TableCell style={styles2.cell}>Data 2</TableCell>
            <TableCell style={styles2.cell} numeric>
              30.00
            </TableCell>
            <TableCell style={styles2.cell} numeric>
              3000
            </TableCell>
          </TableRow>
        </Table>
      </Section>
    </Container>
  );
}

const styles = StyleSheet.create({
  table: {
    width: "100%",
  },
  header: {
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#EFEFEF",
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },
  row: {
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  cell: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },
});

const styles2 = StyleSheet.create({
  table: {
    width: "100%",
  },
  header: {
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#ff0000",
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    color: "#0000FF",
  },
  row: {
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  cell: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },
});

export default withTheme(TableExample);
