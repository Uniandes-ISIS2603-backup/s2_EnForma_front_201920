import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DietaService } from '../dieta.service';
import { Dieta } from '../dieta';
import { DietaDetail } from '../dieta-detail';

@Component({
  selector: 'app-dieta-detail',
  templateUrl: './dieta-detail.component.html',
  styleUrls: ['./dieta-detail.component.css']
})
export class DietaDetailComponent implements OnInit {

  /**
    * The administrador
    */
   @Input() dietaDetail: DietaDetail;
   /**
   * Constructor for the component
   * @param route The route which helps to retrieves the id of the book to be shown
   * @param administradorService The administrador's services provider
   * @param toastrService The toastr to show messages to the user
   */
   constructor(
       private route: ActivatedRoute,
       private dietaService: DietaService 
   ) { }


  /**
   * El id de la dieta que viene en el path get .../dietas/dieta_id
   */
  dieta_id: number;

 /**
   * The method which obtains the dieta whose details we want to show
   */
  getDietaDetail(): void {
    this.dietaService.getDietaDetail(this.dieta_id)
        .subscribe(dietaDetail => {
            this.dietaDetail = dietaDetail
        });
}


/**
* The method which initializes the component.
* We need to create the administrador so it is never considered as undefined
*/
ngOnInit() {
    this.dieta_id = +this.route.snapshot.paramMap.get('id');
    if (this.dieta_id){
    this.dietaDetail = new DietaDetail();
    this.getDietaDetail();
    }
}



}