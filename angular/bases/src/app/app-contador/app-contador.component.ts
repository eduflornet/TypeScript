import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './app-contador.component.html',
  styleUrls: ['./app-contador.component.css']
})
export class AppContadorComponent implements OnInit {
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  /*
  sumar() {
    this.numero += 1;
  }

  restar() {
    this.numero -= 1;
  }
  */

  acumular(valor: number) {
    this.numero += valor;
  }

}
