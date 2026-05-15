import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar';
import { FooterComponent } from '../../shared/components/footer/footer';
import { ContactPageFormComponent } from './sections/form/contact-page-form';

@Component({
  selector: 'app-contact-page',
  imports: [NavbarComponent, FooterComponent, ContactPageFormComponent],
  templateUrl: './contact-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {}
