import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorNotFoundPageComponent } from './error-not-found-page.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ErrorNotFoundPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorNotFoundPageRoutingModule { }
