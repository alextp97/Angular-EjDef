import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  parentMessage: string = '';
  childMessage: string = '';


  constructor(private _communicationService: CommunicationService) { }

  ngOnInit(): void {

    //Recibo el mensaje del hijo mediante el servicio
    this._communicationService.msgChild.subscribe((txt) => (this.childMessage = txt));
  }



  //Enviar mensaje al hijo mediante un servicio
  parentService(){
    this._communicationService.sendToChildService('parent using service');
    this.parentMessage = '';
  }

  //Enviar mensaje al hijo usando Input
  sendMsgInput(){
    this.parentMessage = 'parent using input property';
  }


  //Obtengo el mensaje del hijo enviado mediante Output
  getChildMsg( msgChild: string ){
    this.childMessage = msgChild;
  }

}
