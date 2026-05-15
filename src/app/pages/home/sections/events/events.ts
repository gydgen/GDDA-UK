import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

interface SideEvent {
  date: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-events-section',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './events.html',
  styleUrl: './events.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsSectionComponent {
  readonly sideEvents: SideEvent[] = [
    {
      date: 'MAY 12 • ONLINE',
      title: 'Webinar: NHS Leadership for Clinicians',
      description:
        'Join senior NHS consultants as they share pathways into medical management and leadership.',
    },
    {
      date: 'JUN 05 • BIRMINGHAM',
      title: 'Medical Student Networking Mixer',
      description:
        'Connect with final year medical and dental students to share experiences and career advice.',
    },
    {
      date: 'JUL 18 • MANCHESTER',
      title: 'Innovation in Tropical Medicine Symposium',
      description:
        'Exploring new diagnostic tools for tropical disease management in low-resource settings.',
    },
  ];
}
