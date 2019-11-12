import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ToastrService } from "ngx-toastr";
import { DatePipe } from '@angular/common';
import { Domicilio } from "../domicilio";
import { DomicilioService } from "../domicilio.service";

@Component({
  selector: 'app-domicilio-create',
  templateUrl: './domicilio-create.component.html',
  styleUrls: ['./domicilio-create.component.css'],
  providers : [DatePipe]
})
export class DomicilioCreateComponent implements OnInit {


  domicilioForm: FormGroup;

  domicilios: Domicilio[];

  constructor(
    private domicilioService: DomicilioService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private dp: DatePipe
    ) {}

domicilio: Domicilio;

/**
* The output which tells the parent component
* that the user created a new domicilio
*/
@Output() create = new EventEmitter();

  createDomicilio() : Domicilio {
    console.log(this.domicilio);
    this.domicilioService.createDomicilio(this.domicilio)
        .subscribe((domicilio) => {
            this.domicilio = domicilio;
            this.create.emit();
            this.toastr.success("The domicilio was created", "domicilio creation");

        });
    return this.domicilio;
  }

  showSuccess() {
    for (let i = 0; i < this.domicilios.length; i++){
      console.log(this.domicilios[i].id+' '+this.domicilios[i].fecha
      +' '+this.domicilios[i].lugarEntrega+' '+this.domicilios[i].costo);
    }
    this.toastr.success("Domicilio", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
  ngOnInit() {
    this.domicilio = new Domicilio();
  }

}