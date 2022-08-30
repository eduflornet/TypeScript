import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent  {

  termino: string = '';
  // evento que va emitir el "termino hacia afuera"
  @Output() onEnter: EventEmitter<string> = new EventEmitter(); 

  buscar() {
    this.onEnter.emit(this.termino);
  }



  constructor() { }

}
