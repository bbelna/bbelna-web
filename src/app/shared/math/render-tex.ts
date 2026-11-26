import katex from 'katex';

/**
 * Pure, DOM-free TeX rendering (safe during SSR/prerender, so math ships as
 * static HTML and needs no client-side work).
 */

/** Render a single TeX expression to an HTML string. */
export function renderTex(tex: string, displayMode = false): string {
  return katex.renderToString(tex, {
    displayMode,
    throwOnError: false,
    output: 'htmlAndMathml',
  });
}

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (c) => HTML_ESCAPES[c]);
}

/** `$$...$$` (display) or `$...$` (inline). A literal dollar sign is written `\$`. */
const MATH_PATTERN = /\$\$([\s\S]+?)\$\$|(?<!\\)\$((?:\\\$|[^$\n])+?)\$/g;

/**
 * Render plain text containing `$...$` / `$$...$$` math into HTML. Non-math
 * text is HTML-escaped, so the result is safe to bind with `[innerHTML]`.
 */
export function renderTextWithMath(text: string): string {
  let html = '';
  let last = 0;

  for (const match of text.matchAll(MATH_PATTERN)) {
    html += escapeHtml(text.slice(last, match.index).replace(/\\\$/g, '$'));
    const [, display, inline] = match;
    html +=
      display !== undefined
        ? renderTex(display, true)
        : renderTex(inline, false);
    last = match.index + match[0].length;
  }

  return html + escapeHtml(text.slice(last).replace(/\\\$/g, '$'));
}
