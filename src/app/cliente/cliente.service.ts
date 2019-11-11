import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { ClienteDetail } from './cliente-detail';
import { catchError, map, tap } from "rxjs/operators";


const API_URL = "http://localhost:8080/s2_enforma-api/api/";

const clientes = 'clientes';

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }    
  
    httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

    getClientes() : Observable<Cliente[]> {
        return this.http.get<Cliente[]>(API_URL + clientes)};


     getClienteDetail(clienteId): Observable<ClienteDetail> {
     return this.http.get<ClienteDetail>(API_URL+clientes+"/"+clienteId)
    }

    createCliente(cliente: Cliente): Observable<Cliente>
     {
      return this.http.post<Cliente>(API_URL + clientes, cliente);
   // return this.http.post<Cliente>("s2_enforma-api/api/clientes", cliente, this.httpOptions).pipe(tap((cliente: Cliente) => console.log(`added client w/ ${cliente.nombre} id=${cliente.id}`)));
  }

}