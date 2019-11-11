import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ComidatipoService} from "../comidatipo.service";


@Component({
  selector: 'app-comidatipo-create',
  templateUrl: './comidatipo-create.component.html',
  styleUrls: ['./comidatipo-create.component.css']
})
export class ComidatipoCreateComponent  {

  comidaForm : FormGroup

  constructor( private comidaService : ComidatipoService,
    private formBuilder: FormBuilder


  ) {
    this.comidaForm = this.formBuilder.group({
      
      nombre : ["", [Validators.required,Validators.minLength(2), Validators.maxLength(60)]],
      
      momentoDelDia : ["", Validators.required],
      calorias: ['', Validators.min(100)],
      menu : ["", Validators.minLength(10)]
  })


   }

 

}