import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail/cliente-detail.component';
import { ClienteDetaiñComponent } from './cliente-detaiñ/cliente-detaiñ.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent, ClienteDetaiñComponent],
  exports: [ClienteListComponent],
  providers: [ClienteService]
})
export class ClienteModule { }