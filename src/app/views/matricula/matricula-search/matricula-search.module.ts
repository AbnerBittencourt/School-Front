import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared.module';
import { ButtonNovoMatriculaComponent } from './components/button-novo-matricula/button-novo-matricula.component';
import { TableMatriculaComponent } from './components/table-matricula/table-matricula.component';
import { MatriculaSearchRoutingModule } from './matricula-search-routing.module';
import { MatriculaSearchComponent } from './matricula-search.component';


const components = [
    MatriculaSearchComponent,
    TableMatriculaComponent,
    ButtonNovoMatriculaComponent
]
@NgModule({
  declarations: [...components ],
  imports: [CommonModule, MatriculaSearchRoutingModule, SharedModule],
  exports: [...components]
})
export class MatriculaSearchModule { }
