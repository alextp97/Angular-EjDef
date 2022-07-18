import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-controlador',
  templateUrl: './controlador.component.html',
  styleUrls: ['./controlador.component.css']
})
export class ControladorComponent implements OnInit {

  //Zona de declaracion de propiedades
  colors: string[] = ['rojo', 'amarillo', 'verde'];
  choseColor: string = '';
  selected: boolean = false;
  button: string = 'Off';

  //Output para enviar los datos al componente del semáforo
  @Output() selectedColor: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //Funcion para habilitar o deshabilitar el desplegable y cambiar el texto de On a Off y viceversa
  changeText(){

    if(this.button === 'Off'){
      this.button = 'On'
      this.selected = true;
      this.choseColor = 'rojo'
    }
    else{
      this.button = 'Off'
      this.selected = false
      this.choseColor = '';
    }

    this.selectedColor.emit(this.choseColor);

  }

  //Emito el color que se ha seleccionado en el desplegable
  emitToTraffic(){
    this.selectedColor.emit(this.choseColor);

  }
 
}
