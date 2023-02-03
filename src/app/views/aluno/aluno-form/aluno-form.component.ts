import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Aluno } from 'app/model/entities/aluno.entity';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit {

    formGroup: FormGroup;

    constructor(
      private dialogRef: MatDialogRef<AlunoFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Aluno
    ) { }


    ngOnInit() {
      this.formGroup = new FormGroup({
          'id': new FormControl(),
          'nome':new FormControl()
      });
    }

    ngAfterViewInit() {
      this.load();
    }

    async load() {
      if(this.data){
        this.formGroup.patchValue(this.data);
      }
    }

    close() {
      this.dialogRef.close();
    }


}
