import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MathExpression } from '@shared/math';
import { Button, Icon } from '@shared/ui';

@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Button, Icon, MathExpression],
  template: `
    <section
      class="page-container flex flex-col items-center py-32 text-center"
    >
      <p class="text-gradient text-7xl font-extrabold tracking-tight">404</p>
      <h1 class="mt-4 text-2xl font-bold">Page not found</h1>
      <div class="mt-4 text-muted">
        <app-math
          tex="\\text{page} \\notin \\operatorname{im}(\\text{router})"
        />
      </div>
      <a appButton routerLink="/" class="mt-8">
        <app-icon name="arrow-left" [size]="16" />
        Back home
      </a>
    </section>
  `,
})
export class NotFound {}
