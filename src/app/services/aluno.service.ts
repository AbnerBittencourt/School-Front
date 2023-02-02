import { Injectable } from '@angular/core';
import { AlunoController } from 'app/controllers/aluno.controller';
import { Aluno } from 'app/model/entities/aluno.entity';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

    constructor(private alunoController: AlunoController) {}

    find() {
        return this.alunoController.find();
    }

    get(id: number) {
        return this.alunoController.get(id);
    }

    create(entity: Aluno) {
        return this.alunoController.create(entity);
    }

    update(entity: Aluno) {
        return this.alunoController.update(entity);
    }

    save(entity: Aluno) {
        if (!entity.id) return this.create(entity);

        return this.update(entity);
    }
}
