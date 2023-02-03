import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlunoFormComponent } from 'app/views/aluno/aluno-form/aluno-form.component';

@Component({
  selector: 'app-button-novo-aluno',
  templateUrl: './button-novo-aluno.component.html',
  styleUrls: ['./button-novo-aluno.component.scss']
})
export class ButtonNovoAlunoComponent implements OnInit {

    constructor(
        private _dialog: MatDialog,
        private _router: Router
    ) {}

    ngOnInit(): void {}

    cadastrar() {
        let dialogRef = this._dialog.open(AlunoFormComponent, {
            width: "35%"
        });

        dialogRef.afterClosed().subscribe((_) => {
            this._router.navigate(["/aluno"]);
        });
    }

}
