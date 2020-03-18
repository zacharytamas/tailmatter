import { load } from 'js-yaml';

export interface LoadResult<T> {
  body: string;
  meta?: T;
}

const TAILMATTER_RE = /\n---\n(.*)\n---$/;

/**
 * Given a string source containing a properly formatted tailmatter document, returns a
 * parsed version of it separated into its body text and meta parts.
 */
export default <T = any>(source: string): LoadResult<T> => {
  const [body, meta] = source
    .trim()
    .split(TAILMATTER_RE)
    .filter(Boolean);

  return { body, meta: meta ? (load(meta) as T) : undefined };
};
