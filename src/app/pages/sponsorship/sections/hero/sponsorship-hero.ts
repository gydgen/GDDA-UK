import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sponsorship-hero',
  imports: [NgOptimizedImage],
  templateUrl: './sponsorship-hero.html',
  styleUrl: './sponsorship-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SponsorshipHeroComponent {}
