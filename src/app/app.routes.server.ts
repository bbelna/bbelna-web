import { RenderMode, ServerRoute } from '@angular/ssr';

import { postSlugs } from '@core/services/content.service';

/**
 * Content pages are prerendered to static HTML at build time. Unknown URLs
 * are server-rendered with a real 404 status.
 */
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'projects', renderMode: RenderMode.Prerender },
  { path: 'research', renderMode: RenderMode.Prerender },
  { path: 'writing', renderMode: RenderMode.Prerender },
  {
    path: 'writing/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => postSlugs().map((slug) => ({ slug })),
  },
  { path: '**', renderMode: RenderMode.Server, status: 404 },
];
