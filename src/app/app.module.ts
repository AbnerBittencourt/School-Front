import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AlunoController } from "./controllers/aluno.controller";
import { CursoController } from "./controllers/curso.controller";
import { MatriculaController } from "./controllers/matricula.controller";
import { AlunoService } from "./services/aluno.service";
import { CursoService } from "./services/curso.service";
import { MatriculaService } from "./services/matricula.service";
import { SharedModule } from "./shared.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
    ],
    providers: [
        AlunoService,
        AlunoController,
        CursoController,
        CursoService,
        MatriculaController,
        MatriculaService,
        { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} },
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500} }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
