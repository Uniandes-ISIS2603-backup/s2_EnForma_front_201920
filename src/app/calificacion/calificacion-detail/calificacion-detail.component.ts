import { Component, OnInit, Input } from '@angular/core';
import{Calificacion} from '../calificacion';
import { CalificacionService } from '../calificacion.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-calificacion-detail',
  templateUrl: './calificacion-detail.component.html',
  styleUrls: ['./calificacion-detail.component.css']
})
export class CalificacionDetailComponent implements OnInit {

  constructor(private calificacionService: CalificacionService,
              private route: ActivatedRoute) { }
  
  @Input()calificacion: Calificacion;

  @Input() calificacionId: number;

  loader: any;

  getCalificacionDetail(): void
  {
    this.calificacionService.getCalificacionDetail(this.calificacionId).subscribe(c => {this.calificacion = c});
  }

  onLoad(params)
  {
    this.calificacionId = parseInt(params['id']);
    this.calificacion = new Calificacion();
    this.getCalificacionDetail();
  }

  ngOnInit() 
  {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy()
  {
    this.loader.unsuscribe();
  }

}