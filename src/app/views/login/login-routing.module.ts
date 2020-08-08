import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLoginComponent } from './login/login.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: MainLoginComponent,
      data: { title: 'Login', breadcrumb: 'Login' }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
