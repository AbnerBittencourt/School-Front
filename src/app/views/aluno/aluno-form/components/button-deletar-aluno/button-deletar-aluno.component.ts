import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AlunoService } from 'app/services/aluno.service';
import { ParentFormGroup } from 'app/tools/parent-form-group';

@Component({
  selector: 'app-button-deletar-aluno',
  templateUrl: './button-deletar-aluno.component.html',
  styleUrls: ['./button-deletar-aluno.component.scss'],
  viewProviders: [ParentFormGroup]
})
export class ButtonDeletarAlunoComponent implements OnInit {

    formGroup: FormGroup;

    constructor(
        private _controlContainer: ControlContainer,
        private _alunoService: AlunoService,
        private _snackBar: MatSnackBar,
        private _dialog: MatDialog,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.formGroup = this._controlContainer.control as FormGroup;
    }

    async delete() {
        try {
            let aluno = this.formGroup.getRawValue();
            await this._alunoService.delete(aluno.id).subscribe(_ => {
                this._snackBar.open("Aluno deletado com sucesso.", "OK", {
                    duration: 3000
                });
                this.redirectTo(["alunos"]);
                this._dialog.closeAll();
            });
        } catch(error: any){
            console.log("teste", error)
            this._snackBar.open(error.message, "OK", {
                duration: 3000
            });
        }
    }

    redirectTo(uri: Array<any>) {
        this._router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
            this._router.navigate(uri));
    }

}
