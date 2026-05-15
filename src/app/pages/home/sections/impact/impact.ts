import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-impact-section',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './impact.html',
  styleUrl: './impact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImpactSectionComponent {}
