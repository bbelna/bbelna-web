import type { IconName } from '@shared/ui/icon/icons';

/** A generic outbound link (GitHub repo, arXiv, PDF, ...). */
export interface Link {
  label: string;
  href: string;
  icon?: IconName;
}

export interface SocialLink extends Link {
  icon: IconName;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Profile {
  name: string;
  /** Short one-liner shown in the hero. */
  tagline: string;
  /** Paragraphs for the About section. Supports inline TeX: `$...$`. */
  bio: string[];
  location?: string;
  /** Square headshot shown in the hero, relative to `public/`. */
  photoUrl?: string;
  email: string;
  cvUrl?: string;
  socials: SocialLink[];
  /** A few areas of interest, shown as tags. */
  interests: string[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  year: number;
  tags: string[];
  links: Link[];
  /** Shown on the home page when true. */
  featured?: boolean;
}

export type PublicationKind =
  'journal' | 'conference' | 'preprint' | 'thesis' | 'talk';

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  kind: PublicationKind;
  /** Supports inline/display TeX: `$...$` and `$$...$$`. */
  abstract?: string;
  links: Link[];
  featured?: boolean;
}

/** Building blocks for a post body. Text blocks support inline TeX. */
export type PostBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'math'; tex: string }
  | { type: 'code'; code: string; language?: string }
  | { type: 'list'; items: string[] };

export interface Post {
  slug: string;
  title: string;
  /** ISO date, e.g. `2026-01-15`. */
  date: string;
  summary: string;
  tags: string[];
  body: PostBlock[];
}
