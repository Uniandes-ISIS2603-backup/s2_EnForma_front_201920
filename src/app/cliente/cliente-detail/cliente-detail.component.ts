import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ClienteDetail } from '../cliente-detail';


@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

  @Input() clienteDetail: ClienteDetail;


  constructor(private clienteService: ClienteService,
    private route: ActivatedRoute) { }

  cliente_id: number;

 // loader:any;

  /**
  * The method which retrieves the books of an editorial
  */
  getClienteDetail(): void {
    this.clienteService.getClienteDetail(this.cliente_id)
      .subscribe(clienteDetail => {
        this.clienteDetail = clienteDetail
      });
  }


  //onLoad(params) {
    //this.cliente_id = parseInt(params["id"]);
    //this.clienteDetail = new ClienteDetail();
    //this.getClienteDetail();
  //}



 // ngOnInit() {
   // this.loader = this.route.params.subscribe((params: Params) =>
     // this.onLoad(params)
    //);
  //}

  //ngOnDestroy() {
    //this.loader.unsubscribe();
  //}

  ngOnInit() {
    this.cliente_id = +this.route.snapshot.paramMap.get('id');
    if (this.cliente_id){
    this.clienteDetail = new ClienteDetail();
    this.getClienteDetail();
    }
}

}