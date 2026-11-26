import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Consistent heading block for page tops (`level="1"`) and sections
 * (`level="2"`, default). Projected content renders on the right (e.g. a
 * "View all" button).
 *
 * @example
 * <app-section-heading eyebrow="Work" title="Featured projects">
 *   <a appButton variant="ghost" routerLink="/projects">View all</a>
 * </app-section-heading>
 */
@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-wrap items-end justify-between gap-4' },
  template: `
    <div class="max-w-2xl">
      @if (eyebrow()) {
        <p
          [class]="
            'mb-2 text-sm font-semibold tracking-wider text-accent ' +
            'uppercase'
          "
        >
          {{ eyebrow() }}
        </p>
      }
      @if (level() === '1') {
        <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
          {{ title() }}
        </h1>
      } @else {
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">
          {{ title() }}
        </h2>
      }
      @if (description()) {
        <p class="mt-3 text-lg text-muted">{{ description() }}</p>
      }
    </div>
    <ng-content />
  `,
})
export class SectionHeading {
  readonly title = input.required<string>();
  readonly eyebrow = input<string>();
  readonly description = input<string>();
  readonly level = input<'1' | '2'>('2');
}
