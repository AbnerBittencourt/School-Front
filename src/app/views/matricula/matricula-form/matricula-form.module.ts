import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared.module';
import { ButtonCancelarMatriculaComponent } from './components/button-cancelar-matricula/button-cancelar-matricula.component';
import { ButtonDeletarMatriculaComponent } from './components/button-deletar-matricula/button-deletar-matricula.component';
import { ButtonSalvarMatriculaComponent } from './components/button-salvar-matricula/button-salvar-matricula.component';
import { DropdownAlunoComponent } from './components/dropdown-aluno/dropdown-aluno.component';
import { DropdownCursoComponent } from './components/dropdown-curso/dropdown-curso.component';
import { MatriculaFormRoutingModule } from './matricula-form-routing.module';
import { MatriculaFormComponent } from './matricula-form.component';

let components = [
    MatriculaFormComponent,
    DropdownAlunoComponent,
    DropdownCursoComponent,
    ButtonSalvarMatriculaComponent,
    ButtonCancelarMatriculaComponent,
    ButtonDeletarMatriculaComponent
]

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatriculaFormRoutingModule, SharedModule]
})
export class MatriculaFormModule { }
