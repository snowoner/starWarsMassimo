import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register/register.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: '',
      component: LoginComponent,
      data: { title: 'Login', breadcrumb: 'Login' }
    },
    {
      path: 'register',
      component: RegisterComponent,
      data: { title: 'Register', breadcrumb: 'Register' }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
