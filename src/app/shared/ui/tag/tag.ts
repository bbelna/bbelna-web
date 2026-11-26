import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

export type TagTone = 'neutral' | 'accent';

const BASE =
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';
const TONES: Record<TagTone, string> = {
  neutral: 'bg-surface-2 text-muted',
  accent: 'bg-accent/10 text-accent',
};

/**
 * Small pill label for tech stacks, topics, publication types, etc.
 *
 * @example <app-tag>TypeScript</app-tag> <app-tag tone="accent">Preprint</app-tag>
 */
@Component({
  selector: 'app-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()' },
  template: '<ng-content />',
})
export class Tag {
  readonly tone = input<TagTone>('neutral');

  protected readonly classes = computed(() => `${BASE} ${TONES[this.tone()]}`);
}
