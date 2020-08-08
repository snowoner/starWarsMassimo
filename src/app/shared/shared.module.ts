import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MaterialModule } from '../material/material.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SideBarComponent } from './components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    TopBarComponent,
    SideNavComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    TopBarComponent,
    SideNavComponent,
    SideBarComponent
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
