import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {

  selectedColor: string = '';

  //Esta funcion se encarga de guardar el color que el usuario va seleccionando en el desplegable
  getSelectedColor($event: string){
    this.selectedColor = $event;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
