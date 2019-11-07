import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AdministradorService } from '../administrador.service';
import { Administrador } from '../administrador';
import { AdministradorDetail } from '../administrador-detail';


@Component({
  selector: 'app-administrador-detail',
  templateUrl: './administrador-detail.component.html',
  styleUrls: ['./administrador-detail.component.css']
})
export class AdministradorDetailComponent implements OnInit {

  constructor(private administradorService: AdministradorService,
    private route: ActivatedRoute) { }


  administradorDetail: AdministradorDetail;

  @Input() administrador_id: number;

  loader:any;

  /**
  * The method which retrieves the books of an editorial
  */
  getAdministradorDetail(): void {
    this.administradorService.getAdministradorDetail(this.administrador_id)
      .subscribe(administradorDetail => {
        this.administradorDetail = administradorDetail
      });
  }


  onLoad(params) {
    this.administrador_id = parseInt(params["id"]);
    this.administradorDetail = new AdministradorDetail();
    this.getAdministradorDetail();
  }



  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) =>
      this.onLoad(params)
    );
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}