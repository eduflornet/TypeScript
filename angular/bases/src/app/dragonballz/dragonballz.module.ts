import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';



// Antes de generar componentes se debera generar este modulo mediante Angular CLI: ng g m /dragonballz/mainPage --skipTests --dry-run
@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  // Debemos exportar el componente para que sea visible en el app.component.html usando <app-main-page> </app-main-page>
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DragonballzModule { }
