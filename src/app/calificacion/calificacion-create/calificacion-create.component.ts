import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CalificacionService } from '../calificacion.service';
import{Calificacion} from '../calificacion';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.css'], 
  providers: [DatePipe]
})
export class CalificacionCreateComponent implements OnInit 
{

  calificacionForm: FormGroup;
  myDate:String;
  

  constructor(private calificacionService: CalificacionService,
              private formBuilder: FormBuilder, private datePipe: DatePipe) 
  { 
    this.calificacionForm = this.formBuilder.group(
      {
        puntaje: ["", [Validators.required, Validators.maxLength(1)]],
        descripcion:[""],
        fecha: ["", Validators.required]
      });
      
      this.myDate = this.datePipe.transform(this.myDate, 'dd/MM/yyyy HH:mm:ss');
      
  }

  createCalificacion(newCalificacion: Calificacion) {
    // Process checkout data here
    console.warn("Your order has been submitted", newCalificacion);

   this.calificacionForm.reset();
  }

  ngOnInit() {
  }

}