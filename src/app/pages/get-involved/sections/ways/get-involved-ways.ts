import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-involved-ways',
  imports: [RouterLink],
  templateUrl: './get-involved-ways.html',
  styleUrl: './get-involved-ways.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetInvolvedWaysComponent {}
