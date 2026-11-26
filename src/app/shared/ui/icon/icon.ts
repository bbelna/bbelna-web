import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  numberAttribute,
} from '@angular/core';

import { ICONS, IconName } from './icons';

/**
 * Inline SVG icon. Inherits `currentColor`, so color it with text utilities.
 *
 * @example <app-icon name="github" [size]="18" class="text-muted" />
 */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Default display lives in the `components` layer so consumer utilities
  // (e.g. `hidden`, `dark:inline-flex`, `block`) always override it.
  styles: `
    @layer components {
      :host {
        display: inline-flex;
        flex-shrink: 0;
      }
    }
  `,
  host: {
    '[attr.aria-hidden]': '!label()',
    '[attr.role]': 'label() ? "img" : null',
    '[attr.aria-label]': 'label() || null',
  },
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      [attr.width]="size()"
      [attr.height]="size()"
    >
      @for (d of paths(); track $index) {
        <path [attr.d]="d" />
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(20, { transform: numberAttribute });
  /** Accessible label. Omit for decorative icons (the default). */
  readonly label = input<string>();

  protected readonly paths = computed(() => ICONS[this.name()]);
}
