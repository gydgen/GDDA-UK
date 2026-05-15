import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar';
import { FooterComponent } from '../../shared/components/footer/footer';
import { MembershipHeroComponent } from './sections/hero/membership-hero';
import { MembershipContentComponent } from './sections/content/membership-content';

@Component({
  selector: 'app-membership-page',
  imports: [NavbarComponent, FooterComponent, MembershipHeroComponent, MembershipContentComponent],
  templateUrl: './membership-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembershipPageComponent {}
