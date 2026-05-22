import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Carousal, type CarouselTestimonial } from '../../../shared';
import { InvolvementPath } from '../get-involved/get-involved';

interface SponsorLogo {
  mark: string;
  name: string;
}

interface SponsorImage {
  image: string;
  imageAlt: string;
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
  imports: [RouterLink, Carousal],
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
  readonly silverSponsors: readonly SponsorImage[] = [
    {
      image: '/assets/images/sponsor-1.png',
      imageAlt: 'GDDA-UK Annual Conference',
    },
  ];
  readonly sapphireSponsors: readonly SponsorImage[] = [
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
  readonly auctionSponsors: readonly SponsorImage[] = [
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
  readonly involvementPaths: readonly InvolvementPath[] = [
    {
      icon: 'school',
      title: 'Medical Training Programs',
      text: 'Funding scholarships and advanced clinical rotations for junior doctors and dentists in both UK and Ghana.',
    },
    {
      icon: 'volunteer_activism',
      title: 'Healthcare Outreach Projects',
      text: 'Supporting medical missions and equipment donations to under-resourced hospitals across the Ghanaian region.',
    },
    {
      icon: 'groups',
      title: 'Networking Opportunities',
      text: 'Annual gala balls and professional symposia that foster mentorship and interdisciplinary collaboration.',
    },
  ];

  readonly testimonials: readonly CarouselTestimonial[] = [
    {
      id: 'alpha-health-trust',
      quote:
        'Partnering with the Ghanaian Doctors & Dentists Association has been a rewarding experience. Our support has directly contributed to improving healthcare access in underserved communities.',
    },
    {
      id: 'nexus-lifecare',
      quote:
        'The strategic sponsorship opportunities provided by GDDA-UK have enabled us to align our corporate social responsibility goals with meaningful initiatives that resonate with our values and stakeholders.',
    },
    {
      id: 'sterling-medical-systems',
      quote:
        'The annual gala balls and professional symposia organised by GDDA-UK have been invaluable for fostering mentorship and interdisciplinary collaboration, creating a vibrant community of healthcare professionals dedicated to improving outcomes in Ghana.',
    },
    {
      id: 'kingsbridge-uk',
      quote:
        'Our team has seen first-hand how GDDA-UK translates sponsorship into practical outcomes, from equipment support to specialist training that strengthens local capacity.',
    },
    {
      id: 'nova-pharma',
      quote:
        'The transparency and communication from GDDA-UK make collaboration easy. We always understand where support is going and the impact it creates.',
    },
    {
      id: 'evergreen-charity',
      quote:
        'Sponsoring GDDA-UK initiatives has expanded our reach and connected us with clinicians who are deeply committed to sustainable health improvements.',
    },
    {
      id: 'bridgepoint-consulting',
      quote:
        'This partnership goes beyond branding. It is a meaningful platform for contributing to mentorship, outreach, and long-term healthcare resilience.',
    },
  ];
}
