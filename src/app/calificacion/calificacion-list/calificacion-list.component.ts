import { Component, OnInit } from '@angular/core';
import{Calificacion} from '../calificacion';
import { CalificacionService } from '../calificacion.service';


@Component({
  selector: 'app-calificacion-list',
  templateUrl: './calificacion-list.component.html',
  styleUrls: ['./calificacion-list.component.css']
})
export class CalificacionListComponent implements OnInit 
{

  constructor(private calificacionService: CalificacionService) { }
  
  /**
     * The list of calificaciones which belong to the BookStore
 */ 
  calificaciones: Calificacion[];
  calificacionId: number;
  calificacionSelected: Calificacion;

  getCalificaciones(): void
  {
    this.calificacionService.getCalificaciones().subscribe(calificaciones => this.calificaciones = calificaciones);
  }

  onSelected(calificacionId: number): void {
    this.calificacionId = calificacionId;
    this.calificacionSelected = new Calificacion();
    this.calificacionService.getCalificacionDetail(calificacionId).subscribe(c => this.calificacionSelected = c);
  }

  ngOnInit() 
  {
    this.getCalificaciones();
  }

}
