import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MatriculaController {

    constructor(private http:HttpClient) {}

    // find() {
    //     return this.http.get<Matricula[]>(`${environment.apiURL}matricula`);
    // }

    // get(id: number) {
    //     return this.http.get<Matricula>(`${environment.apiURL}matricula/${id}`);
    // }

    // create(entity: Matricula) {
    //     return this.http.post<Matricula>(`${environment.apiURL}matricula`, entity);
    // }

    // update(entity: Matricula) {
    //     return this.http.put<Matricula>(`${environment.apiURL}matricula/${entity.id}`, entity);
    // }
}
