import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, OnDestroy, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact implements OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly formspreeEndpoint = 'https://formspree.io/f/xjgzorpb';
  private readonly ccRecipient = 'asarerichmond94@gmail.com';
  private toastTimeoutId: ReturnType<typeof setTimeout> | null = null;

  readonly showSuccessToast = signal(false);

  readonly form: FormGroup = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    specialty: [''],
    message: ['', Validators.required],
  });

  onSubmit(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    const formValue = this.form.getRawValue();

    this.http
      .post(
        this.formspreeEndpoint,
        {
          name: formValue.fullName,
          email: formValue.email,
          subject: formValue.subject,
          specialty: formValue.specialty,
          message: formValue.message,
          _cc: this.ccRecipient,
        },
        {
          headers: { Accept: 'application/json' },
        },
      )
      .subscribe({
        next: () => {
          this.form.reset();
          this.displaySuccessToast();
        },
        error: (error: unknown) => {
          console.error('Failed to submit Contact form to Formspree.', error);
        },
      });
  }

  ngOnDestroy(): void {
    if (this.toastTimeoutId !== null) {
      clearTimeout(this.toastTimeoutId);
      this.toastTimeoutId = null;
    }
  }

  private displaySuccessToast(): void {
    this.showSuccessToast.set(true);

    if (this.toastTimeoutId !== null) {
      clearTimeout(this.toastTimeoutId);
    }

    this.toastTimeoutId = setTimeout(() => {
      this.showSuccessToast.set(false);
      this.toastTimeoutId = null;
    }, 4000);
  }
}
