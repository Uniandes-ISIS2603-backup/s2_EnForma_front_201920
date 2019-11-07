import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietasListComponent } from './dietas-list/dietas-list.component';
import { DietaService } from './dieta.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [DietasListComponent],
  exports: [DietasListComponent],
  providers: [DietaService]
})
export class DietasModule { }