import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Aluno } from 'app/model/entities/aluno.entity';
import { AlunoService } from 'app/services/aluno.service';
import { AlunoFormComponent } from 'app/views/aluno/aluno-form/aluno-form.component';

@Component({
  selector: 'app-table-aluno',
  templateUrl: './table-aluno.component.html',
  styleUrls: ['./table-aluno.component.scss']
})
export class TableAlunoComponent implements OnInit {

    columns: string[] = ["nome"];
    dataSource: MatTableDataSource<Aluno> = new MatTableDataSource<Aluno>();
    formGroup: FormGroup;

    constructor(
        private _alunoService: AlunoService,
        private _dialog: MatDialog,
    ) {}

    ngOnInit() {
        this.load();
    }

    async load() {
        return await this._alunoService.find().subscribe((r) => this.dataSource.data = r);
    }

    edit(row: Aluno){
        this._dialog.open(AlunoFormComponent, {
            data: row,
            width: "35%"
        });
    }

}
