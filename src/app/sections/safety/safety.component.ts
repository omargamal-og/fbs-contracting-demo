import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';

@Component({ selector: 'app-safety', standalone: true, imports: [RevealDirective], templateUrl: './safety.component.html', styleUrl: './safety.component.scss' })
export class SafetyComponent { protected readonly i18n = inject(LanguageService); }
