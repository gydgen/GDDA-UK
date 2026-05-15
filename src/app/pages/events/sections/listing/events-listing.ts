import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Event {
  id: string;
  date: string;
  month: string;
  year: string;
  title: string;
  description: string;
  location: string;
  type: string;
}

const ALL_EVENTS: Event[] = [
  {
    id: '1',
    date: '24',
    month: 'Mar',
    year: '2026',
    title: 'Annual Health Conference & Dinner Dance',
    description: 'Connect. Celebrate. Learn. Join us for a day of insight, impact, and inspiration. Doors open at 8:30am BST.',
    location: 'London, UK',
    type: 'Conference',
  },
  {
    id: '2',
    date: '15',
    month: 'Jun',
    year: '2026',
    title: 'Ghana Healthcare Webinar Series',
    description: 'Monthly virtual sessions featuring Ghanaian specialists sharing clinical insights across specialties.',
    location: 'Online (Zoom)',
    type: 'Webinar',
  },
  {
    id: '3',
    date: '09',
    month: 'Aug',
    year: '2026',
    title: 'GDDA-UK Summer Networking Reception',
    description: 'Informal gathering for members and prospective members to connect over drinks and light refreshments.',
    location: 'Birmingham, UK',
    type: 'Networking',
  },
  {
    id: '4',
    date: '12',
    month: 'Oct',
    year: '2026',
    title: 'Medical Outreach Planning Meeting',
    description: 'Annual planning session for our Ghana outreach programme. Open to active members and volunteers.',
    location: 'Manchester, UK',
    type: 'Planning',
  },
  {
    id: '5',
    date: '28',
    month: 'Nov',
    year: '2026',
    title: 'End of Year Gala & Awards Dinner',
    description: 'Celebrating the achievements of our members and the impact made in Ghana throughout the year.',
    location: 'London, UK',
    type: 'Gala',
  },
  {
    id: '6',
    date: '20',
    month: 'Feb',
    year: '2027',
    title: 'Junior Doctors & Students Forum',
    description: 'Dedicated event for medical students and junior doctors of Ghanaian heritage to meet mentors.',
    location: 'Online (Zoom)',
    type: 'Forum',
  },
];

@Component({
  selector: 'app-events-listing',
  imports: [RouterLink, LowerCasePipe],
  templateUrl: './events-listing.html',
  styleUrl: './events-listing.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsListingComponent {
  readonly events = signal<Event[]>(ALL_EVENTS);

  readonly filterTypes = ['All', 'Conference', 'Webinar', 'Networking', 'Gala', 'Forum'];

  readonly activeFilter = signal<string>('All');

  readonly filteredEvents = computed(() => {
    const filter = this.activeFilter();
    const evts = this.events();
    return filter === 'All' ? evts : evts.filter(e => e.type === filter);
  });

  setFilter(type: string): void {
    this.activeFilter.set(type);
  }
}
