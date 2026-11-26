import type { Publication } from '@core/models/content';

// TODO: Replace placeholder publications. Your own name is highlighted
// automatically in author lists (matched against PROFILE.name).
export const PUBLICATIONS: Publication[] = [
  {
    title: 'On a Placeholder Inequality for Bounded Operators',
    authors: ['Brandon Belna', 'A. Coauthor'],
    venue: 'arXiv preprint',
    year: 2026,
    kind: 'preprint',
    abstract:
      'We show that for every bounded linear operator $T$ on a Hilbert space ' +
      '$H$, a placeholder estimate holds: $$\\|T^n x\\| \\le C\\,\\rho(T)^n ' +
      '\\|x\\|.$$ This sentence stands in for the rest of the abstract.',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/', icon: 'file-text' },
      { label: 'PDF', href: '#', icon: 'file-text' },
    ],
    featured: true,
  },
  {
    title: 'A Placeholder Title About Graph Colorings',
    authors: ['A. Coauthor', 'Brandon Belna', 'B. Coauthor'],
    venue: 'Journal of Placeholder Combinatorics',
    year: 2025,
    kind: 'journal',
    abstract:
      'We prove that every graph $G$ with maximum degree $\\Delta$ admits a ' +
      'proper coloring with at most $\\Delta + 1$ colors, and discuss a ' +
      'placeholder refinement.',
    links: [{ label: 'DOI', href: 'https://doi.org/', icon: 'arrow-up-right' }],
    featured: true,
  },
  {
    title: 'Undergraduate / Graduate Thesis Title',
    authors: ['Brandon Belna'],
    venue: 'University Name',
    year: 2023,
    kind: 'thesis',
    links: [{ label: 'PDF', href: '#', icon: 'file-text' }],
  },
  {
    title: 'Talk: Something Interesting About Types and Proofs',
    authors: ['Brandon Belna'],
    venue: 'Seminar / Conference Name',
    year: 2025,
    kind: 'talk',
    links: [{ label: 'Slides', href: '#', icon: 'file-text' }],
  },
];
