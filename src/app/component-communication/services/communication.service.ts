import { Injectable } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ParentComponent } from '../parent/parent.component';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  // Importo las clases del padre y del hijo al servicio
  public fatherClass!: ParentComponent;
  public childClass!: ChildComponent;


  constructor() { }
}
