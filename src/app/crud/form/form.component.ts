import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Countries, Name } from '../interfaces/country.interface';
import { User } from '../interfaces/user.interface';
import { CountryService } from '../services/country.service';
import { UsersService } from '../services/users.service';
import { ValidatorPasswordService } from '../services/validator-password.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //changeText: string = 'Crear';
  
  //Implemento la interfaz de User para los campos del formulario
  user!: User;

  coutry: Countries[] = [];
  
  //Para ocultar la contraseña
  hide = true;


  //Mi formGroup
  myForm: FormGroup = this.fb.group({
    id: [""],
    username: [ '', [Validators.required, Validators.minLength(3)] ],
    password: [ '', [Validators.required, Validators.minLength(4)]],
    password2: [ '', [Validators.required] ],
    email: [ '', [Validators.required, Validators.email] ],
    offers: [ false ],
    coutry: ['' , [Validators.required]],
    city: [ '', [Validators.required] ]
  },
  {
    validators: [ this.validPass.samePass('password','password2')]
  });

  constructor( private fb: FormBuilder,
               private userService: UsersService,
               private countryService: CountryService,
               private validPass: ValidatorPasswordService) { }

  ngOnInit(): void {

    this.countryService.getAllCountries()
      .subscribe((countries) => this.coutry = countries )
  }

  //Compruebo si los campos han sido tocados o tienen errores para mostrar los datos
  fieldNoValid( field: string ){
    return this.myForm.controls[field].errors
            && this.myForm.controls[field].touched;
  }

  

  //Método para crear un nuevo usuario
  createUser(){

    //Marco todos los campos como tocados si mi formulario es inválido cuando el usuario pulse crear si los campos son incorrectos
    if( this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return;
    }

    //Si el Id no existe, se crea un usuario nuevo
    if(this.myForm.get('id')?.value === ""  || this.myForm.get('id')?.value === null ){
      //this.changeText = 'Crear';

      this.userService.newUser( this.myForm.value )
      .subscribe(() => this.userService.sendUser())

      this.myForm.reset('');

    }else{ //En caso contrario, modifica el usuario ya existente

      //this.changeText = 'Editar';
      this.userService.modifyUser(this.myForm.value)
        .subscribe(() => this.userService.sendUser())

        this.myForm.reset('');
    }
    

    



  }

}
