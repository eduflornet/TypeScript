import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {
  termino: string = '';
  hayError:boolean = false;
  paises: Country [] = [];
  constructor(private paisService: PaisService) { }


  buscar(termino:string){
    // recibo como argumento el termino
    this.termino = termino;
    console.log(this.termino);
    this.hayError = false;
    this.paisService.buscarPais(this.termino)
    .subscribe((paises) =>{
      this.paises = paises;
      console.log('obtengo resp', paises);
    }, (err)=> {
      this.hayError = true;
      this.paises = [];
      console.log('error:',err);
    });
  }

  sugerencias(termino: string){
    this.hayError = false;
    // TODO: crear sugerencias
  }

  

}
