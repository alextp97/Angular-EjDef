import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayHideComponent } from './display-hide/display-hide.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { CrudComponent } from './crud/crud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { ChildComponent } from './component-communication/child/child.component';
import { ParentComponent } from './component-communication/parent/parent.component';
import { CommunicationService } from './component-communication/services/communication.service';
import { ObservableService } from './component-communication/services/observable.service';
import { CrudModule } from './crud/crud.module';

@NgModule({
  declarations: [
    AppComponent,
    DisplayHideComponent,
    ComponentCommunicationComponent,
    CrudComponent,
    ChildComponent,
    ParentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CrudModule,
    MaterialModule,
    SharedModule
  ],
  providers: [CommunicationService,
              ObservableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
