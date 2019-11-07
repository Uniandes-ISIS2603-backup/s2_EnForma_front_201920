import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ToastrService } from "ngx-toastr";

import { Domicilio } from "../domicilio";
import { DomicilioService } from "../domicilio.service";

@Component({
  selector: 'app-domicilio-create',
  templateUrl: './domicilio-create.component.html',
  styleUrls: ['./domicilio-create.component.css']
})
export class DomicilioCreateComponent implements OnInit {

  domicilioForm: FormGroup;

  domicilios: Domicilio[];

  constructor(
    private domicilioService: DomicilioService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ) {
      this.domicilioForm = this.formBuilder.group({
      fecha: ["", Validators.required],
      lugarEntrega: ["", Validators.required],
      costo: ["", Validators.required]
    });
    }
  createDomicilio(newDomicilio: Domicilio) {
    // Process checkout data here
    console.warn("el domicilio fue creado", newDomicilio);

    this.domicilioService.createDomicilio(newDomicilio).subscribe(domicilio => {
      this.domicilios.push(domicilio);
      this.showSuccess();
    });
    this.domicilioForm.reset();
  }

  showSuccess() {
    for (let i = 0; i < this.domicilios.length; i++){
      console.log(this.domicilios[i].id+' '+this.domicilios[i].fecha
      +' '+this.domicilios[i].lugarEntrega+' '+this.domicilios[i].costo);
    }
    this.toastr.success("Domicilio", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
  ngOnInit() {
    this.domicilioService
      .getDomicilios()
      .subscribe(domicilios => (this.domicilios = domicilios));
  }

}