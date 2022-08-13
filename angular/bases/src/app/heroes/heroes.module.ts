import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    // se exporta para hacerlo visible hacia afuera
    ListadoComponent
  ],
  imports: [
    // por defecto se debe importar CommonModule
    CommonModule
  ]
})
export class HeroesModule { }
