import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface InvolvementPath {
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
      icon: 'groups',
      title: 'Membership',
      text: 'Join our professional community of Ghanaian doctors, dentists, and trainees in the UK.',
    },
    {
      icon: 'school',
      title: 'Mentoring',
      text: 'Support students and early-career clinicians through structured guidance and career advice.',
    },
    {
      icon: 'event',
      title: 'Events',
      text: 'Participate in conferences, webinars, and local sessions that strengthen our network.',
    },
    {
      icon: 'savings',
      title: 'Giving',
      text: 'Contribute to targeted health projects and outreach activities in Ghana and the UK.',
    },
  ];

  readonly involvementChannels: readonly InvolvementChannel[] = [
    {
      theme: 'navy',
      label: 'Professional Membership',
      title: 'Join the association and grow with peers',
      text: 'Membership gives you access to events, practical support, and a trusted community.',
      bullets: [
        'Connect with clinicians across specialties',
        'Receive updates on opportunities and programmes',
        'Support diaspora-led healthcare action',
      ],
      actionLabel: 'Become a Member',
      actionLink: '/contact',
    },
    {
      theme: 'gold',
      label: 'Active Participation',
      title: 'Volunteer your time or support a project',
      text: 'Choose a practical way to contribute to education, outreach, and community programmes.',
      bullets: [
        'Mentor or teach in selected programmes',
        'Support event delivery and logistics',
        'Contribute to community impact projects',
      ],
      actionLabel: 'See Current Projects',
      actionLink: '/impact',
    },
  ];
}
