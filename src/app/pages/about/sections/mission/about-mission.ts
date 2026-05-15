import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-mission',
  imports: [NgOptimizedImage],
  templateUrl: './about-mission.html',
  styleUrl: './about-mission.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMissionComponent {}
