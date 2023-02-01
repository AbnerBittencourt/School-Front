import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoSearchRoutingModule } from './curso-search-routing.module';
import { CursoSearchComponent } from './curso-search.component';


@NgModule({
  declarations: [
    CursoSearchComponent
  ],
  imports: [
    CommonModule,
    CursoSearchRoutingModule
  ]
})
export class CursoSearchModule { }
