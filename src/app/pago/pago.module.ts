import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoListComponent } from './pago-list/pago-list.component';
import { PagoService } from './pago.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PagoListComponent],
  providers: [PagoService],
  exports: [PagoListComponent]
})
export class PagoModule { }