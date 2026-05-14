import { Component, ChangeDetectionStrategy } from '@angular/core';

interface InvolvementOption {
  icon: string;
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
}

@Component({
  selector: 'app-get-involved',
  imports: [],
  templateUrl: './get-involved.html',
  styleUrl: './get-involved.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetInvolved {
  readonly options: InvolvementOption[] = [
    {
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
      title: 'Volunteer',
      description: 'Lend your skills and time to our programmes. Whether you are a healthcare professional, marketer, or community organiser — we have a role for you.',
      cta: 'Become a Volunteer',
      ctaLink: '#volunteer-form',
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
      title: 'Donate',
      description: 'Your financial support powers life-changing healthcare programmes, scholarships, and community development initiatives.',
      cta: 'Donate Now',
      ctaLink: '#donate',
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8M12 17v4"/></svg>`,
      title: 'Become a Sponsor',
      description: 'Partner with UDDA-UK to align your brand with a mission of impact. Sponsorship packages available for individuals and corporates.',
      cta: 'Explore Sponsorship',
      ctaLink: '/sponsorship',
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
      title: 'Spread the Word',
      description: 'Share our story. Follow us on social media, share our events, and help us reach more people who want to make a difference.',
      cta: 'Follow Us',
      ctaLink: '#social',
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.01 4h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L4.09 11.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
      title: 'Attend an Event',
      description: 'Join us at our conferences, galas, seminars and community days. Every event is an opportunity to connect and contribute.',
      cta: 'See Events',
      ctaLink: '/event',
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
      title: 'Become a Member',
      description: 'Join a community of diaspora healthcare professionals committed to excellence, advocacy, and giving back.',
      cta: 'Join UDDA-UK',
      ctaLink: '#membership-form',
    },
  ];
}

