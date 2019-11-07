import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domicilio } from '../domicilio';
import { DomicilioService } from '../domicilio.service';

@Component({
  selector: 'list-domicilio',
  templateUrl: './domicilio-list.component.html',
  styleUrls: ['./domicilio-list.component.css']
})
export class DomicilioListComponent implements OnInit 
{

  constructor(
    private domicilioService: DomicilioService, 
    private router: Router
    ) { }

  domicilio_id: number;

  domicilios: Domicilio[];

  /**
   * Asks the service to update the list of domicilios
   */
  getDomicilios(): void 
  {
    this.domicilioService.getDomicilios().subscribe(domicilios => this.domicilios = domicilios);
  }


  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
  this.getDomicilios();
  }

}