import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Administrador } from './administrador';
import { Observable } from 'rxjs';
import { AdministradorDetail } from './administrador-detail';


const API_URL = "../../assets/";

const administradores = 'administradores.json';

@Injectable()
export class AdministradorService {

  constructor(private http: HttpClient) { }    
  
    getAdministradores() : Observable<Administrador[]> {
        return this.http.get<Administrador[]>(API_URL + administradores)};


     getAdministradorDetail(administradorId): Observable<AdministradorDetail> {
      console.log(administradorId+" "+API_URL + "administrador-" + administradorId+".json");
        return this.http.get<AdministradorDetail>(API_URL + "administrador-" + administradorId+".json");
    }

}