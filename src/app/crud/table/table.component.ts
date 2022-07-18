import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //Decorador output para enviarle los datos al formulario
  @Output() modUser = new EventEmitter<User>();

  clickEvent: Subscription;
  listUsers: User[] = [];
  pages: number = 1;

  constructor( private userService: UsersService) {

    this.clickEvent = this.userService.getUserEvent()
                .subscribe(() => this.ngOnInit());
   }

  ngOnInit(): void {

    this.userService.getUsers()
      .subscribe( users => this.listUsers = users);
  }


  //Método para eliminar el usuario pasandole el id
  eliminateUser( id: number){
    this.userService.deleteUser(id).subscribe(() => this.ngOnInit());
  }


  //Método para obtener los datos del usuario que se quiere modificar
  modifyUser( id: number) {
    this.userService.getPersonById(id)
      .subscribe((data) => this.modUser.emit(data))
  }

}
