import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError:boolean = false;
  capitales: Country [] = [];
  constructor(private paisService: PaisService) { }
  
  ngOnInit(): void {
    
  }

  buscar(termino:string){
    // recibo como argumento el termino
    this.termino = termino;
    console.log(this.termino);
    this.hayError = false;
    
    this.paisService.buscarCapital(this.termino)
    .subscribe((capitales) =>{
      this.capitales = capitales;
      console.log('obtengo capitales', capitales);
    }, (err)=> {
      this.hayError = true;
      this.capitales = [];
      console.log('error:',err);
    });
  }

  sugerencias(termino: string){
    this.hayError = false;
    // TODO: crear sugerencias
  }

}
