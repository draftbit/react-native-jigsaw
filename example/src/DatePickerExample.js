import * as React from "react";
import { DatePicker, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

const FOUR_YEARS_AGO = new Date();
FOUR_YEARS_AGO.setFullYear(FOUR_YEARS_AGO.getFullYear() - 4);

function DatePickerExample({ theme }) {
  const [date, setDate] = React.useState(new Date());
  const [date2, setDate2] = React.useState(new Date());
  const handleChange = (d) => setDate(d);

  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Underline">
        <DatePicker
          label="Date (without date prop)"
          placeholder="Select a date..."
          leftIconMode={"inset"}
          leftIconName={"add"}
          onDateChange={handleChange}
        />

        <DatePicker
          leftIconName={"add"}
          leftIconMode={"outset"}
          label={"Date (with wrong type date prop)"}
          rightIconName={"add"}
          date={"abc"}
          placeholder="Select a date..."
          onDateChange={handleChange}
        />

        <DatePicker
          label="Date (disabled)"
          placeholder="Select a date..."
          disabled
          date={date}
          onDateChange={handleChange}
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
          onDateChange={handleChange}
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
          onDateChange={handleChange}
        />

        <DatePicker
          label="Date Time ('with no icons')"
          mode="datetime"
          placeholder="Select a datetime..."
          type="solid"
          date={date}
          onDateChange={handleChange}
        />

        <DatePicker
          label="Date (disabled)"
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
          date={date}
          onDateChange={handleChange}
        />

        <DatePicker
          label="Date with initial value"
          placeholder="Select a date..."
          type="solid"
          date={date2}
          onDateChange={(d) => setDate2(d)}
          initialValue={FOUR_YEARS_AGO}
        />
      </Section>
    </Container>
  );
}

export default withTheme(DatePickerExample);
