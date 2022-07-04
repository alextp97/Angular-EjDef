import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  msg: string = '';



  @Input() msgInput = ''; //Decorador Input para poder recibir datos del padre
  @Output() childMsg = new EventEmitter<string>(); //Decorador del Output para enviar datos al padre


  constructor( private _communicationService: CommunicationService) { }

  ngOnInit(): void {

    //Recibo el mensaje del padre mediante el servicio
    this._communicationService.msgFather.subscribe((txt) => (this.msg = txt));
  }



  //Envio el mensaje a el padre mediante un servicio
  childService(){
    this._communicationService.sendToFatherService('child using service');
  }

  //Método para enviar el mensaje al padre mediante Output
  sendMsgOutput(){
    this.childMsg.emit('child using output property');
  }

}
