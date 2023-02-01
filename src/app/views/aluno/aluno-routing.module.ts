import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./aluno-search/aluno-search.module').then((m) => m.AlunoSearchModule),
    },
    {
        path: '',
        loadChildren: () => import('./aluno-form/aluno-form.module').then((m) => m.AlunoFormModule),
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
