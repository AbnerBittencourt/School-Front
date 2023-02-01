import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatriculaSearchRoutingModule } from './matricula-search-routing.module';
import { MatriculaSearchComponent } from './matricula-search.component';


@NgModule({
  declarations: [
    MatriculaSearchComponent
  ],
  imports: [
    CommonModule,
    MatriculaSearchRoutingModule
  ]
})
export class MatriculaSearchModule { }
