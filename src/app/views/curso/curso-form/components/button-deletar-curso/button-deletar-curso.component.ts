import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { CursoService } from "app/services/curso.service";

@Component({
    selector: "app-button-deletar-curso",
    templateUrl: "./button-deletar-curso.component.html",
    styleUrls: ["./button-deletar-curso.component.scss"],
})
export class ButtonDeletarCursoComponent implements OnInit {
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

    async delete() {
        let curso = this.formGroup.getRawValue();
        await this._cursoService.delete(curso.id).subscribe({
            next: _ => {
                this._snackBar.open("Curso deletado com sucesso.", "OK", {
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
    }

    redirectTo(uri: Array<any>) {
        this._router.navigateByUrl("/", { skipLocationChange: true })
            .then(() => this._router.navigate(uri));
    }
}
