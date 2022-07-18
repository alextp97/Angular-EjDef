import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide.component.html',
  styleUrls: ['./display-hide.component.css']
})
export class DisplayHideComponent implements OnInit {

  //Declaro las variables
  show: boolean = false;
  showText: string = 'Mostrar';


  //Funcion que muestra u oculta la caja de texto y cambia el nombre del botón
  showHide(){

    this.show = !this.show;

    //Si es falso se oculta la caja con el texto y el botón cambia a 'mostrar'
    if(!this.show){  
      this.showText = 'Mostrar';
    }
    else {
      this.showText = 'Ocultar';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
