import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  private readonly fb = inject(FormBuilder);

  readonly form: FormGroup = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    specialty: [''],
    message: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.form.valid) {
      // Form submission handled here
    }
  }
}
