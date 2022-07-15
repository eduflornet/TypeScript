import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './app-contador/contador.module';
import { DragonballzModule } from './dragonballz/dragonballz.module';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    // se deben importar todos los modulos que ha sido exportados
    // para nuestro ejemplo: HeroesModule
    HeroesModule,
    ContadorModule,
    DragonballzModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
