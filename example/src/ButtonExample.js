import * as React from "react";
import { IconButton, ButtonSolid, ButtonOutline, Link } from "@draftbit/ui";
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

      <Section title="Button (solid)" style={styles.row}>
        <ButtonSolid style={buttonStyle} title="Solid Button" />
        <ButtonSolid
          style={buttonStyle}
          title="Solid Button"
          icon="file-download"
        />
        <ButtonSolid style={buttonStyle} title="Solid Button" loading={true} />
        <ButtonSolid style={buttonStyle} title="Solid Button" disabled={true} />
      </Section>
      <ButtonSolid
        title="Custom button options"
        style={{
          textAlign: "left",
          backgroundColor: "orange",
        }}
      />

      <Section title="Button (outline)" style={styles.row}>
        <ButtonOutline style={buttonStyle} title="Outline Button" />
        <ButtonOutline
          style={buttonStyle}
          title="Outline Button"
          icon="file-download"
        />
        <ButtonOutline style={buttonStyle} title="Outline Button" loading />
        <ButtonOutline style={buttonStyle} title="Outline Button" disabled />
      </Section>

      <Section title="Link" style={styles.row}>
        <Link title="Link" />
        <Link title="Get Started" loading={true} />
        <Link title="Click here to learn more" icon="file-download" />
      </Section>
    </Container>
  );
}
