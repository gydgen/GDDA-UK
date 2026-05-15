import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-events-hero',
  imports: [NgOptimizedImage],
  templateUrl: './events-hero.html',
  styleUrl: './events-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsHeroComponent {}
