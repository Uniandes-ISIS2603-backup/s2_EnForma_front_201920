import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TarjetaService } from '../tarjeta.service';
import { Tarjeta } from '../tarjeta';
import { TarjetaDetail } from '../tarjeta-detail';



@Component({
  selector: 'app-tarjeta-detail',
  templateUrl: './tarjeta-detail.component.html',
  styleUrls: ['./tarjeta-detail.component.css']
})
export class TarjetaDetailComponent implements OnInit {

  constructor(
    private tarjetaService: TarjetaService,
    private route: ActivatedRoute
  ) { }

  /**
  * The tarjeta prepago whose details we want to show
  */
 @Input() tarjetaDetail: TarjetaDetail;

  /**
  * The tarjeta's id retrieved from the address
  */
  tarjeta_id: number;

  loader: any;

  /**
  * The method which retrieves the pagos of a tarjeta prepago
  */
  getTarjetaDetail(): void {
    this.tarjetaService.getTarjetaDetail(this.tarjeta_id)
      .subscribe(tarjetaDetail => {
        this.tarjetaDetail = tarjetaDetail
      });
  }

  onLoad(params) {

    this.tarjeta_id = parseInt(params['id']);
    console.log(" en detail " + this.tarjeta_id);
    this.tarjetaDetail = new TarjetaDetail();
    this.getTarjetaDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}