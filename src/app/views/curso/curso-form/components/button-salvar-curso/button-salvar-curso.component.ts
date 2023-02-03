import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Curso } from "app/model/entities/curso.entity";
import { CursoService } from "app/services/curso.service";
import { ParentFormGroup } from "app/tools/parent-form-group";

@Component({
    selector: "app-button-salvar-curso",
    templateUrl: "./button-salvar-curso.component.html",
    styleUrls: ["./button-salvar-curso.component.scss"],
    viewProviders: [ParentFormGroup],
})
export class ButtonSalvarCursoComponent implements OnInit {
    formGroup: FormGroup;

    constructor(
        private _controlContainer: ControlContainer,
        private _cursoService: CursoService,
        private _snackBar: MatSnackBar,
        private _dialog: MatDialog,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.formGroup = this._controlContainer.control as FormGroup;
    }

    async save() {
        try {
            if (!this.formGroup.valid) {
                this.formGroup.markAllAsTouched();
                throw new Error("Campos obrigatórios inválidos");
            }
            let curso: Curso = this.formGroup.getRawValue();
            await this._cursoService.save(curso).subscribe({
                next: _ => {
                    this._snackBar.open("Curso salvo com sucesso.", "OK", {
                        duration: 3000,
                    });
                    this.redirectTo(["cursos"]);
                    this._dialog.closeAll();
                },
                error: e => {
                    this._snackBar.open(e.error.message, "OK", {
                        duration: 3000,
                    });
                },
            });
        } catch (error: any) {
            this._snackBar.open(error.message, "OK", {
                duration: 3000,
            });
        }
    }

    redirectTo(uri: Array<any>) {
        this._router.navigateByUrl("/", { skipLocationChange: true })
            .then(() => this._router.navigate(uri));
    }
}
