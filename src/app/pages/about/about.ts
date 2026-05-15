import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar';
import { FooterComponent } from '../../shared/components/footer/footer';
import { AboutHeroComponent } from './sections/hero/about-hero';
import { AboutMissionComponent } from './sections/mission/about-mission';
import { AboutValuesComponent } from './sections/values/about-values';

@Component({
  selector: 'app-about',
  imports: [
    NavbarComponent,
    FooterComponent,
    AboutHeroComponent,
    AboutMissionComponent,
    AboutValuesComponent,
  ],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
