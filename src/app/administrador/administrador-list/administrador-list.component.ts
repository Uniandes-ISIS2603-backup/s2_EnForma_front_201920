import { Component, OnInit } from '@angular/core';

import {Administrador} from "../administrador";

import {AdministradorService} from '../administrador.service';

import {AdministradorDetail} from '../administrador-detail';


@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

  constructor(private administradorService: AdministradorService) { 
    this.administradores=[];
  }
  
  administradores: Administrador[]; 

  getAdministradores(): void {
        this.administradorService.getAdministradores().subscribe(editorials => this.administradores = editorials);
    }




    administrador_id: number;
    selectedAdministrador : Administrador;
    
    onSelected(administrador_id: number):void {
        this.administrador_id = administrador_id;
        this.selectedAdministrador = new AdministradorDetail();
        this.getAdministradorDetail();     
    }
      getAdministradorDetail(): void {
        this.administradorService.getAdministradorDetail(this.administrador_id)
            .subscribe(selectedadministrador => {
                this.selectedAdministrador = selectedadministrador
            });
     }

  ngOnInit() {

    this.getAdministradores();
  }

}