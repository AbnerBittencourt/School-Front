import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared.module';
import { AlunoSearchRoutingModule } from './aluno-search-routing.module';
import { AlunoSearchComponent } from './aluno-search.component';
import { ButtonNovoAlunoComponent } from './components/button-novo-aluno/button-novo-aluno.component';
import { TableAlunoComponent } from './components/table-aluno/table-aluno.component';

const components = [
    AlunoSearchComponent,
    TableAlunoComponent,
    ButtonNovoAlunoComponent
]
@NgModule({
  declarations: [...components ],
  imports: [CommonModule, AlunoSearchRoutingModule, SharedModule],
  exports: [...components]
})
export class AlunoSearchModule { }
