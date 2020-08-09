import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipsComponent } from './ships.component';
import { CoreModule } from 'src/app/core/core.module';
import { ShipsRoutingModule } from './ships-routing.module';
import { StarshipComponent } from './components/starship/starship.component';
import { MaterialModule } from 'src/app/material/material.module';




@NgModule({
  declarations: [ShipsComponent, StarshipComponent],
  imports: [
    CommonModule,
    ShipsRoutingModule,
    CoreModule,
    MaterialModule
  ]
})
export class ShipsModule { }
