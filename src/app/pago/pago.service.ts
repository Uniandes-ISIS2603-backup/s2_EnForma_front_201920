import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Pago } from "./pago";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";


const API_URL = "http://localhost:8080/s2_enforma-api/api/";

const pagos = "pagos";


@Injectable()
export class PagoService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })};

  getPagos(): Observable<Pago[]> {
    return this.http.get<Pago[]>(API_URL + pagos);
  }

  createPago(pago: Pago): Observable<Pago> {
    return this.http.post<Pago>(API_URL+pagos, Pago, this.httpOptions).pipe(tap((pago: Pago) => console.log(`added Pago w/ id=${pago.id}`)));
  }

}