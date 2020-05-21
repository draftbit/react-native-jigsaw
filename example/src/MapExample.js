import * as React from "react";
import { MapSimple, withTheme } from "@draftbit/ui";

import Section, { Container } from "./Section";

function MapExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="MapSimple">
        <MapSimple
          initialLatitude={37.402184}
          initialLongitude={-122.121264}
          initialLatitudeDelta={0.2}
          initialLongitudeDelta={0.2}
          markers={[
            {
              latitude: 37.402184,
              longitude: -122.121264,
              title: "Home",
              description: "319 Lunada Court, Los Altos, CA, 94022",
            },
          ]}
        />
      </Section>
    </Container>
  );
}

export default withTheme(MapExample);
