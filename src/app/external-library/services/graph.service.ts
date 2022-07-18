import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GraphService {

  //Url de la api  que contiene los datos de los móbiles top by fans
  private mobileUrl = 'https://api-mobilespecs.azharimm.site/v2';

  constructor( private http: HttpClient) { }


  //Método que devuelve todos los datos que hay en la api
  getPhones(): Observable<any>{
    return this.http.get(`${this.mobileUrl}/top-by-fans`);

  }
}
