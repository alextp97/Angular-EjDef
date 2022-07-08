import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-controlador',
  templateUrl: './controlador.component.html',
  styleUrls: ['./controlador.component.css']
})
export class ControladorComponent implements OnInit {

  colors: string[] = ['rojo', 'amarillo', 'verde'];
  choseColor: string = "rojo";
  button: string = 'Off';

  //Outputs para enviar los datos al componente del semáforo
  @Output() emitColors : EventEmitter<string[]> = new EventEmitter();
  @Output() selectedColor: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    //Al inicio le envío al lightcomponent los colores disponibles
    this.emitColors.emit(this.colors);
  }

  changeText(){

    if(this.button === 'Off'){
      this.button = 'On'
      this.choseColor = 'rojo'
    }
    else{
      this.button = 'Off'
      this.choseColor = '';
    }

    this.selectedColor.emit(this.choseColor);

  }

  //Emito el color que se ha seleccionado en el desplegable
  emitToTraffic(){
    this.selectedColor.emit(this.choseColor);

  }
 
}
