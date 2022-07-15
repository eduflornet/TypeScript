import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input() personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar() {
    //console.log(this.nuevo);
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    } else {
      this.personajes.push(this.nuevo);
      this.nuevo = { nombre: '', poder: 0 };
    }
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
