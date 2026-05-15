import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar';
import { FooterComponent } from '../../shared/components/footer/footer';
import { SponsorshipHeroComponent } from './sections/hero/sponsorship-hero';
import { SponsorshipContentComponent } from './sections/content/sponsorship-content';

@Component({
  selector: 'app-sponsorship',
  imports: [NavbarComponent, FooterComponent, SponsorshipHeroComponent, SponsorshipContentComponent],
  templateUrl: './sponsorship.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SponsorshipComponent {}
