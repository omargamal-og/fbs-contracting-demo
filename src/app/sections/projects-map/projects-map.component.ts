import { AfterViewInit, Component, computed, ElementRef, inject, OnDestroy, signal, ViewChild } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { CityKey, LanguageService } from '../../core/i18n/language.service';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface CityPin { city: CityKey; x: number; y: number; }

@Component({ selector: 'app-projects-map', standalone: true, imports: [RevealDirective], templateUrl: './projects-map.component.html', styleUrl: './projects-map.component.scss' })
export class ProjectsMapComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapStage') private mapStage?: ElementRef<HTMLElement>;
  protected readonly i18n = inject(LanguageService);
  protected readonly pins: CityPin[] = [
    { city: 'tabuk', x: 28, y: 20 }, { city: 'madinah', x: 29, y: 43 }, { city: 'jeddah', x: 24, y: 61 },
    { city: 'taif', x: 33, y: 59 }, { city: 'riyadh', x: 61, y: 49 }
  ];
  protected readonly selectedCity = signal<CityKey>('riyadh');
  protected readonly mapVisible = signal(false);
  protected readonly cityProjects = computed(() => PROJECTS.filter((project) => project.city === this.selectedCity()));
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!this.mapStage || typeof IntersectionObserver === 'undefined') { this.mapVisible.set(true); return; }
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { this.mapVisible.set(true); this.observer?.disconnect(); }
    }, { threshold: 0.28 });
    this.observer.observe(this.mapStage.nativeElement);
  }
  ngOnDestroy(): void { this.observer?.disconnect(); }
  protected selectCity(city: CityKey): void { this.selectedCity.set(city); }
  protected projectCountLabel(): string {
    const count = this.cityProjects().length;
    return this.i18n.language() === 'ar'
      ? `${count} مشروع ${this.i18n.copy().footprint.projectCount}`
      : `${count} project${count === 1 ? '' : 's'} ${this.i18n.copy().footprint.projectCount}`;
  }
}
