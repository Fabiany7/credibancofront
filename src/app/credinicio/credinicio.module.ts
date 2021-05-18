import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredimainComponent } from './credimain/credimain.component';



@NgModule({
  declarations: [
    CredimainComponent
  ],
  exports: [
    CredimainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CredinicioModule { }
