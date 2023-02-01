import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./curso-search/curso-search.module').then((m) => m.CursoSearchModule),
    },
    {
        path: '',
        loadChildren: () => import('./curso-form/curso-form.module').then((m) => m.CursoFormModule),
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
