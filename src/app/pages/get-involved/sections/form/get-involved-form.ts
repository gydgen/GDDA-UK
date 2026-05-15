import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { inject } from '@angular/core';

@Component({
  selector: 'app-get-involved-form',
  imports: [ReactiveFormsModule],
  templateUrl: './get-involved-form.html',
  styleUrl: './get-involved-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetInvolvedFormComponent {
  private readonly fb = inject(FormBuilder);

  readonly submitted = signal(false);
  readonly submitSuccess = signal(false);

  readonly form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    profession: ['', Validators.required],
    interest: ['', Validators.required],
    message: [''],
  });

  onSubmit(): void {
    this.submitted.set(true);
    if (this.form.valid) {
      // In a real app, dispatch to a service here
      this.submitSuccess.set(true);
      this.form.reset();
      this.submitted.set(false);
    }
  }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && this.submitted());
  }
}
