import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})

//export class PersonajesComponent implements OnInit {
  export class PersonajesComponent {

    @Input() personajes: Personaje[] = [];

  /* constructor() { }

  ngOnInit(): void {
  } */

}
