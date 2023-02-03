import { Injectable } from '@angular/core';
import { MatriculaController } from 'app/controllers/matricula.controller';
import { MatriculaDTO } from 'app/model/dto/matricula.dto';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

    constructor(private matriculaController: MatriculaController) {}

    find() {
        return this.matriculaController.find();
    }

    get(id: number) {
        return this.matriculaController.get(id);
    }

    create(entity: MatriculaDTO) {
        return this.matriculaController.create(entity);
    }

    update(entity: MatriculaDTO) {
        return this.matriculaController.update(entity);
    }

    save(entity: MatriculaDTO) {
        if (!entity.id) return this.create(entity);

        return this.update(entity);
    }

    delete(id: number) {
        return this.matriculaController.delete(id);
    }
}
