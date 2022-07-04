import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {


  //Creo estos dos eventos para poder enviar mediante un servicio mensajes al padre e hijo
  msgFather: EventEmitter<string> = new EventEmitter<string>();
  msgChild: EventEmitter<string> = new EventEmitter<string>();


  //Servicios para enviar al hijo y al padre respectivamente
  sendToChildService(txt: string){
    this.msgFather.emit(txt);
  }

  sendToFatherService(txt: string){
    this.msgChild.emit(txt);
  }

  constructor() { }
}
