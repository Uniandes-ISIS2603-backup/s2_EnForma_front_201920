import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { TarjetaListComponent } from './tarjeta-list/tarjeta-list.component';

import { FormsModule } from '@angular/forms';

import { TarjetaService } from './tarjeta.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TarjetaDetailComponent } from './tarjeta-detail/tarjeta-detail.component';
import { TarjetaCreateComponent } from './tarjeta-create/tarjeta-create.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [TarjetaDetailComponent, TarjetaListComponent, TarjetaCreateComponent],
  providers: [TarjetaService],
  exports: [TarjetaListComponent, TarjetaCreateComponent]
})
export class TarjetaModule { }