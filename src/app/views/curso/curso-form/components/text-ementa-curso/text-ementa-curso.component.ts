import { Component, OnInit } from '@angular/core';
import { ParentFormGroup } from 'app/tools/parent-form-group';

@Component({
  selector: 'app-text-ementa-curso',
  templateUrl: './text-ementa-curso.component.html',
  styleUrls: ['./text-ementa-curso.component.scss'],
  viewProviders: [ParentFormGroup]
})
export class TextEmentaCursoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
