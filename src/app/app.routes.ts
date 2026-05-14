import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
    children: [
        {redirectTo: 'about', pathMatch: 'full', path: ''},
      {
        path: 'about',
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
    ],
  },
];
