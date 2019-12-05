import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CalificacionService } from '../calificacion.service';
import{Calificacion} from '../calificacion';
import { ToastrService } from "ngx-toastr";
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
  calificaciones: Calificacion[];

  myDate:string;
  Date = new Date();
  

  constructor(private calificacionService: CalificacionService,
              private formBuilder: FormBuilder, private toastr: ToastrService, private datePipe: DatePipe) 
  { 
    this.calificacionForm = this.formBuilder.group(
      {
        puntaje: ["", [Validators.required, Validators.maxLength(1)]],
        comentario:[""],
        fecha: ["", [Validators.required,Validators.minLength(19), Validators.maxLength(19) ]]
        
      });
      
      this.myDate = this.datePipe.transform(this.Date, 'dd/MM/yyyy HH:mm:ss');
      
  }

  createCalificacion(newCalificacion: Calificacion) 
  {
    // Process checkout data here
    console.warn("Your order has been submitted", newCalificacion);

    this.calificacionService.createCalificacion(newCalificacion).subscribe(calificacion => {this.calificaciones.push(calificacion);
                                                                                          this.showSuccess();});
    this.calificacionForm.reset();

  }

  showSuccess() 
  {
    for (let i = 0; i < this.calificaciones.length; i++)
    {
      console.log(this.calificaciones[i].id+' '+this.calificaciones[i].puntaje);
    }
    this.toastr.success("Calificacion", "Creada exitosamente!", {"progressBar": true,timeOut:4000});
   
  }

  ngOnInit() 
  {
    this.calificacionService.getCalificaciones().subscribe(calificaciones => (this.calificaciones = calificaciones))
  }

}