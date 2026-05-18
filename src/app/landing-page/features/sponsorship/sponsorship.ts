import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SponsorLogo {
  mark: string;
  name: string;
}

interface SponsorshipPath {
  theme: 'navy' | 'light';
  label: string;
  title: string;
  text: string;
  points: readonly string[];
  actionLabel: string;
  actionLink: string;
}

@Component({
  selector: 'app-sponsorship',
  imports: [RouterLink],
  templateUrl: './sponsorship.html',
  styleUrl: './sponsorship.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sponsorship {
  readonly sponsorLogos: readonly SponsorLogo[] = [
    { mark: 'NHS', name: 'NHS England' },
    { mark: 'BMA', name: 'British Medical Association' },
    { mark: 'GMC', name: 'General Medical Council' },
    { mark: 'RCP', name: 'Royal College of Physicians' },
    { mark: 'RCS', name: 'Royal College of Surgeons' },
    { mark: 'RCPCH', name: 'Royal College of Paediatrics' },
    { mark: 'NMC', name: 'Nursing and Midwifery Council' },
    { mark: 'GMA', name: 'Ghana Medical Association' },
  ];
  readonly silverSponsors: readonly any[] = [
    {
      image: '/assets/images/sponsor-1.png',
      imageAlt: 'GDDA-UK Annual Conference',
    },
  ];
  readonly sapphireSponsors: readonly any[] = [
    {
      image: '/assets/images/sponsor-2.png',
      imageAlt: 'GDDA-UK Annual Conference',
    },
    {
      image: '/assets/images/sponsor-3.png',
      imageAlt: 'GDDA-UK Annual Conference',
    },
    {
      image: '/assets/images/sponsor-4.png',
      imageAlt: 'GDDA-UK Annual Conference',
    },
    {
      image: '/assets/images/sponsor-5.png',
      imageAlt: 'GDDA-UK Annual Conference',
    },
    {
      image: '/assets/images/sponsor-6.png',
      imageAlt: 'GDDA-UK Annual Conference',
    },
    {
      image: '/assets/images/sponsor-7.png',
      imageAlt: 'GDDA-UK Annual Conference',
    },
    {
      image: '/assets/images/sponsor-8.png',
      imageAlt: 'GDDA-UK Annual Conference',
    },
    {
      image: '/assets/images/sponsor-9.png',
      imageAlt: 'GDDA-UK Annual Conference',
    },
  ];
  readonly auctionSponsors: readonly any[] = [
    {
      image: '/assets/images/auction-1.png',
      imageAlt: 'GDDA-UK Annual Conference',
    },
    {
      image: '/assets/images/auction-2.png',
      imageAlt: 'GDDA-UK Annual Conference',
    },
    {
      image: '/assets/images/auction-3.png',
      imageAlt: 'GDDA-UK Annual Conference',
    },
    {
      image: '/assets/images/auction-4.png',
      imageAlt: 'GDDA-UK Annual Conference',
    },
    {
      image: '/assets/images/auction-5.png',
      imageAlt: 'GDDA-UK Annual Conference',
    },
  ];

  readonly sponsorshipPaths: readonly SponsorshipPath[] = [
    {
      theme: 'navy',
      label: 'Strategic Sponsorship',
      title: 'Partner with us on flagship events and programmes',
      text: 'Ideal for organisations that want long-term visibility and measurable community impact.',
      points: [
        'Brand placement across major GDDA-UK events',
        'Direct engagement with healthcare professionals',
        'Co-developed impact activities and reporting',
      ],
      actionLabel: 'Become a Sponsor',
      actionLink: '/contact',
    },
    {
      theme: 'light',
      label: 'Community Partnership',
      title: 'Support targeted projects and professional development',
      text: 'A focused option for supporting scholarships, outreach, and education-led interventions.',
      points: [
        'Project-aligned contribution opportunities',
        'Visibility through selected campaigns',
        'Flexible support options for your team',
      ],
      actionLabel: 'See Impact Areas',
      actionLink: '/impact',
    },
  ];
}
