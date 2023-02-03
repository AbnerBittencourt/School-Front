import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CursoFormComponent } from 'app/views/curso/curso-form/curso-form.component';

@Component({
  selector: 'app-button-novo-curso',
  templateUrl: './button-novo-curso.component.html',
  styleUrls: ['./button-novo-curso.component.scss']
})
export class ButtonNovoCursoComponent implements OnInit {

    constructor(
        private _dialog: MatDialog,
        private _router: Router
    ) {}

    ngOnInit(): void {}

    cadastrar() {
        let dialogRef = this._dialog.open(CursoFormComponent, {
            width: "35%"
        });

        dialogRef.afterClosed().subscribe((_) => {
            this._router.navigate(["/cursos"]);
        });
    }
}
