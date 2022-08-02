import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';

import { NavBarComponent } from './nav-bar/nav-bar.component';



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
