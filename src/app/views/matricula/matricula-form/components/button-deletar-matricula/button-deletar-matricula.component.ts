import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { MatriculaService } from "app/services/matricula.service";

@Component({
    selector: "app-button-deletar-matricula",
    templateUrl: "./button-deletar-matricula.component.html",
    styleUrls: ["./button-deletar-matricula.component.scss"],
})
export class ButtonDeletarMatriculaComponent implements OnInit {
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

    async delete() {
        let matricula = this.formGroup.getRawValue();
        await this._matriculaService.delete(matricula.id).subscribe({
            next: _ => {
                this._snackBar.open("Matrícula deletada com sucesso.", "OK", {
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
