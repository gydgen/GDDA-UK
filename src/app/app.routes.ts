import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Test } from './landing-page/features/test/test';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
    children: [
        {redirectTo: 'home', pathMatch: 'full', path: ''},
      {
        path: 'home',
        loadComponent: () => import('./landing-page/features/about/about').then((m) => m.About),
      },
      {
        path: 'get-involved',
        loadComponent: () =>
          import('./landing-page/features/get-involved/get-involved').then((m) => m.GetInvolved),
      },
      {
        path: 'sponsorship',
        loadComponent: () =>
          import('./landing-page/features/sponsorship/sponsorship').then((m) => m.Sponsorship),
      },
      {
        path: 'impact',
        loadComponent: () => import('./landing-page/features/impact/impact').then((m) => m.Impact),
      },
      {
        path: 'event',
        loadComponent: () => import('./landing-page/features/event/event').then((m) => m.Event),
      },
      {
        path: 'contact',
        loadComponent: () => import('./landing-page/features/contact/contact').then((m) => m.Contact),
      }
    ],
  },
];
