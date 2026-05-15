import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar';
import { FooterComponent } from '../../shared/components/footer/footer';
import { EventsHeroComponent } from './sections/hero/events-hero';
import { EventsListingComponent } from './sections/listing/events-listing';
import { EventsNewsletterComponent } from './sections/newsletter/events-newsletter';

@Component({
  selector: 'app-events-page',
  imports: [
    NavbarComponent,
    FooterComponent,
    EventsHeroComponent,
    EventsListingComponent,
    EventsNewsletterComponent,
  ],
  templateUrl: './events-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsPageComponent {}
