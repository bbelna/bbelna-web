import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ThemeService } from '@core/services/theme.service';
import { NAV_ITEMS, PROFILE } from '@content/profile';
import { Button, Icon } from '@shared/ui';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, Button, Icon],
  templateUrl: './header.html',
  host: {
    class:
      'sticky top-0 z-40 block border-b border-line/60 bg-bg/80 backdrop-blur-md',
  },
})
export class Header {
  protected readonly theme = inject(ThemeService);
  protected readonly name = PROFILE.name;
  protected readonly navItems = NAV_ITEMS;
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
