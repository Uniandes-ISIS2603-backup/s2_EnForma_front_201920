import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dieta } from './dieta';
import { Observable } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { DietaDetail } from './dieta-detail';
import { Calificacion } from '../calificacion/calificacion';



const API_URL = "http://localhost:8080/s2_enforma-api/api/";

const dietas = 'dietas';


@Injectable()
export class DietaService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }   
    
    httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
    }
  
    getDietas() : Observable<Dieta[]> {
        return this.http.get<Dieta[]>(API_URL + dietas);
    }

    getDietaDetail(dietaId): Observable<DietaDetail> {
      return this.http.get<DietaDetail>(API_URL+dietas+"/"+dietaId)
     }

    createDieta(dieta: Dieta): Observable<Dieta> {
      return this.http.post<Dieta>(API_URL+dietas, dieta, this.httpOptions).pipe(tap((dieta: Dieta) => console.log(`added dieta w/ ${dieta.nombre} id=${dieta.id}`)));
    }

    getCalificacionesDieta(dietaId): Observable<Calificacion[]> {
      return this.http.get<Calificacion[]>(API_URL+dietas+"/"+dietaId +"/calificaciones");
    }

    
  }