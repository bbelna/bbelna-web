import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ContentService } from '@core/services/content.service';
import { EmptyState, SectionHeading } from '@shared/ui';

import { PostItem } from '../post-item/post-item';

@Component({
  selector: 'app-post-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EmptyState, SectionHeading, PostItem],
  template: `
    <section class="page-container pt-16 sm:pt-24">
      <app-section-heading
        level="1"
        eyebrow="Writing"
        title="Notes & essays"
        description="On software, mathematics, and the places they meet."
      />
      @if (posts.length) {
        <ol class="mt-12 flex max-w-3xl flex-col gap-4">
          @for (post of posts; track post.slug) {
            <li><app-post-item [post]="post" /></li>
          }
        </ol>
      } @else {
        <app-empty-state
          class="mt-12 max-w-3xl"
          icon="file-text"
          message="No posts yet. Check back soon."
        />
      }
    </section>
  `,
})
export class PostList {
  protected readonly posts = inject(ContentService).posts;
}
