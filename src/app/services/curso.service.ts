import { Injectable } from '@angular/core';
import { CursoController } from 'app/controllers/curso.controller';
import { Curso } from 'app/model/entities/curso.entity';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

    constructor(private cursoController: CursoController) {}

    find() {
        return this.cursoController.find();
    }

    get(id: number) {
        return this.cursoController.get(id);
    }

    create(entity: Curso) {
        return this.cursoController.create(entity);
    }

    update(entity: Curso) {
        return this.cursoController.update(entity);
    }

    save(entity: Curso) {
        if (!entity.id) return this.create(entity);

        return this.update(entity);
    }
}
