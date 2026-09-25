import { Component, computed, inject, signal } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { CategoryKey, LanguageService } from '../../core/i18n/language.service';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

type Filter = 'all' | CategoryKey;

@Component({ selector: 'app-projects', standalone: true, imports: [RevealDirective], templateUrl: './projects.component.html', styleUrl: './projects.component.scss' })
export class ProjectsComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly filters: Filter[] = ['all', 'residential', 'commercial'];
  protected readonly activeFilter = signal<Filter>('all');
  protected readonly projects = computed(() => {
    const filter = this.activeFilter();
    return filter === 'all' ? PROJECTS : PROJECTS.filter((project) => project.category === filter);
  });
  protected setFilter(filter: Filter): void { this.activeFilter.set(filter); }
}
