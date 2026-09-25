import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

@Component({ selector: 'app-footer', standalone: true, templateUrl: './footer.component.html', styleUrl: './footer.component.scss' })
export class FooterComponent { protected readonly i18n = inject(LanguageService); }
