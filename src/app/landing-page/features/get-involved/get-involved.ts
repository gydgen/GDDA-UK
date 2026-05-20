import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface InvolvementPath {
  icon: string;
  title: string;
  text: string;
}

interface InvolvementChannel {
  theme: 'navy' | 'gold';
  label: string;
  title: string;
  text: string;
  bullets: readonly string[];
  actionLabel: string;
  actionLink: string;
}

@Component({
  selector: 'app-get-involved',
  imports: [RouterLink],
  templateUrl: './get-involved.html',
  styleUrl: './get-involved.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetInvolved {
  readonly involvementPaths: readonly InvolvementPath[] = [
    {
      icon: 'access_time',
      title: 'Time',
      text: 'Volunteer your time for our community outreach programs or administrative excellence.',
    },
    {
      icon: 'paid',
      title: 'Money',
      text: 'Direct financial contributions fund critical healthcare missions and educational bursaries.',
    },
    {
      icon: 'event',
      title: 'Skills',
      text: 'Offer your specialized clinical or professional expertise to mentor the next generation.',
    },
    {
      icon: 'savings',
      title: 'Gifts',
      text: 'Donations of medical equipment and professional resources to supported facilities in Ghana.',
    },
  ];

  // readonly involvementChannels: readonly InvolvementChannel[] = [
  //   {
  //     theme: 'navy',
  //     label: 'Professional Membership',
  //     title: 'Join the association and grow with peers',
  //     text: 'Membership gives you access to events, practical support, and a trusted community.',
  //     bullets: [
  //       'Connect with clinicians across specialties',
  //       'Receive updates on opportunities and programmes',
  //       'Support diaspora-led healthcare action',
  //     ],
  //     actionLabel: 'Become a Member',
  //     actionLink: '/contact',
  //   },
  //   {
  //     theme: 'gold',
  //     label: 'Active Participation',
  //     title: 'Volunteer your time or support a project',
  //     text: 'Choose a practical way to contribute to education, outreach, and community programmes.',
  //     bullets: [
  //       'Mentor or teach in selected programmes',
  //       'Support event delivery and logistics',
  //       'Contribute to community impact projects',
  //     ],
  //     actionLabel: 'See Current Projects',
  //     actionLink: '/impact',
  //   },
  // ];
}
