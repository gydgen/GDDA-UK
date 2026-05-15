import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface FooterLink {
  label: string;
  path?: string;
  href?: string;
  external?: boolean;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.footer--impact]': 'variant() === "impact"' },
})
export class FooterComponent {
  readonly currentYear = 2026;
  readonly variant = input<'home' | 'impact'>('home');

  readonly columns = computed<FooterColumn[]>(() => {
    if (this.variant() === 'impact') {
      return [
        {
          heading: 'Quick Links',
          links: [
            { label: 'General Medical Council GMC (UK)', href: 'https://www.gmc-uk.org', external: true },
            { label: 'General Dental Council GDC (UK)', href: 'https://www.gdc-uk.org', external: true },
            { label: 'Ghana College Of Physicians and Surgeons', href: 'https://gcps.edu.gh', external: true },
          ],
        },
        {
          heading: 'Legal',
          links: [
            { label: 'Privacy Policy', path: '/privacy-policy' },
            { label: 'Cookie Policy', path: '/cookie-policy' },
            { label: 'Data Protection Policy', path: '/data-protection' },
            { label: 'Site Map', path: '/sitemap' },
          ],
        },
      ];
    }
    return [
      {
        heading: 'Explore',
        links: [
          { label: 'About Us', path: '/' },
          { label: 'Membership Benefits', path: '/get-involved' },
          { label: 'Upcoming Events', path: '/events' },
          { label: 'Our Impact', path: '/impact' },
        ],
      },
      {
        heading: 'Members',
        links: [
          { label: 'Latest News', path: '/news' },
          { label: 'Contact Us', path: '/contact' },
          { label: 'Privacy Policy', path: '/privacy-policy' },
          { label: 'Terms of Service', path: '/terms-of-service' },
        ],
      },
    ];
  });

  readonly charityLabel = computed(() =>
    this.variant() === 'impact' ? 'Registered Charity Number: 1109403' : 'Charity Number: 1109403'
  );

  readonly contactInfo = computed(() =>
    this.variant() === 'impact'
      ? { address: '52 Rosebard Lane, Exeter, England, EX4 5DP', email: 'info@gddauk.org' }
      : null
  );
}
