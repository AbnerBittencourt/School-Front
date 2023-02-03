import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatriculaDTO } from "app/model/dto/matricula.dto";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class MatriculaController {

    constructor(private http:HttpClient) {}

    find() {
        return this.http.get<MatriculaDTO[]>(`${environment.apiURL}matricula/list`);
    }

    get(id: number) {
        return this.http.get<MatriculaDTO>(`${environment.apiURL}matricula/${id}`);
    }

    create(entity: MatriculaDTO) {
        return this.http.post<MatriculaDTO>(`${environment.apiURL}matricula`, entity);
    }

    update(entity: MatriculaDTO) {
        return this.http.put<MatriculaDTO>(`${environment.apiURL}matricula/${entity.id}`, entity);
    }

    delete(id: number) {
        return this.http.delete<MatriculaDTO>(`${environment.apiURL}matricula/${id}`);
    }
}
