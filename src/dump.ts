import { dump, DumpOptions } from 'js-yaml';

/**
 * Given body text and optional metadata to be Yaml-encoded into the tailmatter, returns a
 * valid tailmatter-formatted string.
 */
export default (
  body: string,
  meta?: object,
  options?: DumpOptions
): string => {
  if (!meta) return body;

  return `${body}\n\n---\n${dump(meta, options)}---`;
};
