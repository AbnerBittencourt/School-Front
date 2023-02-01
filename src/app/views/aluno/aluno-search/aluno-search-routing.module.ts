import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoSearchComponent } from './aluno-search.component';

const routes: Routes = [
    {
        path: "",
        component: AlunoSearchComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoSearchRoutingModule { }
