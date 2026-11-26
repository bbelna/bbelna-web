import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/**
 * Light/dark theme state. The initial theme is applied before first paint by
 * an inline script in `index.html` (saved preference, else system setting);
 * this service reads that state on startup and owns it afterwards.
 *
 * Templates should not branch on `theme()` for markup that differs between
 * server and client (the server can't know the theme); use `dark:` utilities.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly _theme = signal<Theme>(this.readInitialTheme());
  readonly theme = this._theme.asReadonly();

  toggle(): void {
    this.set(this._theme() === 'dark' ? 'light' : 'dark');
  }

  set(theme: Theme): void {
    this._theme.set(theme);
    this.document.documentElement.classList.toggle('dark', theme === 'dark');
    if (this.isBrowser) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch {
        // Storage unavailable (private mode, etc.). The theme still applies
        // for this visit.
      }
    }
  }

  private readInitialTheme(): Theme {
    if (!this.isBrowser) return 'light';
    return this.document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';
  }
}
