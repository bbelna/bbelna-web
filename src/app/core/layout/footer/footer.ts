import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PROFILE } from '@content/profile';
import { Button, ExternalLink, Icon } from '@shared/ui';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Button, ExternalLink, Icon],
  host: { class: 'block border-t border-line mt-24' },
  template: `
    <div
      class="page-container flex flex-col-reverse items-center justify-between gap-4 py-8 sm:flex-row"
    >
      <p class="text-sm text-muted">
        © {{ year }} {{ profile.name }}. All rights reserved.
      </p>
      <ul class="flex items-center gap-1">
        @for (social of profile.socials; track social.href) {
          <li>
            <a
              appButton
              appExternal
              variant="ghost"
              square
              [href]="social.href"
              [attr.aria-label]="social.label"
            >
              <app-icon [name]="social.icon" [size]="18" />
            </a>
          </li>
        }
      </ul>
    </div>
  `,
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
