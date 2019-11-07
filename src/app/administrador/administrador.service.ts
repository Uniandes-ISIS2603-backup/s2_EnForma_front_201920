import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Administrador } from './administrador';
import { Observable } from 'rxjs';
import { AdministradorDetail } from './administrador-detail';
import { catchError, map, tap } from "rxjs/operators";


const API_URL = "http://localhost:8080/s2_enforma-api/api/";

const administradores = 'administradores';

@Injectable()
export class AdministradorService {

  constructor(private http: HttpClient) { }    
  
    httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

    getAdministradores() : Observable<Administrador[]> {
        return this.http.get<Administrador[]>(API_URL + administradores)};


     getAdministradorDetail(administradorId): Observable<AdministradorDetail> {
     return this.http.get<AdministradorDetail>(API_URL+administradores+"/"+administradorId)
    }

    createAdministrador(administrador: Administrador): Observable<Administrador> {
    return this.http.post<Administrador>("api/administradores", administrador, this.httpOptions).pipe(tap((administrador: Administrador) => console.log(`added editorial w/ ${administrador.nombre} id=${administrador.id}`)));
  }

}