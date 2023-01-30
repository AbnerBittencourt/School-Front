import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { IModule } from "../interfaces/module.interface";

@Injectable({
    providedIn: "root",
})
export class ModulesService {
    private readonly _baseUrl = "./assets/modules/modules.json";

    constructor(private _http: HttpClient) {}

    find(): Observable<IModule[]> {
        return this._http.get<IModule[]>(this._baseUrl).pipe(map((obj) => obj));
    }
}
