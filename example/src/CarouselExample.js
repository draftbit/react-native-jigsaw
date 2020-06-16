import * as React from "react";
import { Carousel, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

const IMAGES = [
  "https://apps-draftbit-com.s3.amazonaws.com/xxQUEDSJ/assets/b23d4319-96fc-4ab5-813a-4538a84a6fd6",
  "https://apps-draftbit-com.s3.amazonaws.com/xxQUEDSJ/assets/9eb80357-b96b-4c49-be91-7e46629a0955",
  "https://apps-draftbit-com.s3.amazonaws.com/xxQUEDSJ/assets/be668ad0-f62d-4b43-8261-023c9406b27d",
  "https://apps-draftbit-com.s3.amazonaws.com/xxQUEDSJ/assets/96c42572-3a34-47a5-95b0-0c332f9505ef",
];

function CarouselExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Remote Images">
        <Carousel images={IMAGES} dotColor={theme.colors.background} />
      </Section>
    </Container>
  );
}

export default withTheme(CarouselExample);
