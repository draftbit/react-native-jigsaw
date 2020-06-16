import * as React from "react";
import { DatePicker, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

function DatePickerExample({ theme }) {
  const [date, setDate] = React.useState(new Date());
  const handleChange = (d) => setDate(d);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Underline">
        <DatePicker
          label="Date"
          placeholder="Select a date..."
          date={date}
          onDateChange={handleChange}
        />

        <DatePicker
          label="Date"
          placeholder="Select a date..."
          error
          date={date}
          onDateChange={handleChange}
        />

        <DatePicker
          label="Date"
          placeholder="Select a date..."
          disabled
          date={date}
          onDateChange={handleChange}
        />
      </Section>

      <Section title="Solid">
        <DatePicker
          label="Date"
          placeholder="Select a date..."
          type="solid"
          date={date}
          onDateChange={handleChange}
        />

        <DatePicker
          label="Formatted Time"
          mode="time"
          placeholder="Select a time..."
          format="h:MM TT"
          type="solid"
          date={date}
          onDateChange={handleChange}
        />

        <DatePicker
          label="Date Time"
          mode="datetime"
          placeholder="Select a datetime..."
          type="solid"
          date={date}
          onDateChange={handleChange}
        />

        <DatePicker
          label="Date"
          placeholder="Select a date..."
          type="solid"
          disabled
          date={date}
          onDateChange={handleChange}
        />

        <DatePicker
          label="Date"
          placeholder="Select a date..."
          type="solid"
          error
          date={date}
          onDateChange={handleChange}
        />
      </Section>
    </Container>
  );
}

export default withTheme(DatePickerExample);
