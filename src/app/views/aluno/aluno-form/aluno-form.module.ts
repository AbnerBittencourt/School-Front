import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared.module';
import { AlunoFormRoutingModule } from './aluno-form-routing.module';
import { AlunoFormComponent } from './aluno-form.component';
import { ButtonCancelarAlunoComponent } from './components/button-cancelar-aluno/button-cancelar-aluno.component';
import { ButtonDeletarAlunoComponent } from './components/button-deletar-aluno/button-deletar-aluno.component';
import { ButtonSalvarAlunoComponent } from './components/button-salvar-aluno/button-salvar-aluno.component';
import { TextNomeAlunoComponent } from './components/text-nome-aluno/text-nome-aluno.component';

const components = [
    AlunoFormComponent,
    TextNomeAlunoComponent,
    ButtonSalvarAlunoComponent,
    ButtonDeletarAlunoComponent,
    ButtonCancelarAlunoComponent
]
@NgModule({
  declarations: [...components],
  imports: [CommonModule, AlunoFormRoutingModule, SharedModule]
})
export class AlunoFormModule { }
