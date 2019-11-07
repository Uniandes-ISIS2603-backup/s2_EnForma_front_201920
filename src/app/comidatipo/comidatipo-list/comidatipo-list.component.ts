import { Component, OnInit } from '@angular/core';
//este es el mismo comidaTipoDTO
import { ComidaTipo } from "../comida";
import {ComidatipoService} from "../comidatipo.service";
@Component({
  selector: 'app-comidatipo-list',
  templateUrl: './comidatipo-list.component.html',
  styleUrls: ['./comidatipo-list.component.css']
})
export class ComidatipoListComponent implements OnInit {

  constructor(private comidaTipoService : ComidatipoService) { }

comidas : ComidaTipo[];

getComidas (): void {
this.comidaTipoService.getComidas().subscribe(lasComidas => this.comidas = lasComidas);
}

  ngOnInit() {
    this.getComidas();
  }

}