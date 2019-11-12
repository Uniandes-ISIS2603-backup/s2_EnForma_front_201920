import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { DietaService } from "../dieta.service";
import {Dieta} from "../dieta";
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { AdministradorService } from '../../administrador/administrador.service';
import { Administrador } from '../../administrador/administrador';

@Component({
  selector: 'app-dieta-create',
  templateUrl: './dieta-create.component.html',
  styleUrls: ['./dieta-create.component.css'],
  providers : [DatePipe]
})
export class DietaCreateComponent implements OnInit {

  constructor(
    private dp: DatePipe,
    private dietaService: DietaService,
    private adminService: AdministradorService,

    private toastrService: ToastrService
  ) { }


  /**
* The new dieta
*/
dieta: Dieta;

administradores: Administrador[];

/**
* The output which tells the parent component
* that the user no longer wants to create an dieta
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user created a new dieta
*/
@Output() create = new EventEmitter();



/**
* Creates an administrador
*/
createDieta(): Dieta {

  console.log(this.dieta);
  this.dietaService.createDieta(this.dieta)
      .subscribe((dieta) => {
          this.dieta = dieta;
          this.create.emit();
          this.toastrService.success("The Dieta was created", "dieta creation");

      });
  return this.dieta;
}


getAdministradores(): void {
  this.adminService.getAdministradores()
      .subscribe(administradores => {
          this.administradores = administradores;
      }, err => {
          this.toastrService.error(err, 'Error');
      });
}


/**
* Emits the signal to tell the parent component that the
* user no longer wants to create an dieta
*/
cancelCreation(): void {
  this.cancel.emit();
}

/**
* This function will initialize the component
*/
ngOnInit() {
  this.dieta = new Dieta();
  this.dieta.administrador = new Administrador();
  this.getAdministradores();
}

}