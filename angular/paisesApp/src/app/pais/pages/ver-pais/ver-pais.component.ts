import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  paises!: Country[]; // con ! le indico a typescript que puede ser nulo

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService
              ) { }
  // tiene todo lo necesario para suscribir a cambios de URL

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.getPaisPorAlpha(id) ),
      tap( console.log)
    )
    .subscribe( paises => {
      this.paises = paises
      console.log('paises ', paises)
    });

    // this.activatedRoute.params.subscribe(  ({id}) => {
    //   console.log(id);
    //   this.paisService.getPaisPorAlpha(id).subscribe(pais => {
    //     console.log(pais);

    //   })

    // });

  }

}
