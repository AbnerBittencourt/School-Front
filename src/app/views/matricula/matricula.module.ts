import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatriculaRoutingModule } from './matricula-routing.module';
import { MatriculaComponent } from './matricula.component';


@NgModule({
  declarations: [
    MatriculaComponent
  ],
  imports: [
    CommonModule,
    MatriculaRoutingModule
  ]
})
export class MatriculaModule { }
