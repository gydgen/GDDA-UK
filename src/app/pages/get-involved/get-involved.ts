import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar';
import { FooterComponent } from '../../shared/components/footer/footer';
import { GetInvolvedHeroComponent } from './sections/hero/get-involved-hero';
import { GetInvolvedWaysComponent } from './sections/ways/get-involved-ways';
import { GetInvolvedCounterComponent } from './sections/counter/get-involved-counter';
import { GetInvolvedFormComponent } from './sections/form/get-involved-form';

@Component({
  selector: 'app-get-involved',
  imports: [
    NavbarComponent,
    FooterComponent,
    GetInvolvedHeroComponent,
    GetInvolvedWaysComponent,
    GetInvolvedCounterComponent,
    GetInvolvedFormComponent,
  ],
  templateUrl: './get-involved.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetInvolvedComponent {}
