
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrudModule } from './crud/crud.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { CommunicationService } from './component-communication/services/communication.service';
import { ControladorComponent } from './traffic-light/controlador/controlador.component';
import { CrudComponent } from './crud/crud.component';
import { ChildComponent } from './component-communication/child/child.component';
import { DisplayHideComponent } from './display-hide/display-hide.component';
import { ExternalLibraryComponent } from './external-library/external-library.component';
import { ObservableService } from './component-communication/services/observable.service';
import { ParentComponent } from './component-communication/parent/parent.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';




@NgModule({
  declarations: [
    AppComponent,
    ControladorComponent,
    ComponentCommunicationComponent,
    CrudComponent,
    ChildComponent,
    DisplayHideComponent,
    ExternalLibraryComponent,
    ParentComponent,
    TrafficLightComponent,
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
