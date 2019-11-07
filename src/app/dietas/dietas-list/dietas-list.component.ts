import { Component, OnInit } from '@angular/core';
import { Dieta } from "../dieta";
import { DietaService } from '../dieta.service';

@Component({
  selector: 'app-dietas-list',
  templateUrl: './dietas-list.component.html',
  styleUrls: ['./dietas-list.component.css']
})
export class DietasListComponent implements OnInit {

  /**
     * Constructor for the component
     * @param editorialService The author's services provider
     */
    constructor(private dietaService: DietaService) { }
 

  

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