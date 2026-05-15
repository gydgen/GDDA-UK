import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-membership-section',
  imports: [RouterLink],
  templateUrl: './membership.html',
  styleUrl: './membership.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembershipSectionComponent {
  readonly benefits: Benefit[] = [
    {
      title: 'Professional Networking',
      description:
        'Connect with Ghanaian doctors, dentists, consultants, researchers, and healthcare professionals across the UK and Ghana for career growth and collaboration.',
      icon: 'network',
    },
    {
      title: 'Career & Registration Support',
      description:
        'Guidance and support for healthcare professionals seeking career development, revalidation, and easier registration pathways through collaboration with GMDC.',
      icon: 'career',
    },
    {
      title: 'Healthcare Outreach & Projects',
      description:
        'Support and contribute to medical and dental projects in Ghana, including volunteering opportunities and community healthcare initiatives.',
      icon: 'outreach',
    },
    {
      title: 'Welfare & Community Support',
      description:
        'Confidential support for members during work-related challenges while building a strong community that celebrates and supports one another.',
      icon: 'welfare',
    },
  ];
}
