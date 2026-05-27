import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ImpactStat {
  value: string;
  label: string;
}

interface ImpactMilestone {
  period: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

@Component({
  selector: 'app-impact',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './impact.html',
  styleUrl: './impact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Impact {
  readonly stats: readonly ImpactStat[] = [
    { value: '£9,900', label: 'Covid-19 Relief Donations' },
    { value: '£3,000', label: 'Obstetric Fistula Fund' },
    { value: '500+', label: 'Medical Textbooks Donated' },
    { value: '600', label: 'Ghana Training Contact Hours' },
  ];

  readonly milestones: readonly ImpactMilestone[] = [
    {
      period: '2020 – 2021',
      title: 'COVID-19 Response & Humanitarian Aid',
      description:
        'GDDA-UK made history as the first Ghanaian Diasporan society to donate directly to Ghana during the global crisis. We committed a total of £9,900 to support frontline workers and health centres across the nation.',
      image: '/assets/images/impact-covid-donations.png',
      imageAlt: 'Healthcare professionals collaborating during a GDDA-UK programme',
    },
    {
      period: '2017 – 2019',
      title: 'Restoring Dignity: The Obstetric Fistula Fund',
      description:
        'We donated £3,000 to transform lives for women suffering from obstetric fistula. Beyond surgical support, we focused on sustainable medical infrastructure and clinical empowerment.',
      image: '/assets/images/impact-milestone1.png',
      imageAlt: 'Women receiving specialist healthcare support',
    },
    {
      period: '2014 – 2016',
      title: 'Diabetic Paediatric & Knowledge Infrastructure Projects',
      description:
        'Our members funded paediatric diabetic care tools and expanded access to medical texts, journals, and teaching materials across Ghana.',
      image: '/assets/images/impact-pediatric-network .png',
      imageAlt: 'Children and clinicians participating in diabetes support programmes',
    },
  ];
}