import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaGuestComponent } from './pagina-guest/pagina-guest.component';
import { PaginaprincipalService } from './paginaprincipal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaginaGuestComponent],
  providers: [PaginaprincipalService]
})
export class PaginaprincipalModule { }