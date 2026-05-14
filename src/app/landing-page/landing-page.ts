import { Component, ChangeDetectionStrategy, AfterViewInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar, Footer } from './../shared/index';
import { ScrollRevealService } from '../shared/services/scroll-reveal.service';

@Component({
  selector: 'app-landing-page',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage implements AfterViewInit {
  private readonly scrollReveal = inject(ScrollRevealService);

  ngAfterViewInit(): void {
    this.scrollReveal.init();
  }
}
