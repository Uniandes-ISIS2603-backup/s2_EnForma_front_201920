import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ComidaTipo } from "./comida";
import { ComidaDetail } from "./comida-detail";

import { Observable } from "rxjs";

import { catchError, map, tap } from "rxjs/operators";

const API_URL = "http://localhost:8080/s2_enforma-api/api/";
const comidas = "comidas";

@Injectable()
export class ComidatipoService {
  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  getComidas(): Observable<ComidaTipo[]> {
    console.log(API_URL + comidas);
    return this.http.get<ComidaTipo[]>(API_URL + comidas);
  }

  getComidasDetail(comidaId): Observable<ComidaDetail> {
    return this.http.get<ComidaDetail>(
      API_URL + "comidas/" + comidaId
    );
  }

  createComida(comida: ComidaTipo): Observable<ComidaTipo> {
    // const id = typeof comida === "number" ? comida : comida.id;
    // const url = `${API_URL + comidas}/${id}`;

    return this.http.post<ComidaTipo>(API_URL + comidas, comida, this.httpOptions).pipe(tap((comida: ComidaTipo) => console.log(`added comida w/ ${comida.nombre} id=${comida.id}`)));
  }
  // createAdministrador(administrador: Administrador): Observable<Administrador> {
  //   return this.http.post<Administrador>(API_URL+administradores, administrador, this.httpOptions).pipe(tap((administrador: Administrador) => console.log(`added administrador w/ ${administrador.nombre} id=${administrador.id}`)));
  // }

}



