import { Component, OnInit, ViewChild } from '@angular/core';
import { FormComponent } from './form/form.component';
import { User } from './interfaces/user.interface';
import { EmailValidatorService } from './services/email-validator.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  //Miro el formulario para poder pasarle los valores de la tabla más adelante
  @ViewChild(FormComponent) formComponent!: FormComponent;

  //Método para que los datos de la fila que seleccione el usuario aparezcan en el formulario
  dataUser( user: User){
    this.formComponent.myForm.patchValue(user);


    //Igualo la variable del servicio del email validator al email del usuario cuando lo edito
    this.emailValidator.originalEmail = user.email;

  }

  constructor( private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
  }

}
