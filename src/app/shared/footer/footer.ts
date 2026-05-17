import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface FooterSocial {
  name: string;
  url: string;
  icon: SafeHtml;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  private readonly sanitizer = inject(DomSanitizer);

  readonly currentYear = new Date().getFullYear();

  readonly membershipLinks = [
    { label: 'Latest News', path: '' },
    { label: 'Contact Us', path: '' },
    { label: 'Privacy Policy', path: '' },
    { label: 'Terms of Service', path: '' },
  ];
  readonly exploreLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Membership Benefits ', path: '' },
    { label: 'Upcoming Events', path: '' },
    { label: 'Our Impact', path: '' }
  ];

  readonly socials: FooterSocial[] = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: this.sanitizeIcon(`<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: this.sanitizeIcon(`<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: this.sanitizeIcon(`<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`),
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: this.sanitizeIcon(`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`),
    },
  ];

  private sanitizeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
}

