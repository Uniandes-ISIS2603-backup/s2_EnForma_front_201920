import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AdministradorService } from "../administrador.service";
import {Administrador} from "../administrador";
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-administrador-create',
  templateUrl: './administrador-create.component.html',
  styleUrls: ['./administrador-create.component.css'],
  providers : [DatePipe]
})
export class AdministradorCreateComponent implements OnInit {


/**
* Constructor for the component
* @param dp DatePipe to format the date.
* @param administradorService The administrador's services provider
* @param toastrService The toastr to show messages to the user
*/
constructor(
    private dp: DatePipe,
    private administradorService: AdministradorService,
    private toastrService: ToastrService
) {}

/**
* The new administrador
*/
administrador: Administrador;

/**
* The output which tells the parent component
* that the user no longer wants to create an administrador
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user created a new administrador
*/
@Output() create = new EventEmitter();

/**
* Creates an administrador
*/
createAdministrador(): Administrador {

    console.log(this.administrador);
    this.administradorService.createAdministrador(this.administrador)
        .subscribe((administrador) => {
            this.administrador = administrador;
            this.create.emit();
            this.toastrService.success("The administrador was created", "administrador creation");

        });
    return this.administrador;
}

/**
* Emits the signal to tell the parent component that the
* user no longer wants to create an user
*/
cancelCreation(): void {
    this.cancel.emit();
}

/**
* This function will initialize the component
*/
ngOnInit() {
    this.administrador = new Administrador();
}


}