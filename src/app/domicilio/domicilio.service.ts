import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Domicilio } from './domicilio';
import { DomicilioDetail } from './domicilio-detail';
import { Observable } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

const API_URL = "http://localhost:8080/s2_enforma-api/api/";
const domicilios = 'domicilios';

@Injectable()
export class DomicilioService {

  constructor(private http: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  getDomicilios() : Observable<Domicilio[]> 
  {
    return this.http.get<Domicilio[]>(API_URL + domicilios);
  }

    /**
    * Returns the Observable object containing the domicilio retrieved from the API
    * @returns The domicilio
    */
  getDomicilioDetail(domicilioId): Observable<DomicilioDetail> 
  {
    return this.http.get<DomicilioDetail>(API_URL + domicilios +'/'+ domicilioId);
  }

  createDomicilio(domicilio: Domicilio): Observable<Domicilio> 
  {
    return this.http.post<Domicilio>(API_URL + domicilios, domicilio);
  }

  

}