import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'app/model/entities/curso.entity';
import { CursoService } from 'app/services/curso.service';
import { CursoFormComponent } from 'app/views/curso/curso-form/curso-form.component';

@Component({
  selector: 'app-table-curso',
  templateUrl: './table-curso.component.html',
  styleUrls: ['./table-curso.component.scss']
})
export class TableCursoComponent implements OnInit {

    columns: string[] = ["descricao", "ementa"];
    dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>();

    constructor(
        private _cursoService: CursoService,
        private _dialog: MatDialog,
    ) {}

    ngOnInit() {
        this.load();
    }

    async load() {
        return await this._cursoService.find().subscribe((r) => this.dataSource.data = r);
    }

    edit(row: Curso){
        this._dialog.open(CursoFormComponent, {
            data: row,
            width: "35%"
        });
    }
}

