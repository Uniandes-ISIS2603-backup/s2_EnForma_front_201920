import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaGuestComponent } from './pagina-guest/pagina-guest.component';
import { PaginaprincipalService } from './paginaprincipal.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule, NgbModule
  ],
  exports : [PaginaGuestComponent],
  declarations: [PaginaGuestComponent],
  providers: [PaginaprincipalService]
})
export class PaginaprincipalModule { }