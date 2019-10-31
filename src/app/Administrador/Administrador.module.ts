import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorListComponent } from './administrador-list/administrador-list.component';
import { AdministradorService } from './administrador.service';
import { AdministradorDetailComponent } from './administrador-detail/administrador-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdministradorListComponent, AdministradorDetailComponent],
  exports: [AdministradorListComponent],
  providers: [AdministradorService]
})
export class AdministradorModule { }