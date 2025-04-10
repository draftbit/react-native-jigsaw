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
  const [date4, setDate4] = React.useState(new Date());

  return (
    <Container style={{ backgroundColor: theme.colors.background.base }}>
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

        <DatePicker
          label="Date with minimum and maximum"
          placeholder="Select a date..."
          type="solid"
          minimumDate={new Date("2023-04-10")}
          maximumDate={new Date("2023-05-10")}
        />
      </Section>
      <Section title="Styled">
        <DatePicker
          label={"Date"}
          mode={"date"}
          style={{
            backgroundColor: "red",
            fontSize: 22,
            paddingBottom: 16,
            paddingTop: 16,
          }}
          date={date2}
          onDateChange={setDate2}
          defaultValue={new Date(DATE_STRING)}
          leftIconMode={"inset"}
          type={"solid"}
        />
        <DatePicker
          label={"Date"}
          mode={"time"}
          style={{
            backgroundColor: "black",
            fontSize: 26,
            color: `white`,
            paddingBottom: 16,
            paddingTop: 16,
          }}
          date={date3}
          onDateChange={setDate3}
          defaultValue={new Date(DATE_STRING)}
          labelSize={26}
          labelColor={"blue"}
          borderColor={"blue"}
          borderColorActive={"green"}
          leftIconMode={"inset"}
          type={"underline"}
        />
        <DatePicker
          autoDismissKeyboard={true}
          disabled={false}
          hideLabel={false}
          inline={false}
          label={"Date"}
          leftIconMode={"inset"}
          onDateChange={setDate4}
          type={"solid"}
          date={date4}
          format={"mmm d, yyyy hh:MM tt"}
          minimumDate={new Date()}
          mode={"datetime"}
        />
      </Section>
    </Container>
  );
}

export default withTheme(DatePickerExample);
