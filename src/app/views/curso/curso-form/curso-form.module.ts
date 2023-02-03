import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "app/shared.module";
import { ButtonCancelarCursoComponent } from "./components/button-cancelar-curso/button-cancelar-curso.component";
import { ButtonDeletarCursoComponent } from "./components/button-deletar-curso/button-deletar-curso.component";
import { ButtonSalvarCursoComponent } from "./components/button-salvar-curso/button-salvar-curso.component";
import { TextDescricaoCursoComponent } from "./components/text-descricao-curso/text-descricao-curso.component";
import { TextEmentaCursoComponent } from "./components/text-ementa-curso/text-ementa-curso.component";
import { CursoFormRoutingModule } from "./curso-form-routing.module";
import { CursoFormComponent } from "./curso-form.component";

const components = [
    CursoFormComponent,
    TextEmentaCursoComponent,
    ButtonSalvarCursoComponent,
    TextDescricaoCursoComponent,
    ButtonDeletarCursoComponent,
    ButtonCancelarCursoComponent
];
@NgModule({
    declarations: [...components],
    imports: [CommonModule, CursoFormRoutingModule, SharedModule],
})
export class CursoFormModule {}
