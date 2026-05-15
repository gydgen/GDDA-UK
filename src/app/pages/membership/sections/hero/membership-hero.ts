import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-membership-hero',
  imports: [NgOptimizedImage],
  templateUrl: './membership-hero.html',
  styleUrl: './membership-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembershipHeroComponent {}
