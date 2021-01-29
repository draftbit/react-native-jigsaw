import * as React from "react";
import { Button, IconButton } from "@draftbit/ui";
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
        <IconButton style={buttonStyle} icon="file-download" disabled />
      </Section>

      <Section title="Button (solid)" style={styles.row}>
        <Button style={buttonStyle}>Solid Button</Button>
        <Button style={buttonStyle} loading>
          Solid Loading
        </Button>
        <Button style={buttonStyle} icon="file-download">
          Solid Icon
        </Button>
        <Button style={buttonStyle} icon="file-download" disabled>
          Solid Disabled
        </Button>
      </Section>

      <Section title="Button (outline)" style={styles.row}>
        <Button style={buttonStyle} type="outline">
          Outline Button
        </Button>
        <Button style={buttonStyle} type="outline" icon="file-download">
          Outline Icon
        </Button>
        <Button style={buttonStyle} type="outline" loading>
          Outline Loading
        </Button>
        <Button style={buttonStyle} type="outline" disabled>
          Outline Disabled
        </Button>
      </Section>

      <Section title="Button (text)" style={styles.row}>
        <Button style={buttonStyle} type="text">
          Text Button
        </Button>
        <Button style={buttonStyle} type="text" loading>
          Text Loading
        </Button>
        <Button style={buttonStyle} type="text" icon="file-download">
          Text Icon
        </Button>
        <Button style={buttonStyle} type="text" disabled>
          Text Disabled
        </Button>
      </Section>
    </Container>
  );
}
