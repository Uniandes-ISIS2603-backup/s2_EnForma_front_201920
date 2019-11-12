import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {ComidatipoService} from "../comidatipo.service";

import { DatePipe } from '@angular/common';

import { ComidaTipo } from "../comida";
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-comidatipo-create',
  templateUrl: './comidatipo-create.component.html',
  styleUrls: ['./comidatipo-create.component.css'],
  providers : [DatePipe]
})
export class ComidatipoCreateComponent implements OnInit {
//versión anterior
  // comidaForm : FormGroup;
  // comidas : ComidaTipo[];

  // selectedFile : File = null;




  constructor( private comidaService : ComidatipoService,
    // private formBuilder: FormBuilder,
    private toastr : ToastrService,
    private dp : DatePipe
    // private http: HttpClient

  ) {
  //   this.comidaForm = this.formBuilder.group({
      
  //     nombre : ["", Validators.required],
      
  //     momentoDelDia : ["", Validators.required],
  //     calorias: ['', Validators.min(10)],
  //     menu : ["", Validators.minLength(10)]
  // });
   }

/**
* The new administrador
*/
comida: ComidaTipo;


     /**
* The output which tells the parent component
* that the user no longer wants to create a comida
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user created a new administrador
*/
@Output() create = new EventEmitter();


createComida() : ComidaTipo {

console.log(this.comida);
this.comidaService.createComida(this.comida).subscribe( (comidaParametro) =>  {
  this.comida = comidaParametro;
  this.create.emit();
  this.toastr.success("la comida se creo", "Comida Creation")
});

return this.comida;

}
  //  createComida(newComida: ComidaTipo)
  //  {
  //    console.warn("la comida fue creada", newComida);

  //    this.comidaService.createComida(newComida).subscribe(comida => {
  //     this.comidas.push(comida);
  //     this.comidaForm.reset();
  //   });

   
  //  }

  //  showSuccess() {
  //   for (let i = 0; i < this.comidas.length; i++){
  //     console.log(this.comidas[i].id+' '+this.comidas[i].nombre);
  //   }
  //   this.toastr.success("Comida", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  // }
  // onFileSelected(event){
  //   this.selectedFile = <File> event.target.files[0];
  // }

  // onUpload(){
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   this.http.post('http://localhost:4200/assets/comidaimagenes', fd)
  //     .subscribe(res => {
  //       console.log(res);
  //     });

  // }

  /**
* Emits the signal to tell the parent component that the
* user no longer wants to create an user
*/
cancelCreation(): void {
  this.cancel.emit();
}



  ngOnInit() {
this.comida = new ComidaTipo();
    // this.comidaService.getComidas().subscribe( comidas => this.comidas = comidas);

  }

}