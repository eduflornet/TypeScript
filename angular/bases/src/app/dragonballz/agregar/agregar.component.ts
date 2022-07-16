import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  //@Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // OutPut sirve para emitir eventos, por defecto es generic, por lo tanto se debe definir el tipo que se va a emitir
  // Por medio de output vamos a comunicar este valor al componente padre mainPage
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  

  agregar() {
    
    if (this.nuevo.nombre.trim().length === 0) { return; }
    
    // voy a emitir el valor de nuevo hacia el componente padre mediante una emisión
     this.onNuevoPersonaje.emit(this.nuevo); 
      console.log(this.nuevo);
      //this.personajes.push(this.nuevo);
      //console.log(this.personajes);
      this.nuevo = { nombre: '', poder: 0 };

  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
