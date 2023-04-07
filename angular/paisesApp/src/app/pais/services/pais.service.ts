import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1/'
  private apiUrl_v2: string = 'https://restcountries.com/v2/'

  constructor(private http: HttpClient) { }

  buscarPais(termino: string):Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino} `;
    return this.http.get<Country[]>(url); // regreso un objeto de tipo observable, es decir quien llame a este metodo debera susbribirse
  }

  buscarCapital(termino: string):Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino} `;
    return this.http.get<Country[]>(url); // regreso un objeto de tipo observable, es decir quien llame a este metodo debera susbribirse
  }

  getPaisPorAlpha(id: string):Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id} `;
    return this.http.get<Country[]>(url); // regreso un objeto de tipo observable, es decir quien llame a este metodo debera susbribirse
  }

  buscarRegion(region:string): Observable<Country[]>{
    const url = `${this.apiUrl_v2}/regionalbloc/${region} `;
    return this.http.get<Country[]>(url); // regreso un objeto de tipo observable, es decir quien llame a este metodo debera susbribirse
  }

}
