import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuejaReclamo } from './queja-reclamo';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080/s2_enforma-api/api/";
const quejasyreclamos = 'quejasyreclamos';

@Injectable()
export class QuejaReclamoService 
{

  constructor(private http: HttpClient) 
  { 
    
  }

   httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })};

  getQuejasYReclamos():Observable<QuejaReclamo[]>
  {
    return this.http.get<QuejaReclamo[]>(API_URL + quejasyreclamos);
  }

  getQuejaReclamoDetail(quejareclamoId): Observable<QuejaReclamo>
  {
    return this.http.get<QuejaReclamo>(API_URL + quejasyreclamos + "/" +quejareclamoId)
  }

  createQuejaReclamo(quejareclamo: QuejaReclamo): Observable<QuejaReclamo> {
    return this.http.post<QuejaReclamo>(API_URL + quejasyreclamos, quejareclamo);
  }

}