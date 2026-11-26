import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

import type { Publication, PublicationKind } from '@core/models/content';
import { PROFILE } from '@content/profile';
import { TexPipe } from '@shared/math';
import { ExternalLink, Icon, Tag } from '@shared/ui';

const KIND_LABELS: Record<PublicationKind, string> = {
  journal: 'Journal',
  conference: 'Conference',
  preprint: 'Preprint',
  thesis: 'Thesis',
  talk: 'Talk',
};

@Component({
  selector: 'app-publication-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ExternalLink, Icon, Tag, TexPipe],
  host: { class: 'block' },
  template: `
    @let pub = publication();
    <article class="flex flex-col gap-2">
      <div class="flex flex-wrap items-center gap-2 text-sm text-muted">
        <app-tag tone="accent">{{ kindLabel() }}</app-tag>
        <span class="tabular-nums">{{ pub.year }}</span>
        <span aria-hidden="true">·</span>
        <span class="italic">{{ pub.venue }}</span>
      </div>
      <h3
        class="text-lg font-semibold leading-snug"
        [innerHTML]="pub.title | tex"
      ></h3>
      <p class="text-sm text-muted">
        @for (author of pub.authors; track author; let last = $last) {
          <span
            [class.font-semibold]="author === me"
            [class.text-ink]="author === me"
            >{{ author }}</span>{{ last ? '' : ', ' }}
        }
      </p>
      @if (showAbstract() && pub.abstract) {
        <div
          class="prose-body text-sm text-muted"
          [innerHTML]="pub.abstract | tex"
        ></div>
      }
      @if (pub.links.length) {
        <div class="flex flex-wrap gap-4">
          @for (link of pub.links; track link.label) {
            <a
              appExternal
              [href]="link.href"
              class="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              @if (link.icon) {
                <app-icon [name]="link.icon" [size]="14" />
              }
              {{ link.label }}
            </a>
          }
        </div>
      }
    </article>
  `,
})
export class PublicationItem {
  readonly publication = input.required<Publication>();
  readonly showAbstract = input(true);

  protected readonly me = PROFILE.name;
  protected readonly kindLabel = computed(
    () => KIND_LABELS[this.publication().kind],
  );
}
