import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared.module';
import { AlunoSearchRoutingModule } from './aluno-search-routing.module';
import { AlunoSearchComponent } from './aluno-search.component';
import { TableAlunoComponent } from './components/table-aluno/table-aluno.component';

const components = [
    AlunoSearchComponent,
    TableAlunoComponent
]
@NgModule({
  declarations: [...components ],
  imports: [CommonModule, AlunoSearchRoutingModule, SharedModule],
  exports: [...components]
})
export class AlunoSearchModule { }
