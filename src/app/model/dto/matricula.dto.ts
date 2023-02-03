import { Aluno } from "../entities/aluno.entity";
import { Curso } from "../entities/curso.entity";
import { Matricula } from "../entities/matricula.entity";

export class MatriculaDTO extends Matricula{

    aluno: Aluno | undefined = void(0);
    curso: Curso | undefined = void(0);

    constructor() {
        super();
    }
}
