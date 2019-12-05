import { Component, OnInit } from '@angular/core';
import{QuejaReclamo} from '../queja-reclamo';
import { QuejaReclamoService } from '../queja-reclamo.service';

@Component({
  selector: 'app-queja-reclamo-list',
  templateUrl: './queja-reclamo-list.component.html',
  styleUrls: ['./queja-reclamo-list.component.css']
})
export class QuejaReclamoListComponent implements OnInit {

  constructor(private quejaReclamoService: QuejaReclamoService) 
  { 
    this.quejasYReclamos = [];
  }

  quejasYReclamos : QuejaReclamo[];

  quejaReclamo_id: number;
  selectedQuejaReclamo : QuejaReclamo;

  getQuejasYReclamos(): void
  {
    this.quejaReclamoService.getQuejasYReclamos().subscribe(quejasYReclamos => this.quejasYReclamos = quejasYReclamos);
  }

  onSelected(quejaReclamo_id: number):void 
  {
        this.quejaReclamo_id = quejaReclamo_id;
        this.selectedQuejaReclamo = new QuejaReclamo();
        this.getQuejaReclamoDetail();     
  }

  getQuejaReclamoDetail(): void 
  {
        this.quejaReclamoService.getQuejaReclamoDetail(this.quejaReclamo_id)
            .subscribe(selectedQuejaReclamo => {
                this.selectedQuejaReclamo = selectedQuejaReclamo
            });
  }

  ngOnInit() 
  {
    this.getQuejasYReclamos();
  }

}