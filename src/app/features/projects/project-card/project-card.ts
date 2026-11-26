import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { Project } from '@core/models/content';
import { Card, ExternalLink, Icon, Tag } from '@shared/ui';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Card, ExternalLink, Icon, Tag],
  host: { class: 'block' },
  template: `
    @let p = project();
    <app-card interactive class="h-full">
      <div class="flex items-start justify-between gap-4">
        <h3 class="text-lg font-semibold">{{ p.title }}</h3>
        <span class="text-sm text-muted tabular-nums">{{ p.year }}</span>
      </div>
      <p class="flex-1 text-muted">{{ p.summary }}</p>
      <div class="flex flex-wrap gap-1.5">
        @for (tag of p.tags; track tag) {
          <app-tag>{{ tag }}</app-tag>
        }
      </div>
      @if (p.links.length) {
        <div class="mt-1 flex flex-wrap gap-4 border-t border-line pt-4">
          @for (link of p.links; track link.href) {
            <a
              appExternal
              [href]="link.href"
              class="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              @if (link.icon) {
                <app-icon [name]="link.icon" [size]="16" />
              }
              {{ link.label }}
            </a>
          }
        </div>
      }
    </app-card>
  `,
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
