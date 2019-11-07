import { Component, OnInit } from '@angular/core';
import {Pago} from "../pago";
import {PagoService} from '../pago.service';


@Component({
  selector: 'app-pago-list',
  templateUrl: './pago-list.component.html',
  styleUrls: ['./pago-list.component.css']
})
export class PagoListComponent implements OnInit {

  constructor(private PagoService: PagoService) { }

  Pagoes: Pago[];

  getPagoes(): void {
        this.PagoService.getPagos().subscribe(pagos => this.Pagoes = pagos);
    }

  ngOnInit() {
  this.getPagoes();
  }

}