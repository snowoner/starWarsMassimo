import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutDashboardComponent } from './layout/layout-dashboard/layout-dashboard.component';
import { AuthenticationGuard } from './core/components/guards/authentication/authentication.guard';
import { LayoutBasicComponent } from './layout/layout-basic/layout-basic.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '',
    component: LayoutDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'ships',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'ships',
        loadChildren: () => import('./views/ships/ships.module').then(m => m.ShipsModule),
        canActivate: [AuthenticationGuard]
      },
    ]
  },
  {
    path: '',
    component: LayoutBasicComponent,
    children: [
      {
        path: 'error/:error',
        loadChildren: () => import('./views/error/error.module').then(m => m.ErrorModule),
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
