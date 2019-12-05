import { Component, OnInit, Input } from '@angular/core';
import { DietaService } from '../dieta.service';
import { Calificacion } from '../../calificacion/calificacion';
import { DietaDetail } from '../dieta-detail';

@Component({
  selector: 'app-calificacionesdieta-list',
  templateUrl: './calificacionesdieta-list.component.html',
  styleUrls: ['./calificacionesdieta-list.component.css']
})
export class CalificacionesdietaListComponent implements OnInit {

  calificaciones: Calificacion[];

  dieta_id: number;

  @Input() dieta: DietaDetail;

  constructor(private dietaService: DietaService) 
  {
    this.calificaciones =[];
   }

   getCalificaciones(): void {
    this.dietaService.getCalificacionesDieta(this.dieta.id).subscribe(calificaciones => this.calificaciones = calificaciones);
}

getDietaDetail(): void {
  this.dietaService.getDietaDetail(this.dieta_id)
      .subscribe(dietaDetail => {
          this.dieta = dietaDetail
      });
}


  ngOnInit() {
  }

}
