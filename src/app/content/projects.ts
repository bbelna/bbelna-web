import type { Project } from '@core/models/content';

export const PROJECTS: Project[] = [
  {
    slug: 'quantum',
    title: 'Quantum',
    summary:
      'A from-scratch, BeOS-inspired operating system written in C++. ' +
      'Media-first, capability-based, and built clean-slate with no Linux ' +
      'or BSD baggage.',
    year: 2026,
    tags: ['C++', 'Operating Systems', 'Kernel', 'POSIX'],
    links: [
      {
        label: 'Source',
        href: 'https://github.com/Belna-Inc/quantum',
        icon: 'github',
      },
    ],
    featured: true,
  },
];
