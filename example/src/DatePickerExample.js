import * as React from "react";
import { DatePicker, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

const FOUR_YEARS_AGO = new Date();
FOUR_YEARS_AGO.setFullYear(FOUR_YEARS_AGO.getFullYear() - 4);
const DATE_STRING = "Mon Sep 27 2021 12:59:17 GMT-0500 (Central Daylight Time)";

function DatePickerExample({ theme }) {
  const [date, setDate] = React.useState(new Date());
  const [date2, setDate2] = React.useState(new Date());
  const [date3, setDate3] = React.useState(new Date());

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Underline">
        <DatePicker
          label="Date (without date prop)"
          placeholder="Select a date..."
          leftIconMode={"inset"}
          leftIconName={"add"}
          onDateChange={setDate}
        />

        <DatePicker
          leftIconName={"add"}
          leftIconMode={"outset"}
          label={"Date (with wrong type date prop)"}
          rightIconName={"add"}
          date={"abc"}
          placeholder="Select a date..."
          onDateChange={setDate}
        />

        <DatePicker
          label="Date (disabled)"
          placeholder="Select a date..."
          disabled
          date={date}
          onDateChange={setDate}
        />
      </Section>

      <Section title="Solid">
        <DatePicker
          label="Date (with leftIconMode = 'outset')"
          placeholder="Select a date..."
          type="solid"
          leftIconName={"add"}
          leftIconMode={"outset"}
          date={date}
          onDateChange={setDate}
        />

        <DatePicker
          label="Formatted Time (with leftIconMode = 'inset')"
          mode="time"
          placeholder="Select a time..."
          format="h:MM TT"
          type="solid"
          rightIconName={"add"}
          leftIconMode={"inset"}
          leftIconName={"add"}
          date={date}
          onDateChange={setDate}
        />

        <DatePicker
          label="Date Time ('with no icons')"
          mode="datetime"
          placeholder="Select a datetime..."
          type="solid"
          date={date}
          onDateChange={setDate}
        />

        <DatePicker
          label="Date (disabled)"
          placeholder="Select a date..."
          type="solid"
          disabled
          date={date}
          onDateChange={setDate}
        />

        <DatePicker
          label="Date"
          placeholder="Select a date..."
          type="solid"
          date={date}
          onDateChange={setDate}
        />

        <DatePicker
          label="Date with initial value"
          placeholder="Select a date..."
          type="solid"
          date={date2}
          onDateChange={setDate2}
          defaultValue={FOUR_YEARS_AGO}
        />

        <DatePicker
          label="Date with initial value (parsed from string)"
          placeholder="Select a date..."
          type="solid"
          date={date3}
          onDateChange={setDate3}
          defaultValue={new Date(DATE_STRING)}
        />
      </Section>
      <Section title="Custom Styling">
        <DatePicker
          label="Date with Border Color and Label Color"
          labelSize={14}
          labelColor="red"
          placeholder="Select a date..."
          leftIconMode={"inset"}
          leftIconName={"add"}
          onDateChange={setDate}
          borderColor="blue"
          borderColorActive="red"
          style={{ fontFamily: 'monospace' }}
        />  

        <DatePicker
          label="Date with Border Color (solid)"
          placeholder="Select a date..."
          type="solid"
          leftIconName={"add"}
          leftIconMode={"outset"}
          date={date}
          borderColor="blue"
          borderColorActive="red"
          onDateChange={setDate}
        />
      </Section>
    </Container>
  );
}

export default withTheme(DatePickerExample);
