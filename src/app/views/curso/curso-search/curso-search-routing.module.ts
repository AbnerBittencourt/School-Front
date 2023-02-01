import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoSearchComponent } from './curso-search.component';

const routes: Routes = [
    {
        path: "",
        component: CursoSearchComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoSearchRoutingModule { }
