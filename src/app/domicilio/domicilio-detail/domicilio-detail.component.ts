import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DomicilioService } from '../domicilio.service';
import { Domicilio } from '../domicilio';
import { DomicilioDetail } from '../domicilio-detail';


@Component({
  selector: 'app-domicilio-detail',
  templateUrl: './domicilio-detail.component.html',
  styleUrls: ['./domicilio-detail.component.css']
})
export class DomicilioDetailComponent implements OnInit {

  constructor(
    private domicilioService: DomicilioService,
    private route: ActivatedRoute
  ) { }

  /**
  * The domicilio whose details we want to show
  */
 @Input() domicilioDetail: DomicilioDetail;



  /**
  * The domicilio's id retrieved from the address
  */
  domicilio_id: number;

  loader: any;

  /**
  * The method which retrieves the books of an editorial
  */
  getDomicilioDetail(): void {
    this.domicilioService.getDomicilioDetail(this.domicilio_id)
      .subscribe(domicilioDetail => {
        this.domicilioDetail = domicilioDetail
      });
  }

  onLoad(params) {

    this.domicilio_id = parseInt(params['id']);
    console.log(" en detail " + this.domicilio_id);
    this.domicilioDetail = new DomicilioDetail();
    this.getDomicilioDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}