import { Component, ChangeDetectionStrategy } from '@angular/core';

interface SponsorTier {
  name: string;
  amount: string;
  badge: string;
  description: string;
  perks: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-sponsorship',
  imports: [],
  templateUrl: './sponsorship.html',
  styleUrl: './sponsorship.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sponsorship {
  readonly tiers: SponsorTier[] = [
    {
      name: 'Bronze',
      amount: '£500+',
      badge: 'Community Supporter',
      description: 'A meaningful contribution that makes a real difference to our community programmes.',
      perks: [
        'Name/logo in event programme',
        '2 complimentary event tickets',
        'Social media recognition',
        'Annual impact report',
      ],
    },
    {
      name: 'Silver',
      amount: '£2,500+',
      badge: 'Committed Partner',
      description: 'A significant investment that powers our health and education initiatives for a year.',
      perks: [
        'Branding on event materials',
        '5 complimentary event tickets',
        'Featured in newsletter (2x)',
        'Dedicated social media post',
        'Logo on UDDA-UK website',
        'Quarterly impact briefings',
      ],
      featured: true,
    },
    {
      name: 'Gold',
      amount: '£5,000+',
      badge: 'Impact Leader',
      description: 'A transformative partnership that funds landmark programmes and positions your brand as a leader in diaspora health equity.',
      perks: [
        'Premium branding at all events',
        '10 complimentary event tickets',
        'Keynote speaking opportunity',
        'Dedicated feature in annual report',
        'Monthly newsletter feature',
        'Priority logo placement',
        'Personal impact presentation',
        'VIP access to all events',
      ],
    },
  ];

  readonly pastSponsors = [
    { name: 'HealthFirst UK', logo: 'assets/images/sponsors/sponsor-1.png' },
    { name: 'MedCore Group', logo: 'assets/images/sponsors/sponsor-2.png' },
    { name: 'Global Aid Alliance', logo: 'assets/images/sponsors/sponsor-3.png' },
    { name: 'DiasporaConnect', logo: 'assets/images/sponsors/sponsor-4.png' },
    { name: 'CareInvest Partners', logo: 'assets/images/sponsors/sponsor-5.png' },
  ];
}

