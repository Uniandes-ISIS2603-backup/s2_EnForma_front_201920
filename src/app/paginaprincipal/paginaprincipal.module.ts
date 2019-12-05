import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaGuestComponent } from './pagina-guest/pagina-guest.component';
import { PaginaprincipalService } from './paginaprincipal.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule, NgbModule,
    AppRoutingModule
  ],
  exports : [PaginaGuestComponent],
  declarations: [PaginaGuestComponent],
  providers: [PaginaprincipalService]
})
export class PaginaprincipalModule { }