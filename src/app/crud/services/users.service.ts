import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlUser = 'http://localhost:3000';

  private subject = new Subject<void>();

  constructor( private http: HttpClient) { }


  //Obtengo todos los usuarios de la base de datos
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.urlUser}/users`);
  }


  //Envío el usuario creado a la base de datos
  newUser( user: User): Observable<User>{
    return this.http.post<User>(`${this.urlUser}/users/`, user)
  }

  //Borro en la bd el usuario cuyo id coincida
  deleteUser( id: number): Observable<any> {
    return this.http.delete(`${this.urlUser}/users/${id}`)
  }

  //Metodo que devuelve el usuario por id
  getPersonById(id: number): Observable<User>{
    return this.http.get<User>(`${this.urlUser}/users/${id}`);
  }

  //Método para enviar a la base de datos el usuario que se ha modificado
  modifyUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.urlUser}/users/${user.id}`, user);
  }


  //Eventos para cuando creo un nuevo usuario
  sendUser(){
    this.subject.next();
  }

  getUserEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
