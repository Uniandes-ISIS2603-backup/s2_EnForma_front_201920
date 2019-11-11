import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';

import { ReactiveFormsModule } from '@angular/forms';

import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule, ReactiveFormsModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent],
  exports: [ClienteListComponent, ClienteCreateComponent],
  providers: [ClienteService]
})
export class ClienteModule { }