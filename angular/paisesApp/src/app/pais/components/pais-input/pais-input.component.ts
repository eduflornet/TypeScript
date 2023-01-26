import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit  {



  termino: string = '';
  // evento que va emitir el "termino hacia afuera"
  @Output() onEnter:    EventEmitter<string> = new EventEmitter();
  // evento que se emite cuando se deja de escribir
  // con formularios reactivos ya viene integrado "debounce"
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  constructor() { }
  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor =>{
      //console.log('debouncer ', valor);
      this.onDebounce.emit(valor);
    });
  }

  teclaPresionada() {
    //const valor = event.target.value;
    this.debouncer.next(this.termino);
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

}
