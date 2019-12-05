import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { ImagenesGuest } from "./imagenesguest";

import { Observable } from "rxjs";

const API_URL = "../assets/";
const imagenes = "imagenesguest";
@Injectable()
export class PaginaprincipalService {
  constructor(private http: HttpClient) {}

  getImagenes(): Observable<ImagenesGuest[]> {
    
    console.log(API_URL + imagenes);
    return this.http.get<ImagenesGuest[]>(API_URL + imagenes + ".json");
  }
}
