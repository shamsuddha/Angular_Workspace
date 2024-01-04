import {Route, Routes} from '@angular/router';

export const routeList: Route[] = [
  {path: 'index', loadComponent: () => import('./module/index/IndexComp').then(m => m.IndexComp)},
  {path: 'login', loadComponent: () => import('./module/login/LoginComp').then(m => m.LoginComp)},
  {path: 'dashboard', loadComponent: () => import('./module/dashboard/DashboardComp').then(m => m.DashboardComp)},
  {path: 'forest', loadComponent: () => import('./module/forest/ForestComp').then(m => m.ForestComp)},
  {path: 'river', loadComponent: () => import('./module/river/RiverComp').then(m => m.RiverComp)},
  {path: 'crud', loadComponent: () => import('./module/crud/CrudComp').then(m => m.CrudComp)},
  {path: 'overlay2', loadComponent: () => import('./widget/overlay2/Overlay2Comp').then(m => m.Overlay2Comp)},
  {path: 'overlay3', loadComponent: () => import('./widget/overlay3/Overlay3Comp').then(m => m.Overlay3Comp)},
];


/*
export const routes2: Routes = [
  {
    path: 'index',
    loadChildren: () => import('./module/index/IndexComp').then(m => m.IndexComp)
  },
  {
    path: 'login',
    loadChildren: () => import('./module/login/LoginComp').then(m => m.LoginComp)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./module/dashboard/DashboardComp').then(m => m.DashboardComp)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
*/
