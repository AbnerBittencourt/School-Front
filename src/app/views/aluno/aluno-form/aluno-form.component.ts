import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Aluno } from 'app/model/entities/aluno.entity';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, AfterViewInit {

    formGroup: FormGroup;

    constructor(
      private dialogRef: MatDialogRef<AlunoFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Aluno
    ) { }


    ngOnInit() {
      this.createFormGroup();
    }

    ngAfterViewInit() {
      this.load();
    }

    private createFormGroup() {
        this.formGroup = new FormGroup({
            'id': new FormControl(),
            'nome':new FormControl()
        });
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
