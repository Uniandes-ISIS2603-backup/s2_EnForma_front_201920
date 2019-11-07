import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dieta } from './dieta';
import { Observable } from 'rxjs';



const API_URL = "http://localhost:8080/s2_enforma-api/api/";

const dietas = 'dietas';


@Injectable()
export class DietaService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getDietas() : Observable<Dieta[]> {
        return this.http.get<Dieta[]>(API_URL + dietas);
    }

}