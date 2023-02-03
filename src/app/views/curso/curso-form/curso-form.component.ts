import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curso } from 'app/model/entities/curso.entity';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit, AfterViewInit {

    formGroup: FormGroup;

    constructor(
      private dialogRef: MatDialogRef<CursoFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Curso
    ) { }

    ngOnInit() {
      this.createFormGroup();
    }

    ngAfterViewInit() {
      this.load();
    }

    private createFormGroup(){
        this.formGroup = new FormGroup({
            'id': new FormControl(),
            'descricao': new FormControl(),
            'ementa': new FormControl()
        });
    }

    async load() {
      if(this.data)
        this.formGroup.patchValue(this.data);
    }

    close() {
      this.dialogRef.close();
    }
}
