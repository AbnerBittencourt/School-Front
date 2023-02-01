import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared.module';
import { CursoSearchRoutingModule } from './curso-search-routing.module';
import { CursoSearchComponent } from './curso-search.component';

const components = [
    CursoSearchComponent
]
@NgModule({
  declarations: [...components ],
  imports: [CommonModule, CursoSearchRoutingModule, SharedModule],
  exports: [...components]
})
export class CursoSearchModule { }
