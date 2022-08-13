import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

// Este servicio se debe definir en los providers del modulo dragonballz
// una vez que sea inyectado en cualquier componente, esta sera la unica instancia que estara disponible para todo el modulo donde fue definido
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() { }

  agregarPersonaje(data: Personaje): void {
    this._personajes.push(data);
  }

}
