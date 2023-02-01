import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrincipalComponent } from "./principal.component";

const routes: Routes = [
    {
        path: "",
        component: PrincipalComponent,
    },
    {
        path: "alunos",
        loadChildren: () => import('../aluno/aluno.module').then((m) => m.AlunoModule),
        component: PrincipalComponent
      },
    {
        path: "cursos",
        loadChildren: () => import('../curso/curso.module').then((m) => m.CursoModule),
        component: PrincipalComponent
    },
    {
        path: "matriculas",
        loadChildren: () => import("../matricula/matricula.module").then((m) => m.MatriculaModule),
        component: PrincipalComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PrincipalRoutingModule {}
