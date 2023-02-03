import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { Curso } from 'app/model/entities/curso.entity';
import { CursoService } from 'app/services/curso.service';
import { ParentFormGroup } from 'app/tools/parent-form-group';

@Component({
  selector: 'app-dropdown-curso',
  templateUrl: './dropdown-curso.component.html',
  styleUrls: ['./dropdown-curso.component.scss'],
  viewProviders: [ParentFormGroup]
})
export class DropdownCursoComponent implements OnInit {

    cursos: Array<Curso>;
    formGroup: FormGroup;

    constructor(
      private _cursoService: CursoService,
      private _controlContainer: ControlContainer
    ) {}

    ngOnInit() {
      this.formGroup = this._controlContainer.control as FormGroup;
    }

    ngAfterViewInit() {
      this.load();
    }

    async load() {
        return await this._cursoService.find().subscribe((r) => this.cursos = r);
    }

}
