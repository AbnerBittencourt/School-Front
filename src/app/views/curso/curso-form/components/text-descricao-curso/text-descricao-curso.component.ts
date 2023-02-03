import { Component, OnInit } from '@angular/core';
import { ParentFormGroup } from 'app/tools/parent-form-group';

@Component({
  selector: 'app-text-descricao-curso',
  templateUrl: './text-descricao-curso.component.html',
  styleUrls: ['./text-descricao-curso.component.scss'],
  viewProviders: [ParentFormGroup]
})
export class TextDescricaoCursoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
