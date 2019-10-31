import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CalificacionListComponent } from './calificacion-list/calificacion-list.component';
import { CalificacionService } from './calificacion.service';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  declarations: [CalificacionListComponent],
  exports: [CalificacionListComponent],
  providers: [CalificacionService]
})
export class CalificacionModule { }