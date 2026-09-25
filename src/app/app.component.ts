import { Component, inject, signal } from '@angular/core';
import { SiteIntroComponent } from './sections/site-intro/site-intro.component';
import { HeaderComponent } from './sections/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { CapabilitiesComponent } from './sections/capabilities/capabilities.component';
import { StatsComponent } from './sections/stats/stats.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ProjectsMapComponent } from './sections/projects-map/projects-map.component';
import { SafetyComponent } from './sections/safety/safety.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';
import { LanguageService } from './core/i18n/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SiteIntroComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    CapabilitiesComponent,
    StatsComponent,
    ProjectsComponent,
    ProjectsMapComponent,
    SafetyComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    @if (showIntro()) {
      <app-site-intro (finished)="finishIntro()" />
    } @else {
      <div class="site-reveal">
        <app-header />
        <main>
          <app-hero />
          <app-about />
          <app-capabilities />
          <app-stats />
          <app-projects />
          <app-projects-map />
          <app-safety />
          <app-contact />
        </main>
        <app-footer />
      </div>
    }
  `,
  styles: [`
    .site-reveal { animation: siteReveal .7s ease both; }
    @keyframes siteReveal { from { opacity: .4; } to { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) { .site-reveal { animation: none; } }
  `]
})
export class AppComponent {
  private readonly languageService = inject(LanguageService);
  protected readonly showIntro = signal(true);
  protected finishIntro(): void { this.showIntro.set(false); }
}
