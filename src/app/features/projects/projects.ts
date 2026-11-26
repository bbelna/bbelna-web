import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ContentService } from '@core/services/content.service';
import { SectionHeading } from '@shared/ui';

import { ProjectCard } from './project-card/project-card';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeading, ProjectCard],
  template: `
    <section class="page-container pt-16 sm:pt-24">
      <app-section-heading
        level="1"
        eyebrow="Projects"
        title="Things I've built"
        [description]="
          'Software, tools, and experiments. ' +
          'Some practical, some mathematical.'
        "
      />
      <div class="mt-12 grid gap-6 sm:grid-cols-2">
        @for (project of projects; track project.slug) {
          <app-project-card [project]="project" />
        }
      </div>
    </section>
  `,
})
export class Projects {
  protected readonly projects = inject(ContentService).projects;
}
