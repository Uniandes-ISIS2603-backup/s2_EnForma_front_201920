import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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


  @Input() administradorDetail: AdministradorDetail;

  administrador_id: number;

  /**
  * The method which retrieves the books of an editorial
  */
  getEditorialDetail(): void {
    this.administradorService.getAdministradorDetail(this.administrador_id)
      .subscribe(administradorDetail => {
        this.administradorDetail = administradorDetail
      });
  }

  /**
  * The method which initializes the component
  * We need to initialize the editorial so it is never considered as undefined
  */



  ngOnInit() {
    this.administrador_id = +this.route.snapshot.paramMap.get('id');
    if (this.administrador_id) {
      this.administradorDetail = new AdministradorDetail();
      this.getEditorialDetail();
    }

  }

}