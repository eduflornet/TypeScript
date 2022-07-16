import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
  //styleUrls: ['./main-page.component.css']
})

//export class MainPageComponent implements OnInit {
export class MainPageComponent {


  // la declaracion de este objeto se muda al componentes hijo agregar
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  /* constructor() { }

  ngOnInit(): void {
  } */

  agregar1(event: any) {
    // prevee el comportamiento que tiene el submit de un formulario
    event.preventDefault();

    // pintar el evento del formulario
    //console.log(event);
  }

  agregarNuevoPersonaje(personaje:Personaje){
    console.log('Main page component, recibo personaje: ',personaje);
    
    this.personajes.push(personaje);
    console.log('se agrego a la lista: ',this.personajes);
  }

  // este metodo se ha mudado al componente hijo Agregar para mantener la logica de negocio

/* agregar() {
    //console.log(this.nuevo);
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    } else {
      this.personajes.push(this.nuevo);
      this.nuevo = { nombre: '', poder: 0 };
    }
  } */

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

}
