import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-impact-cta',
  imports: [RouterLink],
  templateUrl: './impact-cta.html',
  styleUrl: './impact-cta.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImpactCtaComponent {}
