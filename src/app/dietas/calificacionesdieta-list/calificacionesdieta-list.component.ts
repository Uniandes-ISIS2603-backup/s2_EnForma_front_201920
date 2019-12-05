import { Component, OnInit, Input } from '@angular/core';
import { DietaService } from '../dieta.service';
import { Calificacion } from '../../calificacion/calificacion';

@Component({
  selector: 'app-calificacionesdieta-list',
  templateUrl: './calificacionesdieta-list.component.html',
  styleUrls: ['./calificacionesdieta-list.component.css']
})
export class CalificacionesdietaListComponent implements OnInit {

  calificaciones: Calificacion[];

  dieta_id: number;

  @Input() idDieta: number;

  constructor(private dietaService: DietaService) 
  {
    this.calificaciones =[];
   }

   getCalificaciones(): void {
    this.dietaService.getCalificacionesDieta(this.idDieta).subscribe(calificaciones => this.calificaciones = calificaciones);
}


  ngOnInit() {
  }

}
