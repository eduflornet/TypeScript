import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
//export class BusquedaComponent implements OnInit {
  export class BusquedaComponent {
    // referencia HTML
    @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

    constructor(private gifsService:GifsService) { }
  /*
    ngOnInit(): void {
  }
  */
 buscar(){
  const valor = this.txtBuscar.nativeElement.value;
  this.gifsService.buscarGifs(valor);
  console.log(valor);
  this.txtBuscar.nativeElement.value = '';
 }

}
