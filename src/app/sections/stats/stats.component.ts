import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';

@Component({ selector: 'app-stats', standalone: true, imports: [RevealDirective], templateUrl: './stats.component.html', styleUrl: './stats.component.scss' })
export class StatsComponent { protected readonly i18n = inject(LanguageService); }
