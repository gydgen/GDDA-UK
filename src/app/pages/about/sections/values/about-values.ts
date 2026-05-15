import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-values',
  templateUrl: './about-values.html',
  styleUrl: './about-values.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutValuesComponent {}
