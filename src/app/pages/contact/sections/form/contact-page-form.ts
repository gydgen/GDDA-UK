import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-page-form.html',
  styleUrl: './contact-page-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageFormComponent {
  private readonly fb = inject(FormBuilder);

  readonly form: FormGroup = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    specialty: [''],
    message: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.form.valid) {
      // Form submission handled here
    }
  }
}
