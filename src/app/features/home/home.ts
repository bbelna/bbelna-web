import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ContentService } from '@core/services/content.service';
import { ProjectCard } from '@features/projects/project-card/project-card';
import { PublicationItem } from '../research/publication-item/publication-item';
import { PostItem } from '@features/writing/post-item/post-item';
import { MathExpression, TexPipe } from '@shared/math';
import {
  Button,
  Card,
  EmptyState,
  ExternalLink,
  Icon,
  SectionHeading,
  Tag,
} from '@shared/ui';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgOptimizedImage,
    RouterLink,
    Button,
    Card,
    EmptyState,
    ExternalLink,
    Icon,
    SectionHeading,
    Tag,
    MathExpression,
    TexPipe,
    ProjectCard,
    PublicationItem,
    PostItem,
  ],
  templateUrl: './home.html',
})
export class Home {
  private readonly content = inject(ContentService);

  // The equation on the hero card: swap in a favorite of your own.
  protected readonly heroFormula =
    '\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} ' +
    'f(x)\\, e^{-2\\pi i x \\xi}\\, dx';
  protected readonly profile = this.content.profile;
  protected readonly projects = this.content.featuredProjects.slice(0, 3);
  protected readonly publications = this.content.featuredPublications.slice(
    0,
    2,
  );
  protected readonly posts = this.content.recentPosts(3);
}
