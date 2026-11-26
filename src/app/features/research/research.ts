import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ContentService } from '@core/services/content.service';
import { SectionHeading } from '@shared/ui';

import { PublicationItem } from './publication-item/publication-item';

@Component({
  selector: 'app-research',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeading, PublicationItem],
  template: `
    <section class="page-container pt-16 sm:pt-24">
      <app-section-heading
        level="1"
        eyebrow="Research"
        title="Papers, preprints & talks"
        [description]="
          'I am an active independent researcher in mathematics. ' +
          'My current interests lie in mathematical physics ' +
          'and anywhere mathematics and computing intersect.'
        "
      />
      <ol class="mt-12 flex max-w-3xl flex-col divide-y divide-line">
        @for (pub of publications; track pub.title) {
          <li class="py-8 first:pt-0">
            <app-publication-item [publication]="pub" />
          </li>
        }
      </ol>
    </section>
  `,
})
export class Research {
  protected readonly publications = inject(ContentService).publications;
}
