import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tarjeta } from './tarjeta';
import { TarjetaDetail } from './tarjeta-detail';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080/s2_enforma-api/api/";
const tarjetas = 'tarjetasprepago';

@Injectable()
export class TarjetaService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  getTarjetas() : Observable<Tarjeta[]> 
  {        
    return this.http.get<Tarjeta[]>(API_URL + tarjetas);
  }

    /**
    * Returns the Observable object containing the domicilio retrieved from the API
    * @returns The domicilio
    */
  getTarjetaDetail(tarjetaId): Observable<TarjetaDetail> 
  {
    return this.http.get<TarjetaDetail>(API_URL + tarjetas +'/'+ tarjetaId);
  }

  createTarjeta(tarjeta: Tarjeta): Observable<Tarjeta> {
    return this.http.post<Tarjeta>(API_URL + tarjetas, tarjeta);
  }

}