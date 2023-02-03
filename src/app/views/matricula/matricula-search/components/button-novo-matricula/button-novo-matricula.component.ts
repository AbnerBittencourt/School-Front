import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatriculaFormComponent } from 'app/views/matricula/matricula-form/matricula-form.component';

@Component({
  selector: 'app-button-novo-matricula',
  templateUrl: './button-novo-matricula.component.html',
  styleUrls: ['./button-novo-matricula.component.scss']
})
export class ButtonNovoMatriculaComponent implements OnInit {

    constructor(
        private _dialog: MatDialog,
        private _router: Router
    ) {}

    ngOnInit(): void {}

    cadastrar() {
        let dialogRef = this._dialog.open(MatriculaFormComponent, {
            width: "35%"
        });

        dialogRef.afterClosed().subscribe((_) => {
            this._router.navigate(["/matriculas"]);
        });
    }
}
