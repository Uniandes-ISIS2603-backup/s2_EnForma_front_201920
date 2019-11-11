import { Component, OnInit } from '@angular/core';
//este es el mismo comidaTipoDTO
import { ComidaTipo } from "../comida";

import {ComidatipoService} from "../comidatipo.service";

import { Router } from '@angular/router';

@Component({
  selector: 'app-comidatipo-list',
  templateUrl: './comidatipo-list.component.html',
  styleUrls: ['./comidatipo-list.component.css']
})
export class ComidatipoListComponent implements OnInit {

  constructor(private comidaTipoService : ComidatipoService, private router: Router) { }

comidas : ComidaTipo[];


getComidas (): void {
this.comidaTipoService.getComidas().subscribe(comidas => this.comidas = comidas);
}

  ngOnInit() {
    this.getComidas();
  }

}