import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoListComponent } from './pago-list/pago-list.component';
import { PagoCreateComponent } from './pago-create/pago-create.component';
import { FormsModule } from '@angular/forms';
import { PagoService } from './pago.service';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [PagoListComponent, PagoCreateComponent],
  providers: [PagoService],
  exports: [PagoListComponent, PagoCreateComponent]
})
export class PagoModule { }