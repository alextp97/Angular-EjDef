import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  //Observables para el padre e hijo

  //Padre
  parentObs = new Subject<string>();

  sendFromParent( msgObs: string ){
    return this.parentObs.next(msgObs);
  }

  getFromParent(){
    return this.parentObs.asObservable();
  }


  //Hijo
  childObs = new Subject<string>();

  sendFromChild( msgObs: string ){
    return this.childObs.next(msgObs);
  }

  getFromChild(){
    return this.childObs.asObservable();
  }

  constructor() { }
}
