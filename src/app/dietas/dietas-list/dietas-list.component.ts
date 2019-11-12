import { Component, OnInit } from '@angular/core';
import { Dieta } from "../dieta";
import { DietaService } from '../dieta.service';
import { DietaDetail } from '../dieta-detail';

@Component({
  selector: 'app-dietas-list',
  templateUrl: './dietas-list.component.html',
  styleUrls: ['./dietas-list.component.css']
})
export class DietasListComponent implements OnInit {

  /**
     * Constructor for the component
     * @param dietaService The author's services provider
     */
    constructor(private dietaService: DietaService) {
      this.dietas=[];
     }
 

    dieta_id: number;
    selectedDieta : Dieta;
    
    onSelected(administrador_id: number):void {
        this.dieta_id = administrador_id;
        this.selectedDieta = new DietaDetail();
        this.getAdministradorDetail();     
    }
      getAdministradorDetail(): void {
        this.dietaService.getDietaDetail(this.dieta_id)
            .subscribe(selectedadministrador => {
                this.selectedDieta = selectedadministrador
            });
     }

  

    /**
       * The list of dietas*/
    dietas: Dieta[];

 getDietas(): void {
        this.dietaService.getDietas().subscribe(dietas => this.dietas = dietas);
    }














    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getDietas();
    }

}