import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

// desde la version 4 de angular los servicios estan disponiblees en el momento que se construyen
// no importa donde esten, este servicio va a ser global, esto evita que tenga que especificarlo en los providers
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'amRPLANlckz856YW2Bkm1dA9D7isTh5g';
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  get historial(){
    

    return [...this._historial] // se rompe la referencia con el operador spread y regresa un nuevo arreglo
  }

  constructor(private http: HttpClient){}

  buscarGifs(query:string= '' ){
    // convertir a minuscula todas las palabras
    query = query.trim().toLocaleLowerCase();
    // limitar la cantidad de inserciones que podemos tener en el historial
    this._historial = this._historial.splice(0,10);

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=amRPLANlckz856YW2Bkm1dA9D7isTh5g&q=${query}&limit=10`)
    .subscribe( ( resp: any ) =>{
      console.log(resp.data);
      this.resultados = resp.data;
    });
    // el subcribe se va a ejecutar cuando tengamos la resolucion del GET
    // si existe
    const found = this._historial.find(item=> item===query);
    // agrego elemento al principio del arreglo
    // si es distinto a la palabra de busqueda entonces la agrego a la lista
    if(found!==query) {
      this._historial.unshift(query);
    }

    // solucion 2
    // si no esta en la lista la palabra de busqueda
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
   } 

  }
}
