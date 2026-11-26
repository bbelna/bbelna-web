import type { NavItem, Profile } from '@core/models/content';

// TODO: Replace placeholder content with your own.
export const PROFILE: Profile = {
  name: 'Brandon Belna',
  tagline:
    'Software engineer & mathematician. ' +
    'I build reliable systems and think about structure.',
  bio: [
    'Software engineer and mathematician with 10+ years of remote, hybrid, ' +
      'and in-person experiences across industrial, academic, and consulting ' +
      'environments. Experienced in leading teams, mentoring developers, and ' +
      'building scalable software systems. Passionate about solving complex ' +
      'technical problems and contributing to innovative, collaborative teams.',
  ],
  location: 'DeLand, FL',
  email: 'bbelna@aol.com',
  photoUrl: 'img/me.png',
  cvUrl: '/resume.pdf',
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/bbelna',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bbelna',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:bbelna@aol.com',
      icon: 'mail',
    },
  ],
  interests: [
    'Mathematical Physics',
    'Jordan Algebras',
    'Artificial Intelligence',
    'Human-Computer Interaction',
    'Operating Systems',
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Projects', path: '/projects' },
  { label: 'Research', path: '/research' },
  { label: 'Writing', path: '/writing' },
];
