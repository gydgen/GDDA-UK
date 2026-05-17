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
    { value: 'GBP 9,900', label: 'COVID-19 Relief Donations' },
    { value: 'GBP 3,000', label: 'Obstetric Fistula Fund' },
    { value: '500+', label: 'Medical Textbooks Donated' },
    { value: '600', label: 'Training Contact Hours Delivered' },
  ];

  readonly milestones: readonly ImpactMilestone[] = [
    {
      period: '2020 - 2021',
      title: 'COVID-19 Response and Humanitarian Aid',
      description:
        'GDDA-UK mobilised support for frontline teams and contributed direct financial aid to health centres across Ghana.',
      image: '/assets/images/about-webinar-nhs.jpg',
      imageAlt: 'Healthcare professionals collaborating during a GDDA-UK programme',
    },
    {
      period: '2017 - 2019',
      title: 'Restoring Dignity Through Obstetric Fistula Support',
      description:
        'Funding helped improve specialist care pathways and strengthen local service capacity for women affected by fistula.',
      image: '/assets/images/about-obstetic-fistula.png',
      imageAlt: 'Women receiving specialist healthcare support',
    },
    {
      period: '2014 - 2016',
      title: 'Diabetic Paediatric and Knowledge Infrastructure Projects',
      description:
        'Our members funded paediatric diabetic care tools and expanded access to medical texts, journals, and teaching materials.',
      image: '/assets/images/about-diabetic-project.png',
      imageAlt: 'Children and clinicians participating in diabetes support programmes',
    },
  ];
}
