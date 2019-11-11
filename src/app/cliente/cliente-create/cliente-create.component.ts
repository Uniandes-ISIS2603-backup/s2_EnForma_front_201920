import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ClienteService } from "../cliente.service";
import {Cliente} from "../cliente";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

clienteForm: FormGroup;

clientes: Cliente[];

cliente : Cliente;

  constructor(private formBuilder: FormBuilder,
      private clienteService: ClienteService,
      private toastrService: ToastrService) { 

        this.clienteForm = this.formBuilder.group(
      {
        //nombro los campos de recepcion de info

        nombre:["", [Validators.required, Validators.minLength(2)]],
        
        correo:["", [Validators.required, Validators.email]],

        username:["", [Validators.required]],

        contrasena:["",[Validators.required]],

        edad:["",[Validators.required]],
        
        objetivos:["",[Validators.required]],


      }
    )
      }

     // createCliente(newCliente: Cliente) 
      //{

    //console.warn("Your order has been submitted", newCliente);
  //this.clienteService.createCliente(newCliente).subscribe(cliente => {
    //  this.clientes.push(cliente);
    //});

   //this.clienteForm.reset();
   //}

   @Output() create = new EventEmitter();
   @Output() cancel = new EventEmitter();
    createCliente(): Cliente {
        this.clienteService.createCliente(this.cliente)
            .subscribe((editorial) => {
                this.cliente = editorial;
                this.create.emit();
                this.toastrService.success("The editorial was created", "Editorial creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.cliente;
    }

  ngOnInit() {

       //this.clienteService
      //.getClientes()
      //.subscribe(clientes => (this.clientes = clientes));
      this.cliente = new Cliente();
  }

}