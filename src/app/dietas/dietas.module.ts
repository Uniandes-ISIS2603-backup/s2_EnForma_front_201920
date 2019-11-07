import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietasListComponent } from './dietas-list/dietas-list.component';
import { DietaService } from './dieta.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DietasListComponent],
  exports: [DietasListComponent],
  providers: [DietaService]
})
export class DietasModule { }