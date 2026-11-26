import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { Post } from '@core/models/content';
import { MathExpression, TexPipe } from '@shared/math';
import { Button, Icon, Tag } from '@shared/ui';

@Component({
  selector: 'app-post-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, RouterLink, Button, Icon, Tag, MathExpression, TexPipe],
  templateUrl: './post-detail.html',
})
export class PostDetail {
  /** Provided by `postResolver` via router component input binding. */
  readonly post = input.required<Post>();
}
