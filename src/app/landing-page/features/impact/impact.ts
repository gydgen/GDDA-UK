import { Component, ChangeDetectionStrategy, AfterViewInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface StatItem {
  value: string;
  rawValue: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

interface ProgrammeItem {
  tag: string;
  title: string;
  description: string;
  outcomes: string[];
}

@Component({
  selector: 'app-impact',
  imports: [RouterLink],
  templateUrl: './impact.html',
  styleUrl: './impact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Impact {
  readonly stats: StatItem[] = [
    { value: '£9,900', rawValue: 9900, label: 'Total Funds Raised', prefix: '£' },
    { value: '£3,000', rawValue: 3000, label: 'Directly Distributed', prefix: '£' },
    { value: '500+', rawValue: 500, label: 'Volunteers Engaged', suffix: '+' },
    { value: '600', rawValue: 600, label: 'Beneficiaries Supported' },
  ];

  readonly programmes: ProgrammeItem[] = [
    {
      tag: '2020',
      title: 'COVID-19 Emergency Response',
      description: 'During the pandemic, UDDA-UK mobilised healthcare professionals and raised emergency funds to support frontline workers and vulnerable communities.',
      outcomes: ['PPE distributed to 200+ workers', 'Mental health support line launched', '£3,000 emergency relief distributed'],
    },
    {
      tag: '2021',
      title: 'Obstetric Fistula Aid Programme',
      description: 'Partnering with maternal health organisations, UDDA-UK funded treatment and rehabilitation for women affected by obstetric fistula in underserved regions.',
      outcomes: ['15 surgeries funded', 'Rehabilitation support for 30+ women', 'Awareness campaign reaching 5,000+'],
    },
    {
      tag: '2023',
      title: 'Gathering for Excellence Initiative',
      description: 'Our flagship annual conference expanded into a year-round initiative, providing scholarships, mentorship, and career development for diaspora healthcare students.',
      outcomes: ['3 scholarships awarded', '50+ mentorship pairings', '300 delegates from 12 countries'],
    },
  ];

  readonly testimonials: TestimonialItem[] = [
    {
      quote: 'UDDA-UK gave me the mentorship and support I needed to navigate the NHS as a healthcare professional from Ghana. I am forever grateful.',
      name: 'Dr. Abena Mensah',
      role: 'NHS Consultant Physician',
    },
    {
      quote: 'The COVID-19 response from UDDA-UK was incredible. They mobilised our community faster than any organisation I have seen. Truly inspirational work.',
      name: 'Kwame Asante',
      role: 'Community Health Worker',
    },
    {
      quote: 'Being part of the Gathering for Excellence conference changed my career trajectory. The connections I made opened doors I never knew existed.',
      name: 'Efua Darko',
      role: 'Medical Student, Imperial College London',
    },
  ];
}

