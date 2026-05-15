import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Stat {
  number: string;
  label: string;
}

@Component({
  selector: 'app-get-involved-counter',
  templateUrl: './get-involved-counter.html',
  styleUrl: './get-involved-counter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetInvolvedCounterComponent {
  readonly stats: Stat[] = [
    { number: '500+', label: 'Members' },
    { number: '£15k+', label: 'Donated' },
    { number: '3', label: 'Regional Chapters' },
    { number: '20+', label: 'Years Active' },
  ];
}
