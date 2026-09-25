import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=88',
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=88',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=88'
];

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  protected readonly i18n = inject(LanguageService);
  protected readonly slides = computed(() =>
    this.i18n.copy().hero.slides.map((slide, index) => ({ ...slide, image: HERO_IMAGES[index] }))
  );

  protected readonly activeSlide = signal(0);
  protected readonly mouseX = signal(50);
  protected readonly mouseY = signal(50);
  private rotationTimer?: number;

  ngOnInit(): void {
    this.startRotation();
  }

  ngOnDestroy(): void {
    if (this.rotationTimer) window.clearInterval(this.rotationTimer);
  }

  protected selectSlide(index: number): void {
    this.activeSlide.set(index);
    this.startRotation();
  }

  protected onPointerMove(event: PointerEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    this.mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
    this.mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
  }

  private startRotation(): void {
    if (this.rotationTimer) window.clearInterval(this.rotationTimer);
    this.rotationTimer = window.setInterval(() => {
      this.activeSlide.update((value) => (value + 1) % this.slides().length);
    }, 5600);
  }
}
