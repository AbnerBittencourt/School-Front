import { AfterViewInit, Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatriculaDTO } from "app/model/dto/matricula.dto";

@Component({
    selector: "app-matricula-form",
    templateUrl: "./matricula-form.component.html",
    styleUrls: ["./matricula-form.component.scss"],
})
export class MatriculaFormComponent implements OnInit, AfterViewInit {

    formGroup: FormGroup;

    constructor(
        private dialogRef: MatDialogRef<MatriculaFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: MatriculaDTO
    ) {}

    ngOnInit() {
       this.createFormGroup();
    }

    ngAfterViewInit() {
        this.load();
    }

    private createFormGroup(){
        this.formGroup = new FormGroup({
            "id": new FormControl(),
        });
        this.formGroup.addControl("aluno",
            new FormGroup({
                "id": new FormControl(),
                "nome": new FormControl(),
            })
        );
        this.formGroup.addControl("curso",
            new FormGroup({
                "id": new FormControl(),
                "descricao": new FormControl(),
                "ementa": new FormControl(),
            })
        );
    }

    async load() {
        if (this.data)
            this.formGroup.patchValue(this.data);
    }

    close() {
        this.dialogRef.close();
    }
}
