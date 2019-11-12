import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { DomicilioListComponent } from './domicilio-list/domicilio-list.component';

import { FormsModule } from '@angular/forms';

import { DomicilioService } from './domicilio.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DomicilioDetailComponent } from './domicilio-detail/domicilio-detail.component';
import { DomicilioCreateComponent } from './domicilio-create/domicilio-create.component';


@NgModule({
  imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [DomicilioDetailComponent, DomicilioListComponent, DomicilioCreateComponent],
  providers: [DomicilioService],
  exports: [DomicilioListComponent, DomicilioCreateComponent]
})
export class DomicilioModule { }