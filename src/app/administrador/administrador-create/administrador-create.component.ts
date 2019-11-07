import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AdministradorService } from "../administrador.service";
import {Administrador} from "../administrador";

@Component({
  selector: 'app-administrador-create',
  templateUrl: './administrador-create.component.html',
  styleUrls: ['./administrador-create.component.css']
})
export class AdministradorCreateComponent implements OnInit {

administradorForm: FormGroup;

administradores: Administrador[];

  constructor(private formBuilder: FormBuilder,
      private administradorService: AdministradorService) { 

        this.administradorForm= this.formBuilder.group(
      {
        //nombro los campos de recepcion de info

        nombre:["", [Validators.required, Validators.minLength(2)]],
        
        correo:["", [Validators.required, Validators.email]],

        username:["", [Validators.required]],

        contrasena:["",[Validators.required]]


      }
    )
      }

      createAdministradodr(newAdministrador: Administrador) {
    // Process checkout data here
    console.warn("Your order has been submitted", newAdministrador);
  this.administradorService.createAdministrador(newAdministrador).subscribe(administrador => {
      this.administradores.push(administrador);
    });

   this.administradorForm.reset();
   }



  ngOnInit() {

       this.administradorService
      .getAdministradores()
      .subscribe(administradores => (this.administradores = administradores));
  }

}