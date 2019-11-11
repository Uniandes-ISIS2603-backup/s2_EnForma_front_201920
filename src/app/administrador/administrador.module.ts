import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorListComponent } from './administrador-list/administrador-list.component';
import { AdministradorService } from './administrador.service';
import { AdministradorDetailComponent } from './administrador-detail/administrador-detail.component';

import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from '../app-routing/app-routing.module';
import { AdministradorCreateComponent } from './administrador-create/administrador-create.component';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule, FormsModule
  ],
  declarations: [AdministradorListComponent, AdministradorDetailComponent, AdministradorCreateComponent],
  exports: [AdministradorListComponent, AdministradorCreateComponent],
  providers: [AdministradorService]
})
export class AdministradorModule { }