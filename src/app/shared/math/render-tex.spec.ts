import { renderTextWithMath } from './render-tex';

describe('renderTextWithMath', () => {
  it('escapes plain text', () => {
    expect(renderTextWithMath('a <b> & c')).toBe('a &lt;b&gt; &amp; c');
  });

  it('renders inline math', () => {
    const html = renderTextWithMath('Let $x^2$ be given.');
    expect(html.startsWith('Let ')).toBe(true);
    expect(html).toContain('class="katex"');
    expect(html).not.toContain('katex-display');
    expect(html.endsWith(' be given.')).toBe(true);
  });

  it('renders display math', () => {
    expect(renderTextWithMath('$$\\int_0^1 x\\,dx$$')).toContain(
      'katex-display',
    );
  });

  it('treats \\$ as a literal dollar sign', () => {
    expect(renderTextWithMath('costs \\$5 or \\$10')).toBe('costs $5 or $10');
  });

  it('does not throw on invalid TeX', () => {
    expect(() => renderTextWithMath('$\\frac{$')).not.toThrow();
  });
});
