import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar';
import { FooterComponent } from '../../shared/components/footer/footer';
import { NewsHeroComponent } from './sections/hero/news-hero';
import { NewsGridComponent } from './sections/grid/news-grid';

@Component({
  selector: 'app-news-page',
  imports: [NavbarComponent, FooterComponent, NewsHeroComponent, NewsGridComponent],
  templateUrl: './news-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsPageComponent {}
