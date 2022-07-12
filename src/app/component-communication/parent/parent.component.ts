import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { ObservableService } from '../services/observable.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  parentMessage: string = '';
  childMessage: string = '';


  constructor(private _communicationService: CommunicationService,
              private _observableService: ObservableService) { }

  ngOnInit(): void {

    //Recibo el mensaje del hijo mediante el servicio
    this._communicationService.msgChild.subscribe((txt) => (this.childMessage = txt));


    //Recibo el mensaje del hijo mediante el servicio del obsevable
    this._observableService.getFromChild().subscribe((txtObs) => (this.childMessage = txtObs));
  }



  //Enviar mensaje al hijo mediante un servicio
  parentService(){
    this._communicationService.sendToChildService('PARENT USING SERVICE');
  }

  //Enviar mensaje al hijo usando Input
  sendMsgInput(){
    this.parentMessage = 'PARENT USING INPUT PROPERTY';
  }


  //Obtengo el mensaje del hijo enviado mediante Output
  getChildMsg( msgChild: string ){
    this.childMessage = msgChild;
  }

  //Envio mensaje al hijo mediante el servicio de observable
  sendMsgObservable(){
    this._observableService.sendFromParent('PARENT USING OBSERVABLE');
  }

}
