import { Injectable } from '@angular/core';

import type { Post, Project, Publication } from '@core/models/content';
import { POSTS } from '@content/posts';
import { PROFILE } from '@content/profile';
import { PROJECTS } from '@content/projects';
import { PUBLICATIONS } from '@content/publications';

const byDateDesc = (a: Post, b: Post) => b.date.localeCompare(a.date);
const byYearDesc = <T extends { year: number }>(a: T, b: T) => b.year - a.year;

/**
 * Single access point for site content. Content currently lives in static TS
 * files under `src/app/content/`; swapping to markdown files or a CMS later
 * only requires changing this service.
 */
@Injectable({ providedIn: 'root' })
export class ContentService {
  readonly profile = PROFILE;

  readonly projects: readonly Project[] = [...PROJECTS].sort(byYearDesc);
  readonly publications: readonly Publication[] = [...PUBLICATIONS].sort(
    byYearDesc,
  );
  readonly posts: readonly Post[] = [...POSTS].sort(byDateDesc);

  readonly featuredProjects = this.projects.filter((p) => p.featured);
  readonly featuredPublications = this.publications.filter((p) => p.featured);

  recentPosts(count = 3): readonly Post[] {
    return this.posts.slice(0, count);
  }

  post(slug: string): Post | undefined {
    return this.posts.find((p) => p.slug === slug);
  }
}

/**
 * Slugs for prerendering `/writing/:slug`. Plain function so server routes
 * can use it.
 */
export const postSlugs = (): string[] => POSTS.map((p) => p.slug);
