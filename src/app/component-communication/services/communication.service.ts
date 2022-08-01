import { EventEmitter, Injectable } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ParentComponent } from '../parent/parent.component';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  // Importo las clases del padre y del hijo al servicio
  public fatherClass!: ParentComponent;
  public childClass!: ChildComponent;


  //Creo estos dos eventos para poder enviar mediante un servicio mensajes al padre e hijo
  //msgFather: EventEmitter<string> = new EventEmitter<string>();
  //msgChild: EventEmitter<string> = new EventEmitter<string>();


  //Servicios para enviar al hijo y al padre respectivamente
  /*sendToChildService(txt: string){
    this.msgFather.emit(txt);
  }

  sendToFatherService(txt: string){
    this.msgChild.emit(txt);
  }*/

  constructor() { }
}
