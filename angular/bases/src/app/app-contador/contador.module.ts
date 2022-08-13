import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContadorComponent } from './app-contador.component';



@NgModule({
  declarations: [
    AppContadorComponent
  ],
  exports: [
    AppContadorComponent
  ]
  ,
  imports: [
    CommonModule
  ]
})
export class ContadorModule { }
