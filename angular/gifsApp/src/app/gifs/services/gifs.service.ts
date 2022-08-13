import { Injectable } from '@angular/core';

// desde la version 4 de angular los servicios estan disponiblees en el momento que se construyen
// no importa donde esten, este servicio va a ser global, esto evita que tenga que especificarlo en los providers
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  get historial(){
    return [...this._historial] // se rompe la referencia con el operador spread y regresa un nuevo arreglo
  }

  buscarGifs(query:string){
    // agrego elemento al principio del arreglo
    this._historial.unshift(query);
  }
}
