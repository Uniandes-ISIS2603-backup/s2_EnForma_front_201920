import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuejaReclamoListComponent } from './queja-reclamo-list/queja-reclamo-list.component';
import { QuejaReclamoService } from './queja-reclamo.service';
import { QuejaReclamoDetailComponent } from './queja-reclamo-detail/queja-reclamo-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { QuejaReclamoCreateComponent } from './queja-reclamo-create/queja-reclamo-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule
  ],
  declarations: [QuejaReclamoListComponent, QuejaReclamoDetailComponent, QuejaReclamoCreateComponent],
  exports: [QuejaReclamoListComponent],
  providers: [QuejaReclamoService]
})
export class QuejaReclamoModule { }