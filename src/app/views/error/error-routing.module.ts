import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'internal-error',
        loadChildren: () => import('./error-page/error-page.module').then(m => m.ErrorPageModule),
      },
      {
        path: 'authorization',
        loadChildren: () => import('./error-authorization/error-authorization.module').then(m => m.ErrorAuthorizationModule),
      },
      {
        path: '',
        loadChildren: () => import('./error-not-found-page/error-not-found-page.module').then(m => m.ErrorNotFoundPageModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
