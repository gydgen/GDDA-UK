import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Stat {
  value: string;
  label: string;
  description: string;
}

interface EventCard {
  id: number;
  tag: string;
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt: string;
}

@Component({
  selector: 'app-about',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly stats: Stat[] = [
    { value: '£9,900', label: 'Raised', description: 'In charitable donations' },
    { value: '£3,000', label: 'Distributed', description: 'In direct aid' },
    { value: '500+', label: 'Volunteers', description: 'Across the UK' },
    { value: '600', label: 'Beneficiaries', description: 'Lives impacted' },
  ];

  readonly milestones: EventCard[] = [
    {
      id: 1,
      tag: 'Humanitarian',
      title: 'COVID-19 Response & Humanitarian Aid',
      description: 'UDDA-UK mobilised healthcare workers and community leaders to deliver critical aid, PPE, and awareness campaigns during the global pandemic.',
      date: '2020 – 2021',
      image: 'assets/images/events/covid-response.jpg',
      imageAlt: 'Healthcare workers distributing PPE during COVID-19',
    },
    {
      id: 2,
      tag: 'Medical Aid',
      title: 'Restoring Dignity: The Obstetric Fistula Aid',
      description: 'A life-changing programme funding surgical interventions for women suffering from obstetric fistula — restoring dignity and health.',
      date: 'Nov 2019',
      image: 'assets/images/events/fistula-aid.jpg',
      imageAlt: 'Medical professionals providing care',
    },
    {
      id: 3,
      tag: 'Annual Conference',
      title: 'Gathering for Excellence',
      description: 'Our flagship annual conference brings together diaspora healthcare professionals, policymakers, and community advocates to drive change.',
      date: 'Ongoing',
      image: 'assets/images/events/conference.jpg',
      imageAlt: 'Professionals at the Gathering for Excellence conference',
    },
  ];

  readonly eventTypes = [
    { icon: '🏥', label: 'Health Conferences' },
    { icon: '🎗️', label: 'Charity Galas' },
    { icon: '📚', label: 'Education Seminars' },
    { icon: '🤝', label: 'Community Outreach' },
    { icon: '🏃', label: 'Fundraising Runs' },
    { icon: '🍽️', label: 'Networking Dinners' },
  ];
}

