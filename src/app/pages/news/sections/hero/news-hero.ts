import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-news-hero',
  imports: [NgOptimizedImage],
  templateUrl: './news-hero.html',
  styleUrl: './news-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsHeroComponent {}
