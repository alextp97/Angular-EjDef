import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorPasswordService {

  constructor() { }

  //Validacion de dos contraseñas iguales
  samePass( pass1: string, pass2: string){


    return ( formGroup: AbstractControl): ValidationErrors | null => {

      //Obtengo las contraseñas del campo 1 y del campo 2
      const field1 = formGroup.get(pass1)?.value;
      const field2 = formGroup.get(pass2)?.value;

      //Compruebo si son distintas para que saque el error
      if(field1 !== field2){

        //En caso de que no sean iguales, marco el error del campo del pass2
        formGroup.get(pass2)?.setErrors({ notSame: true });
        return { notSame: true};
      }

      return null;
    }
  }
}
