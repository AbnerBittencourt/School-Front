import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Aluno } from 'app/model/entities/aluno.entity';
import { AlunoService } from 'app/services/aluno.service';
import { ParentFormGroup } from 'app/tools/parent-form-group';

@Component({
  selector: 'app-button-salvar-aluno',
  templateUrl: './button-salvar-aluno.component.html',
  styleUrls: ['./button-salvar-aluno.component.scss'],
  viewProviders: [ParentFormGroup]
})
export class ButtonSalvarAlunoComponent implements OnInit {

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

    async save() {
        try {
            if(!this.formGroup.valid){
                this.formGroup.markAllAsTouched();
                throw new Error('Campos obrigatórios inválidos');
            }
            let aluno: Aluno = this.formGroup.getRawValue();
            await this._alunoService.save(aluno).subscribe(_ => {
                this._snackBar.open("Aluno salvo com sucesso.", "OK", {
                    duration: 3000
                });
                this.redirectTo(["alunos"]);
                this._dialog.closeAll();
            });
        } catch(error: any){
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
