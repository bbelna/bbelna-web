import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';

import type { Post } from '@core/models/content';
import { ContentService } from '@core/services/content.service';

const slugOf = (route: Parameters<ResolveFn<unknown>>[0]) =>
  route.paramMap.get('slug') ?? '';

/**
 * Resolves the post for `:slug`, redirecting to the 404 page if it doesn't
 * exist.
 */
export const postResolver: ResolveFn<Post> = (route) =>
  inject(ContentService).post(slugOf(route)) ??
  new RedirectCommand(inject(Router).parseUrl('/not-found'));

export const postTitleResolver: ResolveFn<string> = (route) =>
  inject(ContentService).post(slugOf(route))?.title ?? 'Not found';

/**
 * Feeds `data.description`, which PageTitleStrategy uses for the meta
 * description.
 */
export const postDescriptionResolver: ResolveFn<string> = (route) =>
  inject(ContentService).post(slugOf(route))?.summary ?? '';
