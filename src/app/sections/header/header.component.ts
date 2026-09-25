import { Component, HostListener, inject, signal } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly i18n = inject(LanguageService);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected switchLanguage(): void {
    this.i18n.toggle();
    this.closeMenu();
  }
}
