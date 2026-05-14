import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface GivingCard {
  icon: string;
  title: string;
  description: string;
}

interface InvolvementOption {
  icon: string;
  title: string;
  description: string;
}

interface InstagramPost {
  image: string;
  alt: string;
  link: string;
}

@Component({
  selector: 'app-event',
  imports: [NgOptimizedImage],
  templateUrl: './event.html',
  styleUrl: './event.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Event {
  readonly givingCards: GivingCard[] = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
      title: 'Time',
      description: 'Volunteer your time for our community outreach programs and administrative excellence.',
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M12 12h.01M17 12h.01M7 12h.01"/></svg>`,
      title: 'Money',
      description: 'Direct financial contributions fund critical healthcare missions and educational bursaries.',
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
      title: 'Skills',
      description: 'Offer your specialized clinical or professional expertise to inspire the next generation.',
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
      title: 'Gifts',
      description: 'Donations of medical equipment and professional resources to supported facilities in Ghana.',
    },
  ];

  readonly involvementOptions: InvolvementOption[] = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
      title: 'Become An Ambassador',
      description: 'Represent GDDA-UK within your hospital trust or university. Champion our values and expand our professional reach.',
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      title: 'Host or Plan a Local Event',
      description: 'Organise networking hubs, clinical workshops, or social gatherings to strengthen the bonds among colleagues.',
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: 'Become a Member',
      description: 'Unlock exclusive academic journals, professional networking events, and the privilege of a global association.',
    },
  ];

  readonly instagramPosts: InstagramPost[] = [
    { image: 'assets/images/about-annual-health-conference.png', alt: 'GDDA-UK community event', link: 'https://instagram.com/gdda_uk' },
    { image: 'assets/images/about-innovation-in-tropical.jpg', alt: 'GDDA-UK Independence Day celebration', link: 'https://instagram.com/gdda_uk' },
    { image: 'assets/images/about-webinar-nhs.jpg', alt: 'GDDA-UK Estate Series', link: 'https://instagram.com/gdda_uk' },
    { image: 'assets/images/about-diabetic-project.png', alt: 'Rare Disease Day awareness', link: 'https://instagram.com/gdda_uk' },
  ];

}

