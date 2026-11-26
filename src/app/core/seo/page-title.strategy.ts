import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  TitleStrategy,
} from '@angular/router';

import { PROFILE } from '@content/profile';

const DEFAULT_DESCRIPTION = `${PROFILE.name} — ${PROFILE.tagline}`;

/**
 * Sets `<title>` as "Page · Site Name" from each route's `title`, and the meta
 * description from route `data.description` (falls back to the site tagline).
 */
@Injectable({ providedIn: 'root' })
export class PageTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(snapshot);
    this.title.setTitle(
      pageTitle ? `${pageTitle} · ${PROFILE.name}` : PROFILE.name,
    );

    const description =
      this.deepestDescription(snapshot.root) ?? DEFAULT_DESCRIPTION;
    this.meta.updateTag({ name: 'description', content: description });
  }

  private deepestDescription(
    route: ActivatedRouteSnapshot,
  ): string | undefined {
    let description: string | undefined;
    for (let r: ActivatedRouteSnapshot | null = route; r; r = r.firstChild) {
      description =
        (r.data['description'] as string | undefined) ?? description;
    }
    return description;
  }
}
