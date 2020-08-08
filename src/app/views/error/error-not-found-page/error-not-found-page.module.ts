import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorNotFoundPageRoutingModule } from './error-not-found-page-routing.module';
import { ErrorNotFoundPageComponent } from './error-not-found-page.component';


@NgModule({
  declarations: [ErrorNotFoundPageComponent],
  imports: [
    CommonModule,
    ErrorNotFoundPageRoutingModule
  ]
})
export class ErrorNotFoundPageModule { }
