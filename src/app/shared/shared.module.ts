import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule,

  ],
  exports: [
    NavBarComponent
  ]
})
export class SharedModule { }
