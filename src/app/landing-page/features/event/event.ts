import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface EventPortfolioCard {
  variant: 'image' | 'info-navy' | 'info-gold' | 'info-gray';
  title: string;
  summary: string;
  actionLabel: string;
  actionLink: string;
  image?: string;
}

interface UpcomingEvent {
  day: string;
  month: string;
  title: string;
  location: string;
  type: string;
}

@Component({
  selector: 'app-event',
  imports: [NgOptimizedImage, RouterLink, ReactiveFormsModule],
  templateUrl: './event.html',
  styleUrl: './event.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Event {
  private readonly fb = inject(FormBuilder);

  readonly portfolioCards: readonly EventPortfolioCard[] = [
    {
      variant: 'image',
      title: 'Annual Health Conference',
      summary:
        'Our flagship gathering focusing on networking, continuous clinical learning, and vibrant social interactions.',
      image: '/assets/images/event-card-1.png',
      actionLabel: 'Explore Conference',
      actionLink: '/event',
    },
    {
      variant: 'image',
      title: 'Charity Gala',
      summary:
        'A night of prestige and purpose, raising significant funds for selected healthcare initiatives in Ghana and the UK.',
      image: '/assets/images/event-card-2.png',
      actionLabel: 'View Gala Overview',
      actionLink: '/impact',
    },
    {
      variant: 'info-navy',
      title: 'AGMs',
      summary:
        'Exclusive for paying members. A time for governance, accountability, and shaping the future of GDDA-UK during the conference weekend.',
      actionLabel: 'Become a Member to Attend',
      actionLink: '/event',
    },
    {
      variant: 'image',
      title: 'Webinars & Clinical Forums',
      summary:
        'Roundtables, webinars, and specialist updates for members and prospective collaborators.',
      image: '/assets/images/event-card-3.png',
      actionLabel: 'See Learning Events',
      actionLink: '/get-involved',
    },
    {
      variant: 'info-gold',
      title: 'Health Seminars',
      summary: 'Regular clinical education sessions led by international experts. Elevating the standard of care through continuous knowledge sharing.',
      actionLabel: 'Register Interest',
      actionLink: '/contact',
    },
    {
      variant: 'info-gold',
      title: 'Creating for excellence',
      summary: 'Our events combine learning, mentorship, and service in one connected programme.',
      actionLabel: 'Register Interest',
      actionLink: '/contact',
    },
  ];

  readonly upcomingEvents: readonly UpcomingEvent[] = [
    {
      day: '24',
      month: 'Mar 2026',
      title: 'Annual Health Conference & Dinner Dance',
      location: 'London, UK',
      type: 'Conference',
    },
    {
      day: '15',
      month: 'Jun 2026',
      title: 'Ghana Healthcare Webinar Series',
      location: 'Online',
      type: 'Webinar',
    },
    {
      day: '09',
      month: 'Aug 2026',
      title: 'Summer Networking Reception',
      location: 'Birmingham, UK',
      type: 'Networking',
    },
    {
      day: '12',
      month: 'Oct 2026',
      title: 'Medical Outreach Planning Meeting',
      location: 'Manchester, UK',
      type: 'Planning',
    },
  ];

  readonly newsletterForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  readonly subscribed = signal(false);

  onNewsletterSubmit(): void {
    if (this.newsletterForm.valid) {
      this.subscribed.set(true);
      this.newsletterForm.reset();
      return;
    }

    this.newsletterForm.markAllAsTouched();
  }

  get emailInvalid(): boolean {
    const control = this.newsletterForm.controls.email;
    return control.invalid && control.touched;
  }
}
