import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar';
import { FooterComponent } from '../../shared/components/footer/footer';
import { ImpactHeroComponent } from './sections/hero/impact-hero';
import { MilestonesComponent } from './sections/milestones/milestones';
import { ImpactCtaComponent } from './sections/cta/impact-cta';

@Component({
  selector: 'app-impact',
  imports: [
    NavbarComponent,
    FooterComponent,
    ImpactHeroComponent,
    MilestonesComponent,
    ImpactCtaComponent,
  ],
  templateUrl: './impact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImpactComponent {}
