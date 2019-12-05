import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarjeta } from '../tarjeta';
import { TarjetaService } from '../tarjeta.service';
import { TarjetaDetail } from '../tarjeta-detail';

@Component({
  selector: 'app-tarjeta-list',
  templateUrl: './tarjeta-list.component.html',
  styleUrls: ['./tarjeta-list.component.css']
})
export class TarjetaListComponent implements OnInit {

  constructor(
    private tarjetaService: TarjetaService, 
    private router: Router
    ) { }

  tarjeta_id: number;

  tarjetas: Tarjeta[];

  /**
   * Asks the service to update the list of tarjetas prepago
   */
  getTarjetas(): void 
  {
    this.tarjetaService.getTarjetas().subscribe(tarjetas => this.tarjetas = tarjetas);
  }

  selectedTarjeta : Tarjeta;

  onSelected(tarjeta_id: number):void 
  {
    this.tarjeta_id = tarjeta_id;
    this.selectedTarjeta = new TarjetaDetail();
    this.getTarjetaDetail();     
  }

  getTarjetaDetail(): void
  {
    this.tarjetaService.getTarjetaDetail(this.tarjeta_id)
     .subscribe(selectedtarjeta => {
         this.selectedTarjeta = selectedtarjeta
     });
  }


  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
  this.getTarjetas();
  }

}