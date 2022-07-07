import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countryUrl = 'https://restcountries.com/v2/';

  constructor( private http: HttpClient) { }

  //Obtengo todos los países 
  getAllCountries(): Observable<Countries[]>{
    return this.http.get<Countries[]>(`${this.countryUrl}/all`)
  }

}
