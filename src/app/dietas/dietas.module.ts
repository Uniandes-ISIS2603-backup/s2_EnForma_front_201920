import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietasListComponent } from './dietas-list/dietas-list.component';
import { DietaService } from './dieta.service';
import { FormsModule } from '@angular/forms';
import { DietaCreateComponent } from './dieta-create/dieta-create.component';
import { DietaDetailComponent } from './dieta-detail/dieta-detail.component';
import { CalificacionModule } from '../calificacion/calificacion.module';
import { CalificacionesdietaListComponent } from './calificacionesdieta-list/calificacionesdieta-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalificacionModule
  ],
  declarations: [DietasListComponent, DietaDetailComponent, DietaCreateComponent, CalificacionesdietaListComponent],
  exports: [DietasListComponent, DietaCreateComponent],
  providers: [DietaService]
})
export class DietasModule { }