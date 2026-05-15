import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar';
import { FooterComponent } from '../../shared/components/footer/footer';
import { HeroComponent } from './sections/hero/hero';
import { AboutSectionComponent } from './sections/about/about';
import { MembershipSectionComponent } from './sections/membership/membership';
import { ImpactSectionComponent } from './sections/impact/impact';
import { EventsSectionComponent } from './sections/events/events';
import { NewsSectionComponent } from './sections/news/news';
import { TestimonialsSectionComponent } from './sections/testimonials/testimonials';
import { ContactSectionComponent } from './sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutSectionComponent,
    MembershipSectionComponent,
    ImpactSectionComponent,
    EventsSectionComponent,
    NewsSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
