import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';

@Component({ selector: 'app-capabilities', standalone: true, imports: [RevealDirective], templateUrl: './capabilities.component.html', styleUrl: './capabilities.component.scss' })
export class CapabilitiesComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly items = [
    { index: '01', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' },
    { index: '02', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80' },
    { index: '03', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80' },
    { index: '04', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80' },
    { index: '05', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=80' },
    { index: '06', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80' }
  ];
}
