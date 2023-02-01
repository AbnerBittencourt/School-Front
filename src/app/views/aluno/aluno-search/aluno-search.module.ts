import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoSearchRoutingModule } from './aluno-search-routing.module';
import { AlunoSearchComponent } from './aluno-search.component';


@NgModule({
  declarations: [
    AlunoSearchComponent
  ],
  imports: [
    CommonModule,
    AlunoSearchRoutingModule
  ]
})
export class AlunoSearchModule { }
