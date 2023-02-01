import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared.module';
import { MatriculaSearchRoutingModule } from './matricula-search-routing.module';
import { MatriculaSearchComponent } from './matricula-search.component';


const components = [
    MatriculaSearchComponent
]
@NgModule({
  declarations: [...components ],
  imports: [CommonModule, MatriculaSearchRoutingModule, SharedModule],
  exports: [...components]
})
export class MatriculaSearchModule { }
