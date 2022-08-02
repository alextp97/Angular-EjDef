
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CrudModule } from './crud/crud.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination'
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { BarsComponent } from './external-library/graphics/bars/bars.component';
import { ChildComponent } from './component-communication/child/child.component';
import { CommunicationService } from './component-communication/services/communication.service';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { ControladorComponent } from './traffic-light/controlador/controlador.component';
import { CrudComponent } from './crud/crud.component';
import { DisplayHideComponent } from './display-hide/display-hide.component';
import { DonutComponent } from './external-library/graphics/donut/donut.component';
import { ExternalLibraryComponent } from './external-library/external-library.component';
import { ObservableService } from './component-communication/services/observable.service';
import { ParentComponent } from './component-communication/parent/parent.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';




@NgModule({
  declarations: [
    AppComponent,
    BarsComponent,
    ChildComponent,
    ComponentCommunicationComponent,
    ControladorComponent,
    CrudComponent,
    DisplayHideComponent,
    DonutComponent,
    ExternalLibraryComponent,
    ParentComponent,
    TrafficLightComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CrudModule,
    FormsModule,
    MaterialModule,
    NgChartsModule,
    NgxPaginationModule,
    SharedModule
  ],
  providers: [CommunicationService,
              ObservableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
