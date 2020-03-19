# tailmatter

[![GitHub][github-badge]][github]
[![Stars][]][github]
[![Version][]][npm]
![][size]

[github]: https://github.com/zacharytamas/tailmatter
[github-badge]: https://flat.badgen.net/badge/-/github?icon=github&label
[stars]: https://badgen.net/github/stars/zacharytamas/tailmatter
[version]: https://flat.badgen.net/npm/v/tailmatter
[npm]: https://npmjs.com/package/tailmatter
[size]: https://flat.badgen.net/bundlephobia/minzip/tailmatter

This library does what you might expect: it's a frontmatter parser where the Yaml
component is at the end of the file instad of the beginning. It's pretty esoteric but an
important part of something I'm building where I want the ability to add metadata to
Markdown documents but I want to keep the content of the document front and center.

## Installation

This package is published on `npm` and can easily be added like so:

```bash
npm i tailmatter
```

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

{
 body: '# My markdown\n\nTesting paragraph',
 meta: { test: true }
}
```

### Types

This library is authored in [TypeScript](https://www.typescriptlang.org/) and is published
with first-party types.

The type returned by the `load` method is generic so that you can specify the type of the
metadata you expect. **If you do not provide a type it will be assumed as `any`.**

For example:

```typescript
import { load } from 'tailmatter';
import { stripIndent } from 'common-tags'; // optional, for demonstration

interface Metadata {
  test: boolean;
}

const myMarkdown = stripIndent`
  # My markdown

  Testing paragraph
  ---
  test: true
  ---
`;

const result = load<Metadata>(myMarkdown);

// TypeScript now knows that `result.meta.test` is a `boolean` value.
```
