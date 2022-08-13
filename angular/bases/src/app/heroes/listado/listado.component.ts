import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent implements OnInit {

  public heroeBorrado: string = '';

  // el constructor se ejecuta antes de la renderización del mismo
  constructor() {}

  // ngOnInit es el primer ciclo de vida de angular
  // se usa para inicializar valores, llamadas a servicios, etc
  ngOnInit(): void {}

heroes: string[] = ['Spiderman','Ironman', 'Hulk', 'Thor'];



borrarHeroe():void {
  
  //this.heroes.pop();
  // si lo que devuelve es "undefined" puedo devolver string vacio con el operador logico OR
  this.heroeBorrado = this.heroes.shift() || '' ;
  console.log('borrando ...',this.heroeBorrado);
}

}
