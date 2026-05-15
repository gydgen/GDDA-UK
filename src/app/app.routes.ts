import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then(m => m.AboutComponent),
  },
  {
    path: 'impact',
    loadComponent: () =>
      import('./pages/impact/impact').then(m => m.ImpactComponent),
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./pages/events/events-page').then(m => m.EventsPageComponent),
  },
  {
    path: 'get-involved',
    loadComponent: () =>
      import('./pages/get-involved/get-involved').then(m => m.GetInvolvedComponent),
  },
  {
    path: 'sponsorship',
    loadComponent: () =>
      import('./pages/sponsorship/sponsorship').then(m => m.SponsorshipComponent),
  },
  {
    path: 'news',
    loadComponent: () =>
      import('./pages/news/news-page').then(m => m.NewsPageComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact-page').then(m => m.ContactPageComponent),
  },
  {
    path: 'membership',
    loadComponent: () =>
      import('./pages/membership/membership-page').then(m => m.MembershipPageComponent),
  },
  {
    path: 'donate',
    redirectTo: 'get-involved',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
