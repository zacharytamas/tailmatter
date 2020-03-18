import { stripIndent } from 'common-tags';

import { dump } from '../index';

describe('with meta', () => {
  test('should dump correctly', () => {
    expect(dump('my body', { test: true })).toEqual(stripIndent`
    my body

    ---
    test: true
    ---`);
  });
});

describe('without meta', () => {
  test('should dump correctly', () => {
    expect(dump('my body')).toEqual('my body');
  });
});
