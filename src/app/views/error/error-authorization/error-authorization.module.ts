import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorAuthorizationRoutingModule } from './error-authorization-routing.module';
import { ErrorAuthorizationComponent } from './error-authorization.component';


@NgModule({
  declarations: [ErrorAuthorizationComponent],
  imports: [
    CommonModule,
    ErrorAuthorizationRoutingModule
  ]
})
export class ErrorAuthorizationModule { }
