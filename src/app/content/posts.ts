import type { Post } from '@core/models/content';

// TODO: Replace placeholder posts. Each post gets its own prerendered page at
// /writing/<slug>.
export const POSTS: Post[] = [
  // {
  //   slug: 'hello-world',
  //   title: 'Hello, world',
  //   date: '2026-11-20',
  //   summary: 'A first post: what this site is for and what I plan to write about.',
  //   tags: ['Meta'],
  //   body: [
  //     {
  //       type: 'paragraph',
  //       text: 'This is a placeholder post. Text blocks support inline math like $e^{i\\pi} + 1 = 0$, and you can drop in display equations too:',
  //     },
  //     { type: 'math', tex: '\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}' },
  //     { type: 'heading', text: 'What to expect' },
  //     {
  //       type: 'list',
  //       items: [
  //         'Notes on software engineering',
  //         'Short mathematical expositions',
  //         'Occasional write-ups of side projects',
  //       ],
  //     },
  //     { type: 'paragraph', text: 'Code blocks work as well:' },
  //     {
  //       type: 'code',
  //       language: 'typescript',
  //       code: "const greet = (name: string) => `Hello, ${name}!`;\nconsole.log(greet('world'));",
  //     },
  //   ],
  // },
  // {
  //   slug: 'a-note-on-induction',
  //   title: 'A note on induction',
  //   date: '2026-10-02',
  //   summary: 'A placeholder exposition: why strong induction and well-ordering are the same idea.',
  //   tags: ['Math', 'Logic'],
  //   body: [
  //     {
  //       type: 'paragraph',
  //       text: 'Let $P(n)$ be a property of natural numbers. Strong induction says that if $P(k)$ for all $k < n$ implies $P(n)$, then $P(n)$ holds for every $n \\in \\mathbb{N}$.',
  //     },
  //     {
  //       type: 'math',
  //       tex: '\\Big(\\forall n\\, \\big[(\\forall k < n\\; P(k)) \\Rightarrow P(n)\\big]\\Big) \\Rightarrow \\forall n\\; P(n)',
  //     },
  //     {
  //       type: 'paragraph',
  //       text: 'The rest of this post is a placeholder — replace it with your own writing.',
  //     },
  //   ],
  // },
];
