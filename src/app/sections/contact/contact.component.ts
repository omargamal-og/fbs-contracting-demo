import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';

@Component({ selector: 'app-contact', standalone: true, imports: [ReactiveFormsModule, RevealDirective], templateUrl: './contact.component.html', styleUrl: './contact.component.scss' })
export class ContactComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly submitted = signal(false);
  protected readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    company: new FormControl('', { nonNullable: true }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10)] })
  });
  protected submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.submitted.set(true); this.form.reset();
  }
}
