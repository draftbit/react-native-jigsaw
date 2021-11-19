import * as React from "react";
import { Markdown, withTheme } from "@draftbit/ui";
import Section, { Container } from "./Section";

const copy = `
---
# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
## Horizontal Rules
___
---
***
## Typographic replacements
Enable typographer option to see result.
(c) (C) (r) (R) (tm) (TM) (p) (P) +-
test.. test... test..... test?..... test!....
!!!!!! ???? ,,  -- ---
"Smartypants, double quotes" and 'single quotes'
## Emphasis
**This is bold text**
__This is bold text__
*This is italic text*
_This is italic text_
~~Strikethrough~~
## Blockquotes
> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.
## Lists
Unordered
`;

function MarkdownExample() {
  return (
    <Container>
      <Section title="Markdown">
        <Markdown content={copy} />
      </Section>
    </Container>
  );
}

export default withTheme(MarkdownExample);
