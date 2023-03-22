import React from "react";
import Section, { Container } from "./Section";
import { Table, TableRow, TableCell } from "@draftbit/ui";
import { Text, Image } from "react-native";

const sampleData = [
  {
    id: 1,
    fullName: "Susan Williamson",
  },
  {
    id: 2,
    fullName: "Henrietta Wagner",
  },
  {
    id: 3,
    fullName: "Lydia Snyder",
  },
  {
    id: 4,
    fullName: "Harold Herrera",
  },
  {
    id: 5,
    fullName: "Richard Garrett",
  },
];

const TableExample: React.FC = () => {
  return (
    <Container style={{}}>
      <Section title="Simple Table" style={{}}>
        <Table>
          <TableRow>
            <TableCell>
              <Text>Text</Text>
            </TableCell>
            <TableCell>
              <Text>Text</Text>
            </TableCell>
            <TableCell>
              <Text>Text</Text>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Text>Text</Text>
            </TableCell>
            <TableCell>
              <Text>Text</Text>
            </TableCell>
            <TableCell>
              <Text>Text</Text>
            </TableCell>
          </TableRow>
        </Table>
      </Section>
      <Section title="Customized Table with header and scrolling" style={{}}>
        <Table style={{ height: 200 }}>
          <TableRow isTableHeader>
            <TableCell drawEndBorder={false}>
              <Text style={{ color: "white" }}>Header Item</Text>
            </TableCell>
            <TableCell>
              <Text style={{ color: "white" }}>Header Item</Text>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              borderColor="red"
              drawBottomBorder
              drawTopBorder
              drawStartBorder
              borderWidth={3}
              borderStyle="dashed"
            >
              <Text>Customized Cell</Text>
            </TableCell>
            <TableCell>
              <Text>Hello</Text>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Text>Hello</Text>
            </TableCell>
            <TableCell>
              <Text>Cell with a lot of text to check height changes</Text>
            </TableCell>
          </TableRow>
          <TableRow borderColor="green" borderWidth={4} drawTopBorder>
            <TableCell>
              <Text>Hello</Text>
            </TableCell>
            <TableCell style={{ flexDirection: "column" }}>
              <Text>With Image</Text>
              <Image
                style={{ width: 150, height: 100 }}
                source={{ uri: "https://picsum.photos/id/141/1125" }}
              />
            </TableCell>
          </TableRow>
        </Table>
      </Section>
      <Section title="Table using renderItem" style={{}}>
        <Table
          data={sampleData}
          renderItem={({ item }) => (
            <TableRow>
              <TableCell>
                <Text>{item.id}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.fullName}</Text>
              </TableCell>
            </TableRow>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Section>
    </Container>
  );
};

export default TableExample;
