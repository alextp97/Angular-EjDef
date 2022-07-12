import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GraphService {

  //private countryUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=37.7728858&lon=-3.7883289&cnt=7&units=metric&appid=5420eecf943645df7080600ac51bebff';

  private mobileUrl = 'https://api-mobilespecs.azharimm.site/v2/top-by-fans';

  constructor( private http: HttpClient) { }


  //Método que devuelve todos los paises que hay en la db
  getPhones(): Observable<any>{
    return this.http.get(`${this.mobileUrl}`);

  }
}
