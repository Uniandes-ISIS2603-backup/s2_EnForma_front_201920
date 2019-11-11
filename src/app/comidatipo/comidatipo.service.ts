import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ComidaTipo } from "./comida";
import { ComidaDetail } from "./comida-detail";

import { Observable } from "rxjs";

const API_URL = "http://localhost:8080/s2_enforma-api/api/";
const comidas = "comidas";

@Injectable()
export class ComidatipoService {
  constructor(private http: HttpClient) {}

  getComidas(): Observable<ComidaTipo[]>
   {
    console.log(API_URL + comidas);
    return this.http.get<ComidaTipo[]>(API_URL + comidas);
  }

  getComidasDetail(comidaId): Observable<ComidaDetail> {
    return this.http.get<ComidaDetail>(
      API_URL + "comidas/" + comidaId 
    );  }

    
}
