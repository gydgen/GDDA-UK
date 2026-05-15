import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-testimonials-section',
  imports: [NgOptimizedImage],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsSectionComponent {}
