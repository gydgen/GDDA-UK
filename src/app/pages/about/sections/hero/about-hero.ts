import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-hero',
  imports: [NgOptimizedImage],
  templateUrl: './about-hero.html',
  styleUrl: './about-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutHeroComponent {}
