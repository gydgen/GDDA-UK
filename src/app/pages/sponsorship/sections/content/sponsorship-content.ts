import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sponsorship-content',
  imports: [RouterLink],
  templateUrl: './sponsorship-content.html',
  styleUrl: './sponsorship-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SponsorshipContentComponent {}
