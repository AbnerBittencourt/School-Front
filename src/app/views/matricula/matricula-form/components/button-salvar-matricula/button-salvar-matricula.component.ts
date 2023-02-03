import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { MatriculaDTO } from "app/model/dto/matricula.dto";
import { MatriculaService } from "app/services/matricula.service";

@Component({
    selector: "app-button-salvar-matricula",
    templateUrl: "./button-salvar-matricula.component.html",
    styleUrls: ["./button-salvar-matricula.component.scss"],
})
export class ButtonSalvarMatriculaComponent implements OnInit {
    formGroup: FormGroup;

    constructor(
        private _controlContainer: ControlContainer,
        private _matriculaService: MatriculaService,
        private _snackBar: MatSnackBar,
        private _dialog: MatDialog,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.formGroup = this._controlContainer.control as FormGroup;
    }

    async save() {
        if (!this.formGroup.valid) {
            this.formGroup.markAllAsTouched();
            throw new Error("Campos obrigatórios inválidos");
        }
        let matriculaDTO: MatriculaDTO = this.formGroup.getRawValue();
        await this._matriculaService.save(matriculaDTO).subscribe({
            next: _ => {
                this._snackBar.open("Matrícula salva com sucesso.", "OK", {
                    duration: 3000,
                });
                this.redirectTo(["matriculas"]);
                this._dialog.closeAll();
            },
            error: e => {
                this._snackBar.open(e.error.message, "OK", {
                    duration: 3000,
                });
            },
        });
    }

    redirectTo(uri: Array<any>) {
        this._router.navigateByUrl("/", { skipLocationChange: true })
            .then(() => this._router.navigate(uri));
    }
}
