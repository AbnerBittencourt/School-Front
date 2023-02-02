import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Curso } from "app/model/entities/curso.entity";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CursoController {

    constructor(private http:HttpClient) {}

    find() {
        return this.http.get<Curso[]>(`${environment.apiURL}curso/list`);
    }

    get(id: number) {
        return this.http.get<Curso>(`${environment.apiURL}curso/${id}`);
    }

    create(entity: Curso) {
        return this.http.post<Curso>(`${environment.apiURL}curso`, entity);
    }

    update(entity: Curso) {
        return this.http.put<Curso>(`${environment.apiURL}curso/${entity.id}`, entity);
    }
}
