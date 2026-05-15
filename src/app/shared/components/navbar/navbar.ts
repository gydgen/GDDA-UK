import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly navLinks: NavLink[] = [
    { label: 'About', path: '/' },
    { label: 'Events', path: '/events' },
    { label: 'Impact', path: '/impact' },
    { label: 'News', path: '/news' },
    { label: 'Get Involved', path: '/get-involved' },
    { label: 'Sponsorship', path: '/sponsorship' },
    { label: 'Contact', path: '/contact' },
  ];

  readonly mobileMenuOpen = signal(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
