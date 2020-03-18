# `tailmatter`

This library does what you might expect: it's a frontmatter parser where the Yaml
component is at the end of the file instad of the beginning. It's pretty esoteric but an
important part of something I'm building where I want the ability to add metadata to
Markdown documents but I want to keep the content of the document front and center.

## Installation

This package is published on `npm` and can easily be added like so:

    npm i tailmatter

## Usage

An example of how to use this package:

```javascript
import { load, dump } from 'tailmatter';
import { stripIndent } from 'common-tags'; // optional, for demonstration

const myMarkdown = stripIndent`
  # My markdown

  Testing paragraph
  ---
  test: true
  ---
`;

const result = load(myMarkdown);

// result is:
// {
//  body: '# My markdown\n\nTesting paragraph',
//  meta: { test: true }
// }
```
