import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {


  colors!: string[];
  selectedColor: string = '';

  getColor($event: string[]){
    this.colors = $event;
  }

  getSelectedColor($event: string){
    this.selectedColor = $event;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
