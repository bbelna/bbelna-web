import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { renderTex } from './render-tex';

/**
 * Renders a single TeX expression. Display mode (centered block) is the
 * default; pass `inline` for inline math.
 *
 * @example
 * <app-math tex="\int_0^1 x^2\,dx = \tfrac{1}{3}" />
 * <app-math inline tex="\alpha" />
 */
@Component({
  selector: 'app-math',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.block]': '!inline()',
    '[innerHTML]': 'html()',
  },
  template: '',
})
export class MathExpression {
  private readonly sanitizer = inject(DomSanitizer);

  readonly tex = input.required<string>();
  readonly inline = input(false, { transform: booleanAttribute });

  protected readonly html = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(
      renderTex(this.tex(), !this.inline()),
    ),
  );
}
