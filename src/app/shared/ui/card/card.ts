import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

const BASE =
  'relative flex flex-col gap-3 rounded-2xl border border-line bg-surface ' +
  'p-6 transition-all duration-200';
const INTERACTIVE =
  'hover:-translate-y-0.5 hover:border-accent hover:shadow-xl ' +
  'hover:shadow-accent/10';

/**
 * Surface container with a border and rounded corners. Set `interactive` for a
 * hover lift (useful when the card is wrapped in, or contains, a link).
 *
 * @example
 * <app-card interactive>
 *   <h3>Title</h3>
 *   <p>Body</p>
 * </app-card>
 */
@Component({
  selector: 'app-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()' },
  template: '<ng-content />',
})
export class Card {
  readonly interactive = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() =>
    this.interactive() ? `${BASE} ${INTERACTIVE}` : BASE,
  );
}
