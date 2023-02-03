import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Aluno } from "app/model/entities/aluno.entity";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AlunoController {

    constructor(private http:HttpClient) {}

    find() {
        return this.http.get<Aluno[]>(`${environment.apiURL}aluno/list`);
    }

    get(id: number) {
        return this.http.get<Aluno>(`${environment.apiURL}aluno/${id}`);
    }

    create(entity: Aluno) {
        return this.http.post<Aluno>(`${environment.apiURL}aluno`, entity);
    }

    update(entity: Aluno) {
        return this.http.put<Aluno>(`${environment.apiURL}aluno/${entity.id}`, entity);
    }

    delete(id: number) {
        return this.http.delete<Aluno>(`${environment.apiURL}aluno/${id}`);
    }
}
