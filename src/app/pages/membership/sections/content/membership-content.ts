import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-membership-content',
  imports: [ReactiveFormsModule],
  templateUrl: './membership-content.html',
  styleUrl: './membership-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembershipContentComponent {
  private readonly fb = inject(FormBuilder);

  readonly applicationForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    gmcGdcNumber: ['', Validators.required],
    specialty: ['', Validators.required],
    graduationYear: ['', Validators.required],
    currentEmployer: ['', Validators.required],
    heardAbout: [''],
  });

  onSubmit(): void {
    if (this.applicationForm.valid) {
      // Application submission handled here
    }
  }
}
