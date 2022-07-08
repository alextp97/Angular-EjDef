import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgChartsModule } from 'ng2-charts';

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
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { ControladorComponent } from './traffic-light/controlador/controlador.component';
import { FormsModule } from '@angular/forms';
import { ExternalLibraryComponent } from './external-library/external-library.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayHideComponent,
    ComponentCommunicationComponent,
    CrudComponent,
    ChildComponent,
    ParentComponent,
    TrafficLightComponent,
    ControladorComponent,
    ExternalLibraryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CrudModule,
    FormsModule,
    MaterialModule,
    NgChartsModule,
    SharedModule
  ],
  providers: [CommunicationService,
              ObservableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
