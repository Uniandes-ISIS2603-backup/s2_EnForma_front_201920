import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ComidaTipo } from "./comida";
import { ComidaDetail } from "./comida-detail";

import { Observable } from "rxjs";

const API_URL = "../../assets/";
const comidas = "comidas.json";

@Injectable()
export class ComidatipoService {
  constructor(private http: HttpClient) {}

  getComidas(): Observable<ComidaTipo[]> {
    return this.http.get<ComidaTipo[]>(API_URL + comidas);
  }

  getComidasDetail(comidaId): Observable<ComidaDetail> {
    return this.http.get<ComidaDetail>(
      API_URL + "comida-" + comidaId + ".json"
    );
  }
}
