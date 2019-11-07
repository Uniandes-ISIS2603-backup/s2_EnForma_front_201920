import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CalificacionListComponent } from './calificacion-list/calificacion-list.component';
import { CalificacionCreateComponent } from './calificacion-create/calificacion-create.component';
import { CalificacionService } from './calificacion.service';
import { CalificacionDetailComponent } from './calificacion-detail/calificacion-detail.component';



@NgModule({
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule
  ],
  declarations: [CalificacionListComponent, CalificacionCreateComponent, CalificacionDetailComponent],
  exports: [CalificacionListComponent, CalificacionCreateComponent],
  providers: [CalificacionService]
})
export class CalificacionModule { }