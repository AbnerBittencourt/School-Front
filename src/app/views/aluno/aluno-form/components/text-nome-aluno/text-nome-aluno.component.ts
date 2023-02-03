import { Component, OnInit } from '@angular/core';
import { ParentFormGroup } from 'app/tools/parent-form-group';

@Component({
  selector: 'app-text-nome-aluno',
  templateUrl: './text-nome-aluno.component.html',
  styleUrls: ['./text-nome-aluno.component.scss'],
  viewProviders: [ParentFormGroup]
})
export class TextNomeAlunoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
