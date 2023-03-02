import * as React from "react";
import {
  RowHeadlineImageIcon,
  RowHeadlineImageCaption,
  RowBodyIcon,
  withTheme,
  RowBodySwitch,
} from "@draftbit/ui";
import Section, { Container } from "./Section";

const IMAGE_URL =
  "https://res.cloudinary.com/altos/image/upload/c_scale,q_auto,dpr_auto,w_100/Avatar.png";

function RowExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="RowSingleLineHeadlineImageIcon">
        <RowHeadlineImageIcon title="Headline" icon="check" image={IMAGE_URL} />
      </Section>

      <Section title="RowSingleLineHeadlineImageIcon">
        <RowHeadlineImageIcon
          title="Headline that is quite long so that it won't fit on a single line"
          icon="check"
          image={IMAGE_URL}
        />
      </Section>

      <Section title="RowSingleLineHeadlineIcon">
        <RowHeadlineImageIcon title="Headline" icon="check" />
      </Section>

      <Section title="RowSingleLineHeadlineIcon with long title">
        <RowHeadlineImageIcon
          title="Headline that is quite long so that it won't fit on a single line"
          icon="check"
        />
      </Section>

      <Section title="RowDoubleLineHeadlineImageIcon">
        <RowHeadlineImageIcon
          title="Headline"
          subtitle="Subtitle"
          icon="check"
          image={IMAGE_URL}
        />
      </Section>

      <Section title="RowDoubleLineHeadlineImageIcon with long title and subtitle">
        <RowHeadlineImageIcon
          title="Headline that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          icon="check"
          image={IMAGE_URL}
        />
      </Section>

      <Section title="RowMultiLineHeadlineImageIcon with long title and subtitle">
        <RowHeadlineImageIcon
          title="Headline that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          multilineSubtitle
          icon="check"
          image={IMAGE_URL}
        />
      </Section>
      <Section title="RowDoubleLineHeadlineIcon">
        <RowHeadlineImageIcon
          title="Headline"
          subtitle="Subtitle"
          icon="check"
        />
      </Section>
      <Section title="RowDoubleLineHeadlineIcon with long title">
        <RowHeadlineImageIcon
          title="Headline that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          icon="check"
        />
      </Section>
      <Section title="RowMultiLineHeadlineIcon with long title">
        <RowHeadlineImageIcon
          title="Headline that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          multilineSubtitle
          icon="check"
        />
      </Section>
      <Section title="RowSingleLineHeadlineImageCaption">
        <RowHeadlineImageCaption
          title="Headline"
          caption="Caption"
          image={IMAGE_URL}
        />
      </Section>
      <Section title="RowSingleLineHeadlineImageCaption with long title">
        <RowHeadlineImageCaption
          title="Headline that is quite long so that it won't fit on a single line"
          caption="Caption"
          image={IMAGE_URL}
        />
      </Section>
      <Section title="RowSingleLineHeadlineCaption">
        <RowHeadlineImageCaption title="Headline" caption="Caption" />
      </Section>
      <Section title="RowSingleLineHeadlineCaption with long title">
        <RowHeadlineImageCaption
          title="Headline that is quite long so that it won't fit on a single line"
          caption="Caption"
        />
      </Section>
      <Section title="RowDoubleLineHeadlineImageCaption">
        <RowHeadlineImageCaption
          title="Headline"
          subtitle="Subtitle"
          caption="Caption"
          image={IMAGE_URL}
        />
      </Section>
      <Section title="RowDoubleLineHeadlineImageCaption with long title">
        <RowHeadlineImageCaption
          title="Headline that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          caption="Caption"
          image={IMAGE_URL}
        />
      </Section>
      <Section title="RowDoubleLineHeadlineCaption">
        <RowHeadlineImageCaption
          title="Headline"
          subtitle="Subtitle"
          caption="Caption"
        />
      </Section>
      <Section title="RowDoubleLineHeadlineCaption with long title">
        <RowHeadlineImageCaption
          title="Headline that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          caption="Caption"
        />
      </Section>
      <Section title="RowSingleLineBodyIcon">
        <RowBodyIcon title="Headline" icon="check" />
      </Section>
      <Section title="RowSingleLineBodyIcon with long title">
        <RowBodyIcon
          title="Headline that is quite long so that it won't fit on a single line"
          icon="check"
        />
      </Section>
      <Section title="RowDoubleLineBodyIcon">
        <RowBodyIcon title="Headline" subtitle="Subtitle" icon="check" />
      </Section>
      <Section title="RowDoubleLineBodyIcon with long title and subtitle">
        <RowBodyIcon
          title="Headline that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          icon="check"
        />
      </Section>
      <Section title="RowBodySwitch with title and subtitle">
        <RowBodySwitch title="Headline" subtitle="subtitle" value={true} />
      </Section>
      <Section title="RowBodySwitch with title only">
        <RowBodySwitch title="Headline" value={true} />
      </Section>
    </Container>
  );
}

export default withTheme(RowExample);
