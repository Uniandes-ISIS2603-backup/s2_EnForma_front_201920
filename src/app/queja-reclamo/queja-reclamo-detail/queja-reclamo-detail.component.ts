import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import{QuejaReclamo} from '../queja-reclamo';
import{QuejaReclamoService} from '../queja-reclamo.service';

@Component({
  selector: 'app-queja-reclamo-detail',
  templateUrl: './queja-reclamo-detail.component.html',
  styleUrls: ['./queja-reclamo-detail.component.css']
})
export class QuejaReclamoDetailComponent implements OnInit 
{
  @Input() quejaReclamo: QuejaReclamo;

  constructor(private route: ActivatedRoute, private quejaReclamoService: QuejaReclamoService) { }

  quejaReclamo_id: number;

  getQuejaReclamoDetail(): void 
  {
       this.quejaReclamoService.getQuejaReclamoDetail(this.quejaReclamo_id)
           .subscribe(qyrDetail => {
               this.quejaReclamo = qyrDetail
           });
   }

  ngOnInit() 
  {
      this.quejaReclamo_id = +this.route.snapshot.paramMap.get('id');
       if (this.quejaReclamo_id)
       {
       this.quejaReclamo = new QuejaReclamo();
       this.getQuejaReclamoDetail();
       }  
  }

}