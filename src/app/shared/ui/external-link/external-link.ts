import { computed, Directive, input } from '@angular/core';

/**
 * Opens absolute http(s) links in a new tab with safe `rel`; leaves `mailto:`,
 * relative and hash links alone.
 *
 * @example <a appExternal [href]="link.href">{{ link.label }}</a>
 */
@Directive({
  selector: 'a[appExternal]',
  host: {
    '[attr.href]': 'href()',
    '[attr.target]': 'isExternal() ? "_blank" : null',
    '[attr.rel]': 'isExternal() ? "noopener noreferrer" : null',
  },
})
export class ExternalLink {
  readonly href = input.required<string>();

  protected readonly isExternal = computed(() =>
    /^https?:\/\//.test(this.href()),
  );
}
