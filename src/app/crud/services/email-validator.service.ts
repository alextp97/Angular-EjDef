import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  constructor( private http: HttpClient) { }

  //Declaracion de variables
  originalEmail!: string | null;
  private urlEmail = 'http://localhost:3000';



  //Método de validacion del email
  validate(control: AbstractControl): | Observable<ValidationErrors | null> {

    //Valor del email del formulario
    const email = control.value;
    

    //Miro en la base de datos y devuelvo el usuariario con el email que coincida
    return this.http.get<User[]>(`${this.urlEmail}/users?email=${email}`)
              .pipe(
                map( resp => {

                  //Si viene algún email de la base de datos no devuelvo nada 
                  if (this.originalEmail === email) {
                    return null;

                  } else {

                    //En caso contrario devuelvo un error de email duplicado
                    return resp.length === 0 ? null : { emailCatch: true };
                  }

                })
              )
  }
}
