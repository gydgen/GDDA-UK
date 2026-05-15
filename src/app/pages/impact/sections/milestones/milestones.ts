import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-milestones',
  imports: [NgOptimizedImage],
  templateUrl: './milestones.html',
  styleUrl: './milestones.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MilestonesComponent {}
