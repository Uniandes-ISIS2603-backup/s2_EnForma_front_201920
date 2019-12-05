import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ToastrService } from "ngx-toastr";
import { DatePipe } from '@angular/common';
import { Tarjeta } from "../tarjeta";
import { TarjetaService } from "../tarjeta.service";

@Component({
  selector: 'app-tarjeta-create',
  templateUrl: './tarjeta-create.component.html',
  styleUrls: ['./tarjeta-create.component.css'],
  providers : [DatePipe]
})
export class TarjetaCreateComponent implements OnInit {

  tarjetaForm: FormGroup;

  tarjetas: Tarjeta[];

  constructor(
    private tarjetaService: TarjetaService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private dp: DatePipe
  ) { }

  tarjeta: Tarjeta;

/**
* The output which tells the parent component
* that the user created a new tarjeta
*/
@Output() create = new EventEmitter();

createTarjeta() : Tarjeta {
  console.log(this.tarjeta);
  this.tarjetaService.createTarjeta(this.tarjeta)
      .subscribe((tarjeta) => {
          this.tarjeta = tarjeta;
          this.create.emit();
          this.toastr.success("The tarjeta prepago was created", "tarjeta creation")
      });
  return this.tarjeta;
}

showSuccess() {
  for (let i = 0; i < this.tarjetas.length; i++){
    console.log(this.tarjetas[i].id+' '+this.tarjetas[i].saldo
    +' '+this.tarjetas[i].puntos);
  }
  this.toastr.success("Tarjeta", "Creado exitosamente!", {"progressBar": true,timeOut:4000}); 
}

ngOnInit(){
  this.tarjeta = new Tarjeta();
}

}