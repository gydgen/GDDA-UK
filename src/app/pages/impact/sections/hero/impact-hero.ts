import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-impact-hero',
  imports: [NgOptimizedImage],
  templateUrl: './impact-hero.html',
  styleUrl: './impact-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImpactHeroComponent {}
