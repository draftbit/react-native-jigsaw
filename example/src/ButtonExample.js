import * as React from "react";
import { IconButton, Button, ButtonOutline, Link } from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

export default function ButtonExample() {
  const buttonStyle = [styles.button];
  return (
    <Container>
      <Section title="IconButton" style={styles.row}>
        <IconButton style={buttonStyle} size={16} icon="brightness-5" />
        <IconButton style={buttonStyle} size={24} icon="brightness-6" />
        <IconButton style={buttonStyle} icon="brightness-7" />
        <IconButton style={buttonStyle} icon="file-download" loading />
        <IconButton
          size={32}
          style={buttonStyle}
          icon="FontAwesome/photo"
          disabled
        />
      </Section>

      <Section title="Button" style={styles.row}>
        <Button style={buttonStyle} title="Button" />
        <Button style={buttonStyle} title="Button" icon="file-download" />
        <Button style={buttonStyle} title="Button" loading={true} />
        <Button style={buttonStyle} title="Button" disabled={true} />
      </Section>
      <Button
        title="Custom button options"
        style={{
          textAlign: "left",
          backgroundColor: "orange",
        }}
      />

      <Section title="Link" style={styles.row}>
        <Link title="Link" />
        <Link title="Get Started" loading={true} />
        <Link title="Click here to learn more" icon="file-download" />
      </Section>
    </Container>
  );
}
