import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { CrudComponent } from './crud/crud.component';
import { DisplayHideComponent } from './display-hide/display-hide.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';

const routes: Routes = [
  { path: 'displayHide', component: DisplayHideComponent },
  { path: 'componentCommunication', component: ComponentCommunicationComponent},
  { path: 'crud', component: CrudComponent},
  { path: 'trafficLight', component: TrafficLightComponent},
  { path: '**', redirectTo: 'displayHide'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
