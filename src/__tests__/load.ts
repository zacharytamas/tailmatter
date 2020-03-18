import { stripIndent } from 'common-tags';

import { load } from '../index';

describe('with tailmatter', () => {
  test('should parse a markdown document correctly', () => {
    expect(
      load(stripIndent`
      My content
      ---
      test: true
      ---
    `)
    ).toEqual({ body: 'My content', meta: { test: true } });
  });

  test('should be tolerant of empty tailmatter blocks', () => {
    expect(
      load(stripIndent`
      My content
      ---

      ---
    `)
    ).toEqual({ body: 'My content', meta: undefined });
  });

  test('should be tolerant of other triple-dashes that exist but are irrelevant', () => {
    const { body, meta } = load(stripIndent`
      # My document
      lorem
      ---
      Page break
      ---
      test: true
      ---
    `);

    expect(body).toMatch(/---/); // Test that the extraneous --- was not eaten.
    expect(meta).toMatchObject({ test: true });
  });
});

describe('without tailmatter', () => {
  test('should parse a markdown document correctly', () => {
    expect(
      load(stripIndent`
      My content
    `)
    ).toEqual({ body: 'My content', meta: undefined });
  });
});
