import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Icon } from '../icon/icon';
import { IconName } from '../icon/icons';

/**
 * Placeholder shown when a list has no items. Projected content renders below
 * the message (e.g. a link elsewhere).
 *
 * @example <app-empty-state icon="file-text" message="No posts yet — check back soon." />
 */
@Component({
  selector: 'app-empty-state',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  host: {
    class:
      'flex flex-col items-center gap-3 rounded-2xl border border-dashed border-line px-6 py-12 text-center text-muted',
  },
  template: `
    @if (icon(); as name) {
      <app-icon [name]="name" [size]="24" class="opacity-60" />
    }
    <p>{{ message() }}</p>
    <ng-content />
  `,
})
export class EmptyState {
  readonly message = input.required<string>();
  readonly icon = input<IconName>();
}
