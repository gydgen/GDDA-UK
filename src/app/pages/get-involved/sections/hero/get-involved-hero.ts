import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-get-involved-hero',
  imports: [NgOptimizedImage],
  templateUrl: './get-involved-hero.html',
  styleUrl: './get-involved-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetInvolvedHeroComponent {}
