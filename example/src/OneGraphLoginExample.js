import * as React from "react";
import { OneGraphLogin } from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

export default function OneGraphLoginExample() {
  return (
    <Container>
      <Section title="OneGraphLogin (GitHub)" style={styles.row}>
        <OneGraphLogin
          appId={"e20f0091-5f3a-4100-85d0-2302aa54365b"}
          service="github"
        />
      </Section>
      <Section title="OneGraphLogin (Spotify)" style={styles.row}>
        <OneGraphLogin
          appId={"e20f0091-5f3a-4100-85d0-2302aa54365b"}
          service="spotify"
        />
      </Section>
      <Section title="OneGraphLogin (Stripe)" style={styles.row}>
        <OneGraphLogin
          appId={"e20f0091-5f3a-4100-85d0-2302aa54365b"}
          service="stripe"
        />
      </Section>
      <Section title="OneGraphLogin (Salesforce)" style={styles.row}>
        <OneGraphLogin
          appId={"e20f0091-5f3a-4100-85d0-2302aa54365b"}
          service="salesforce"
        />
      </Section>
    </Container>
  );
}
