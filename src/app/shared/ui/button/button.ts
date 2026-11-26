import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap ' +
  'transition-all duration-200 select-none cursor-pointer ' +
  'disabled:pointer-events-none disabled:opacity-50';

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    'bg-linear-to-r from-accent to-accent-2 text-accent-ink shadow-sm ' +
    'hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-px',
  secondary:
    'border border-line bg-surface text-ink hover:border-accent hover:text-accent',
  ghost: 'text-muted hover:text-ink hover:bg-surface-2',
};

const SIZES: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

const SQUARE_SIZES: Record<ButtonSize, string> = {
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
};

/**
 * Styled button. Applied as an attribute so it works on both `<button>` and
 * `<a>` (including `routerLink`), keeping native semantics.
 *
 * @example
 * <a appButton routerLink="/projects">Projects</a>
 * <button appButton variant="secondary" size="sm" (click)="...">Click</button>
 * <a appButton variant="ghost" square aria-label="GitHub"><app-icon name="github" /></a>
 */
@Component({
  selector: 'a[appButton], button[appButton]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()' },
  template: '<ng-content />',
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  /** Equal width and height, for icon-only buttons. */
  readonly square = input(false, { transform: booleanAttribute });

  protected readonly classes = computed(() => {
    const size = (this.square() ? SQUARE_SIZES : SIZES)[this.size()];
    return `${BASE} ${VARIANTS[this.variant()]} ${size}`;
  });
}
