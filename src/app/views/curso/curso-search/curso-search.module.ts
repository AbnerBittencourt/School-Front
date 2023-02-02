import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared.module';
import { TableCursoComponent } from './components/table-curso/table-curso.component';
import { CursoSearchRoutingModule } from './curso-search-routing.module';
import { CursoSearchComponent } from './curso-search.component';

const components = [
    CursoSearchComponent,
    TableCursoComponent
]
@NgModule({
  declarations: [...components ],
  imports: [CommonModule, CursoSearchRoutingModule, SharedModule],
  exports: [...components]
})
export class CursoSearchModule { }
