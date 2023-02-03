import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { Aluno } from 'app/model/entities/aluno.entity';
import { AlunoService } from 'app/services/aluno.service';
import { ParentFormGroup } from 'app/tools/parent-form-group';

@Component({
  selector: 'app-dropdown-aluno',
  templateUrl: './dropdown-aluno.component.html',
  styleUrls: ['./dropdown-aluno.component.scss'],
  viewProviders: [ParentFormGroup]
})
export class DropdownAlunoComponent implements OnInit {

    alunos: Array<Aluno>;
    formGroup: FormGroup;

    constructor(
      private _alunoService: AlunoService,
      private _controlContainer: ControlContainer
    ) {}

    ngOnInit() {
      this.formGroup = this._controlContainer.control as FormGroup;
    }

    ngAfterViewInit() {
      this.load();
    }

    async load() {
        return await this._alunoService.find().subscribe((r) => this.alunos = r);
    }
}
