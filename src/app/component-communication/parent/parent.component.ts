import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { ObservableService } from '../services/observable.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  parentMessage: String = new String(''); //Necesito que sea una new String para que funcione el Input todas las veces que queramos
  childMessage: string = '';


  constructor( private _communicationService:CommunicationService,
              private _observableService: ObservableService) { }

  ngOnInit(): void {

    //Al servicio le mando todas las propiedades de la clase del padre, por eso lo igualo al this
    this._communicationService.fatherClass = this;


    //Recibo el mensaje del hijo mediante el servicio del obsevable
    this._observableService.getFromChild().subscribe((txtObs) => (this.childMessage = txtObs));
  }



  //Enviar mensaje al hijo mediante un servicio accediendo a sus propiedades
  parentService(){
    this._communicationService.childClass.msg = "PARENT USING SERVICE";
  }

  //Enviar mensaje al hijo usando Input
  sendMsgInput(){
    
   this.parentMessage = new String('PARENT USING INPUT PROPERTY');
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
