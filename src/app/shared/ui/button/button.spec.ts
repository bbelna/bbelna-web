import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { Button, ButtonVariant } from './button';

@Component({
  imports: [Button],
  template: `<button
    appButton
    class="extra"
    [variant]="variant()"
    [square]="square()"
  >
    Go
  </button>`,
})
class Host {
  readonly variant = signal<ButtonVariant>('primary');
  readonly square = signal(false);
}

describe('Button', () => {
  it('applies variant classes and keeps consumer classes', async () => {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    const el: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    expect(el.classList).toContain('extra');
    expect(el.classList).toContain('from-accent');

    fixture.componentInstance.variant.set('secondary');
    fixture.componentInstance.square.set(true);
    await fixture.whenStable();

    expect(el.classList).toContain('extra');
    expect(el.classList).toContain('border-line');
    expect(el.classList).not.toContain('from-accent');
    expect(el.classList).toContain('size-10');
  });
});
