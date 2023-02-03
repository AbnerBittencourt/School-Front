import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatriculaFormRoutingModule } from './matricula-form-routing.module';
import { MatriculaFormComponent } from './matricula-form.component';
import { DropdownAlunoComponent } from './components/dropdown-aluno/dropdown-aluno.component';
import { DropdownCursoComponent } from './components/dropdown-curso/dropdown-curso.component';
import { ButtonSalvarMatriculaComponent } from './components/button-salvar-matricula/button-salvar-matricula.component';
import { ButtonCancelarMatriculaComponent } from './components/button-cancelar-matricula/button-cancelar-matricula.component';
import { ButtonDeletarMatriculaComponent } from './components/button-deletar-matricula/button-deletar-matricula.component';


@NgModule({
  declarations: [
    MatriculaFormComponent,
    DropdownAlunoComponent,
    DropdownCursoComponent,
    ButtonSalvarMatriculaComponent,
    ButtonCancelarMatriculaComponent,
    ButtonDeletarMatriculaComponent
  ],
  imports: [
    CommonModule,
    MatriculaFormRoutingModule
  ]
})
export class MatriculaFormModule { }
