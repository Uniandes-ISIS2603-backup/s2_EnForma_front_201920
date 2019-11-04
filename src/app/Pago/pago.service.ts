import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pago } from "./pago";
import { Observable } from "rxjs";


//Esto lo que hace es tomar los json de la ruta y mostrarlos en lista, y debe funcionar porque asi estaba en postman 
const API_URL = "http://{{ip}}:{{puerto}}/s2_enforma-api/api/";

const pagos = "pagos";

@Injectable()
export class PagoService {
  constructor(private http: HttpClient) {}

  getPagos(): Observable<Pago[]> {
    return this.http.get<Pago[]>(API_URL + pagos);
  }
}
