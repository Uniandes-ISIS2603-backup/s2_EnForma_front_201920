import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuejaReclamo } from '../queja-reclamo';
import { QuejaReclamoService } from '../queja-reclamo.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-queja-reclamo-create',
  templateUrl: './queja-reclamo-create.component.html',
  styleUrls: ['./queja-reclamo-create.component.css']
})
export class QuejaReclamoCreateComponent implements OnInit {

  quejaReclamoForm: FormGroup;
  quejasReclamos: QuejaReclamo[];
  

  constructor(private quejasReclamosService: QuejaReclamoService,
              private formBuilder: FormBuilder, private toastr: ToastrService, private datePipe: DatePipe) 
  { 
    let idc =localStorage.getItem('id');
    
   
    this.quejaReclamoForm = this.formBuilder.group(
      {
        asunto: ["",[Validators.required, Validators.minLength(1)]],
        cliente:["", [Validators.required, Validators.minLength(1)]],
        domicilio: ["", [Validators.required, Validators.minLength(1)]],
        descripcion: ["", [Validators.required, Validators.minLength(1)]],
        fecha: ["", [Validators.required,Validators.minLength(19), Validators.maxLength(19) ]]
        
        //cliente: [idc, [Validators.required, Validators.minLength(1)]],
        //dieta: [this.idDieta, [Validators.required, Validators.minLength(1)]]
        
      });
      
  }

  createQuejaReclamo(newQuejaReclamo: QuejaReclamo) 
  {
    // Process checkout data here
    console.warn("Your order has been submitted", newQuejaReclamo);

    this.quejasReclamosService.createQuejaReclamo(newQuejaReclamo).subscribe(qyr => {this.quejasReclamos.push(qyr);
                                                                                          this.showSuccess();});
    this.quejaReclamoForm.reset();

  }

  showSuccess() 
  {
    for (let i = 0; i < this.quejasReclamos.length; i++)
    {
      console.log(this.quejasReclamos[i].id+' '+this.quejasReclamos[i].asunto);
    }
    this.toastr.success("QuejaReclamo", "Creada exitosamente!", {"progressBar": true,timeOut:4000});
   
  }

  ngOnInit() 
  {
    this.quejasReclamosService.getQuejasYReclamos().subscribe(quejasReclamos => (this.quejasReclamos = quejasReclamos))
  }

}