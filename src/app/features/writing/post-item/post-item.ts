import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { Post } from '@core/models/content';
import { TexPipe } from '@shared/math';
import { Icon, Tag } from '@shared/ui';

/** Post summary row linking to the full post. */
@Component({
  selector: 'app-post-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, RouterLink, Icon, Tag, TexPipe],
  host: { class: 'block' },
  template: `
    @let p = post();
    <a
      [routerLink]="['/writing', p.slug]"
      [class]="
        'group -mx-4 flex flex-col gap-2 rounded-2xl p-4 ' +
        'transition-colors hover:bg-surface-2'
      "
    >
      <time class="text-sm text-muted tabular-nums" [attr.datetime]="p.date">{{
        p.date | date: 'mediumDate' : 'UTC'
      }}</time>
      <h3
        [class]="
          'flex items-center gap-2 text-lg font-semibold ' +
          'transition-colors group-hover:text-accent'
        "
      >
        {{ p.title }}
        <app-icon
          name="arrow-right"
          [size]="16"
          [class]="
            '-translate-x-1 opacity-0 transition-all ' +
            'group-hover:translate-x-0 group-hover:opacity-100'
          "
        />
      </h3>
      <p class="text-muted" [innerHTML]="p.summary | tex"></p>
      <div class="flex flex-wrap gap-1.5">
        @for (tag of p.tags; track tag) {
          <app-tag>{{ tag }}</app-tag>
        }
      </div>
    </a>
  `,
})
export class PostItem {
  readonly post = input.required<Post>();
}
