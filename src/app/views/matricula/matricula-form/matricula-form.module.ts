import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatriculaFormRoutingModule } from './matricula-form-routing.module';
import { MatriculaFormComponent } from './matricula-form.component';


@NgModule({
  declarations: [
    MatriculaFormComponent
  ],
  imports: [
    CommonModule,
    MatriculaFormRoutingModule
  ]
})
export class MatriculaFormModule { }
