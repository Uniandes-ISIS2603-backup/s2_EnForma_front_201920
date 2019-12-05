import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { PagoService } from "../pago.service";
import {Pago} from "../pago";
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pago-create',
  templateUrl: './pago-create.component.html',
  styleUrls: ['./pago-create.component.css'],
  providers : [DatePipe]
})
export class PagoCreateComponent implements OnInit {


/**
* Constructor for the component
* @param dp DatePipe to format the date.
* @param pagoService The pago's services provider
* @param toastrService The toastr to show messages to the user
*/
constructor(
    private dp: DatePipe,
    private pagoService: PagoService,
    private toastrService: ToastrService
) {}

/**
* The new pago
*/
pago: Pago;

/**
* The output which tells the parent component
* that the user no longer wants to create an pago
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user created a new pago
*/
@Output() create = new EventEmitter();

/**
* Creates an pago
*/
createPago(): Pago {

    console.log(this.pago);
    this.pagoService.createPago(this.pago)
        .subscribe((pago) => {
            this.pago = pago;
            this.create.emit();
            this.toastrService.success("The pago was created", "pago creation");

        });
    return this.pago;
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
    this.pago = new Pago();
}


}