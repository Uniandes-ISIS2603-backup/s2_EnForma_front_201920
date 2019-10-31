import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pago } from "./pago";
import { Observable } from "rxjs";

const API_URL = "../../assets/";

const pagos = "pagos.json";

@Injectable()
export class PagoService {
  constructor(private http: HttpClient) {}

  getPagos(): Observable<Pago[]> {
    return this.http.get<Pago[]>(API_URL + pagos);
  }
}
