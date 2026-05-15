import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-events-newsletter',
  imports: [ReactiveFormsModule],
  templateUrl: './events-newsletter.html',
  styleUrl: './events-newsletter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsNewsletterComponent {
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  readonly submitted = signal(false);
  readonly submitError = signal(false);

  readonly benefits = [
    'Early access to event tickets',
    'Members-only webinar invites',
    'Ghana outreach updates',
    'Quarterly newsletter',
  ];

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted.set(true);
      this.submitError.set(false);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
      this.submitError.set(true);
    }
  }

  get emailControl() {
    return this.form.controls['email'];
  }
}
