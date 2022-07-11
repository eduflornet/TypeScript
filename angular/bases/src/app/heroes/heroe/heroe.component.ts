import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})

// One way data binding
// es decir los valores del HTML esta vinculados al componente
// por medio de interpolation
export class HeroeComponent implements OnInit {

  nombre: string = 'Ironman';
  edad: number = 45;

  constructor() { }

  ngOnInit(): void {
  }

  // metodo getter
  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre}-${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 30;
  }

}
