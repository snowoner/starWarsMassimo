import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorAuthorizationComponent } from './error-authorization.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ErrorAuthorizationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorAuthorizationRoutingModule { }
