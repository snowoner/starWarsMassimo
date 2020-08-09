import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBasicComponent } from './layout-basic/layout-basic.component';
import { LayoutDashboardComponent } from './layout-dashboard/layout-dashboard.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutBasicComponent,
    LayoutDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    LayoutDashboardComponent,
    LayoutBasicComponent
  ]
})
export class LayoutModule { }
