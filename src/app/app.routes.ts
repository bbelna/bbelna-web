import { Routes } from '@angular/router';

import {
  postDescriptionResolver,
  postResolver,
  postTitleResolver,
} from '@features/writing/post-detail/post.resolvers';

/**
 * Each route's `title` becomes "<title> · Brandon Belna" and `data.description`
 * the meta description (see PageTitleStrategy). Keep in sync with
 * app.routes.server.ts.
 */
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('@features/home/home').then((m) => m.Home),
  },
  {
    path: 'projects',
    title: 'Projects',
    data: { description: 'Software projects and experiments.' },
    loadComponent: () =>
      import('@features/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'research',
    title: 'Research',
    data: { description: 'Papers, preprints, and talks.' },
    loadComponent: () =>
      import('@features/research/research').then((m) => m.Research),
  },
  {
    path: 'writing',
    children: [
      {
        path: '',
        title: 'Writing',
        data: { description: 'Notes and essays on software and mathematics.' },
        loadComponent: () =>
          import('@features/writing/post-list/post-list').then(
            (m) => m.PostList,
          ),
      },
      {
        path: ':slug',
        title: postTitleResolver,
        resolve: { post: postResolver, description: postDescriptionResolver },
        loadComponent: () =>
          import('@features/writing/post-detail/post-detail').then(
            (m) => m.PostDetail,
          ),
      },
    ],
  },
  // Must stay last: the router matches in order.
  {
    path: '**',
    title: 'Not found',
    loadComponent: () =>
      import('@features/not-found/not-found').then((m) => m.NotFound),
  },
];
