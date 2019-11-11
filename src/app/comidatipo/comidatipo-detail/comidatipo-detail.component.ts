import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { ComidaTipo } from "../comida";
import { ComidaDetail } from "../comida-detail";
import {ComidatipoService} from "../comidatipo.service";



@Component({
  selector: 'app-comidatipo-detail',
  templateUrl: './comidatipo-detail.component.html',
  styleUrls: ['./comidatipo-detail.component.css']
})

export class ComidatipoDetailComponent implements OnInit {

  
  constructor(private comidaService: ComidatipoService,
    private route: ActivatedRoute
     ) { }



comidaDetail : ComidaDetail;



@Input() comida_id : number

loader: any;

getComidaDetail(): void
{
this.comidaService.getComidasDetail(this.comida_id)
.subscribe (comidaDetail => this.comidaDetail = comidaDetail);
}

onLoad (params)
{
  this.comida_id = parseInt(params['id']);
  console.log("estamos en Detail" + this.comida_id);
  this.comidaDetail = new ComidaDetail();
  this.getComidaDetail();
}

  ngOnInit() {

    this.loader = this.route.params.subscribe( (params:Params) => this.onLoad(params))
  }


  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}