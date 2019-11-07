import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calificacion } from './calificacion';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080/s2_enforma-api/api/";
const calificaciones = 'calificaciones';

@Injectable()
export class CalificacionService {

  constructor(private http: HttpClient) { }

  getCalificaciones():Observable<Calificacion[]>
  {
    return this.http.get<Calificacion[]>(API_URL + calificaciones);
  }

  getCalificacionDetail(calificacionId): Observable<Calificacion>
  {
    return this.http.get<Calificacion>(API_URL + calificaciones + calificacionId)
  }

}