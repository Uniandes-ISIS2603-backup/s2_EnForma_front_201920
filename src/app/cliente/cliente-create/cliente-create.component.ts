import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ClienteService } from "../cliente.service";
import {Cliente} from "../cliente";

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

clienteForm: FormGroup;

clientes: Cliente[];

  constructor(private formBuilder: FormBuilder,
      private clienteService: ClienteService) { 

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

      createCliente(newCliente: Cliente) 
      {

    console.warn("Your order has been submitted", newCliente);
  this.clienteService.createCliente(newCliente).subscribe(cliente => {
      this.clientes.push(cliente);
    });

   this.clienteForm.reset();
   }



  ngOnInit() {

       this.clienteService
      .getClientes()
      .subscribe(clientes => (this.clientes = clientes));
  }

}