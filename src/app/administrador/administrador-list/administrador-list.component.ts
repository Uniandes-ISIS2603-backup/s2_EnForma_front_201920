import { Component, OnInit } from '@angular/core';

import {Administrador} from "../administrador";

import {AdministradorService} from '../administrador.service';

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

  ngOnInit() {

    this.getAdministradores();
  }

}