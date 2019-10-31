
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import {ClienteDetail } from '../cliente-detail';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

  /**
  * The component's constructor
  * @param clienteService The cliente's service
  * @param route The route element which helps to obtain the cliente's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) { }

  /**
  * The cliente whose details we want to show
  */
  clienteDetail: ClienteDetail;



  /**
  * The cliente's id retrieved from the address
  */
  @Input() cliente_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an cliente
  */
  getclienteDetail(): void {

    this.clienteService.getclienteDetail(this.cliente_id)
      .subscribe(o => {
        this.clienteDetail = o
      });
  }

  onLoad(params) {

    this.cliente_id = parseInt(params['id']);
    console.log(" en detail " + this.cliente_id);
    this.clienteDetail = new clienteDetail();
    this.getclienteDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}
