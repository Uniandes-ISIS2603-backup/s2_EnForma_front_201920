import { Component, OnInit } from '@angular/core';
import {Cliente} from "../cliente";
import{ClienteService} from '../cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit 
{
constructor( private clienteService : ClienteService) 
  { }

clientes : Cliente[];
  
  getClientes(): void
  {
    this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
  }

  ngOnInit() 
  {
    this.getClientes();
  }

}
