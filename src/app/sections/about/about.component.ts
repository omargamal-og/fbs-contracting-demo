import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';

@Component({ selector: 'app-about', standalone: true, imports: [RevealDirective], templateUrl: './about.component.html', styleUrl: './about.component.scss' })
export class AboutComponent { protected readonly i18n = inject(LanguageService); }
