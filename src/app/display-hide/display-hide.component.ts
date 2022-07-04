import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide.component.html',
  styleUrls: ['./display-hide.component.css']
})
export class DisplayHideComponent implements OnInit {

  show: boolean = false;
  showText: string = 'Mostrar';

  showHide(){

    if(this.show){
      this.show = false;
      this.showText = 'Mostrar';
    }
    else {
      this.show = true;
      this.showText = 'Ocultar';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
