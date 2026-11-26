import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { renderTextWithMath } from './render-tex';

/**
 * Renders text containing `$inline$` and `$$display$$` TeX into HTML.
 *
 * The input is escaped and KaTeX output is trusted (Angular's sanitizer would
 * otherwise strip the inline styles KaTeX needs). Only use with authored
 * content, never with user-submitted strings.
 *
 * @example <p [innerHTML]="'Let $x \\in \\mathbb{R}$.' | tex"></p>
 */
@Pipe({ name: 'tex' })
export class TexPipe implements PipeTransform {
  private readonly sanitizer = inject(DomSanitizer);

  transform(text: string | null | undefined): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      text ? renderTextWithMath(text) : '',
    );
  }
}
