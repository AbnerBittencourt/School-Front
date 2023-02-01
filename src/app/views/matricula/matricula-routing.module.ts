import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./matricula-search/matricula-search.module').then((m) => m.MatriculaSearchModule),
    },
    {
        path: '',
        loadChildren: () => import('./matricula-form/matricula-form.module').then((m) => m.MatriculaFormModule),
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatriculaRoutingModule { }
