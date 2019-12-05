import { Component, OnInit } from '@angular/core';
import { ImagenesGuest } from '../imagenesguest';
import { PaginaprincipalService } from '../paginaprincipal.service';

import { ComidatipoService } from '../../comidatipo/comidatipo.service';

import { ComidaTipo } from '../../comidatipo/comida';
import { Router } from '@angular/router';

const URl = "../../assets/comidaimagenes/comidaDetail-{{comidaDetail.id}}.jpg"
@Component({
  selector: 'pagina-guest',
  templateUrl: './pagina-guest.component.html',
  styleUrls: ['./pagina-guest.component.css']
})
export class PaginaGuestComponent implements OnInit {

  constructor(
    private paginaprincipalServicio: PaginaprincipalService, private comidaService: ComidatipoService,
    private router: Router
  ) {  }



  comidasActuales: ComidaTipo[];

  rutaImagenesCarouselGuest: String[];

  numerosAleatorios: string[] =["../../assets/comidaimagenes/comidaDetail-37.jpg","../../assets/comidaimagenes/comidaDetail-38.jpg","../../assets/comidaimagenes/comidaDetail-100.jpg","../../assets/comidaimagenes/comidaDetail-200.jpg", "../../assets/comidaimagenes/comidaDetail-300.jpg","../../assets/comidaimagenes/comidaDetail-500.jpg", "../../assets/comidaimagenes/comidaDetail-37.jpg","../../assets/comidaimagenes/comidaDetail-38.jpg","../../assets/comidaimagenes/comidaDetail-100.jpg"] ;

  rutaImagen1:String;

  rutaImagen2:String;

  rutaImagen3:String;
  
  comida1 : ComidaTipo;
  comida2 : ComidaTipo;
  comida3 : ComidaTipo;

  numInicial: number = -1;

  funcionImagenesAleatorias() :  void {

    this.comidaService.getComidas().subscribe( loquellega => {this.comidasActuales = loquellega

      
      let numInicial = Math.floor( Math.random()*(this.comidasActuales.length-1))
      this.rutaImagen1 = this.numerosAleatorios[numInicial % this.comidasActuales.length];
      this.rutaImagen2 = this.numerosAleatorios[numInicial +1 % this.comidasActuales.length];
      this.rutaImagen3 = this.numerosAleatorios[numInicial + 3 % this.comidasActuales.length];

      console.log(this.comidasActuales.length, 'tamaño comidas');
      console.log(numInicial % this.comidasActuales.length);
      console.log(numInicial+1 % this.comidasActuales.length);
      console.log(numInicial +3 % this.comidasActuales.length);

      console.log(this.rutaImagen1, 'ruta1');
      console.log(this.rutaImagen2, 'ruta2')
      console.log(this.rutaImagen3, 'ruta3')

      this.comida1 = this.comidasActuales[numInicial % this.comidasActuales.length-1];
      this.comida2 = this.comidasActuales[numInicial +1 % this.comidasActuales.length-1];
      this.comida3 = this.comidasActuales[numInicial +2 % this.comidasActuales.length-1];
      
      
    });
  }





  ngOnInit() {
    this.funcionImagenesAleatorias();
    
    
  }

}