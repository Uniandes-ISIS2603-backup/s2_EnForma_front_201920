import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {ClienteService } from "../cliente.service";
import {Cliente} from "../cliente";
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  constructor(
      private clienteService: ClienteService,
      private toastrService: ToastrService) 
      {} 


      clientes: Cliente[];
      
      cliente : Cliente;

   @Output() create = new EventEmitter();

   @Output() cancel = new EventEmitter();

    createCliente(): Cliente 
    {
      console.log(this.cliente);
     this.clienteService.createCliente(this.cliente)
            .subscribe((cliente) => {
                this.cliente = cliente;
                this.create.emit();
                this.toastrService.success("The ciente was created", "Client creation");
         
            });
        return this.cliente;
    }

    cancelCreation(): void {
      this.cancel.emit();
    }
  ngOnInit() {
 this.cliente = new Cliente();
  }

}