import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ComidatipoService} from "../comidatipo.service";

import { ComidaTipo } from "../comida";
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-comidatipo-create',
  templateUrl: './comidatipo-create.component.html',
  styleUrls: ['./comidatipo-create.component.css']
})
export class ComidatipoCreateComponent implements OnInit {

  comidaForm : FormGroup;
  comidas : ComidaTipo[];

  constructor( private comidaService : ComidatipoService,
    private formBuilder: FormBuilder,
    private toastr : ToastrService


  ) {
    this.comidaForm = this.formBuilder.group({
      
      nombre : ["", Validators.required],
      
      momentoDelDia : ["", Validators.required],
      calorias: ['', Validators.min(100)],
      menu : ["", Validators.minLength(10)]
  });
   }

   createComida(newComida: ComidaTipo)
   {
     console.warn("la comida fue creada", newComida);

     this.comidaService.createComida(newComida).subscribe(comida => {
      this.comidas.push(comida);
    });

   this.comidaForm.reset();
   }

   showSuccess() {
    for (let i = 0; i < this.comidas.length; i++){
      console.log(this.comidas[i].id+' '+this.comidas[i].nombre);
    }
    this.toastr.success("Comida", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }



  ngOnInit() {

    this.comidaService.getComidas().subscribe( comidas => this.comidas = comidas);

  }

}