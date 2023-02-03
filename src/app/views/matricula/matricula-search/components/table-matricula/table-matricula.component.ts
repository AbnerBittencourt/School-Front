import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatriculaDTO } from 'app/model/dto/matricula.dto';
import { MatriculaService } from 'app/services/matricula.service';
import { MatriculaFormComponent } from 'app/views/matricula/matricula-form/matricula-form.component';

@Component({
  selector: 'app-table-matricula',
  templateUrl: './table-matricula.component.html',
  styleUrls: ['./table-matricula.component.scss']
})
export class TableMatriculaComponent implements OnInit {

    columns: string[] = ["aluno", "ementa"];
    dataSource: MatTableDataSource<MatriculaDTO> = new MatTableDataSource<MatriculaDTO>();

    constructor(
        private _matriculaService: MatriculaService,
        private _dialog: MatDialog,
    ) {}

    ngOnInit() {
        this.load();
    }

    async load() {
        return await this._matriculaService.find().subscribe((r) => this.dataSource.data = r);
    }

    edit(row: MatriculaDTO){
        this._dialog.open(MatriculaFormComponent, {
            data: row,
            width: "35%"
        });
    }

}
