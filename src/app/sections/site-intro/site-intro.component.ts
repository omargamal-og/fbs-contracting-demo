import { Component, EventEmitter, OnDestroy, OnInit, Output, inject, signal } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-site-intro',
  standalone: true,
  templateUrl: './site-intro.component.html',
  styleUrl: './site-intro.component.scss'
})
export class SiteIntroComponent implements OnInit, OnDestroy {
  @Output() finished = new EventEmitter<void>();

  protected readonly i18n = inject(LanguageService);
  protected readonly progress = signal(0);
  protected readonly leaving = signal(false);
  private progressTimer?: number;
  private finishTimer?: number;
  private leaveTimer?: number;

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';

    const startedAt = performance.now();
    const duration = 2300;

    this.progressTimer = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      const nextValue = Math.min(100, Math.round((elapsed / duration) * 100));
      this.progress.set(nextValue);
      if (nextValue >= 100 && this.progressTimer) {
        window.clearInterval(this.progressTimer);
      }
    }, 24);

    this.finishTimer = window.setTimeout(() => this.complete(), 2550);
  }

  ngOnDestroy(): void {
    if (this.progressTimer) window.clearInterval(this.progressTimer);
    if (this.finishTimer) window.clearTimeout(this.finishTimer);
    if (this.leaveTimer) window.clearTimeout(this.leaveTimer);
    document.body.style.overflow = '';
  }

  protected skip(): void {
    this.progress.set(100);
    this.complete();
  }

  private complete(): void {
    if (this.leaving()) return;
    this.leaving.set(true);
    if (this.finishTimer) window.clearTimeout(this.finishTimer);
    this.leaveTimer = window.setTimeout(() => {
      document.body.style.overflow = '';
      this.finished.emit();
    }, 900);
  }
}
