import { Component, OnInit } from '@angular/core';

import {Cliente} from "../cliente";

import {ClienteService} from '../cliente.service';
import {ClienteDetail} from '../cliente-detail';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(private clienteService: ClienteService) { 
    this.clientes=[];
  }
  
  clientes: Cliente[]; 

  getClientes(): void {
        this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    }

    cliente_id: number;
    selectedCliente : Cliente;
    
    onSelected(cliente_id: number):void {
        this.cliente_id = cliente_id;
        this.selectedCliente = new ClienteDetail();
        this.getClienteDetail();     
    }
      getClienteDetail(): void
       {
        this.clienteService.getClienteDetail(this.cliente_id)
            .subscribe(selectedcliente => {
                this.selectedCliente = selectedcliente
            });
     }

  ngOnInit() {

    this.getClientes();
  }

}