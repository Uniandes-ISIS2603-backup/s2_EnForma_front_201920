import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComidaTipo } from './comida';
import { Observable } from 'rxjs';


const API_URL = "http://localhost:8080/s2_enforma-api/api/";
const comidas = 'comidas';

@Injectable()
export class ComidatipoService {

  constructor(private http: HttpClient) { }

  getComidas() : Observable<ComidaTipo[]> {
    return this.http.get<ComidaTipo[]>(API_URL + comidas);
  }

}