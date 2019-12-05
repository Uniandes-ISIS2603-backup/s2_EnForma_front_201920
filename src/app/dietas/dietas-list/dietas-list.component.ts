import { Component, OnInit } from '@angular/core';
import { Dieta } from "../dieta";
import { DietaService } from '../dieta.service';
import { DietaDetail } from '../dieta-detail';
import { CalificacionService } from '../../calificacion/calificacion.service';

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
    constructor(private dietaService: DietaService, private calificacionService: CalificacionService) {
      this.dietas=[];
     }
 

    dieta_id: number;
    selectedDieta : Dieta;
    selectedDieta2 : String;
    selectedDieta3 : number;

    
    onSelected(dieta_id: number):void {
        this.dieta_id = dieta_id;
        this.selectedDieta = new DietaDetail();
        this.geDietaDetail();
        console.log(Number(localStorage.getItem('id').toString()))     
    }

    onSelected2(dieta_id: number):void {
      this.selectedDieta2 = dieta_id.toString();
      console.log(this.selectedDieta2)
     
  }

  onSelected3(dieta_id: number):void {
    this.selectedDieta3 = dieta_id;
    console.log(this.selectedDieta3)
   
}
      geDietaDetail(): void {
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