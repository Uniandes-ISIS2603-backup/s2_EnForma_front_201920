import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComidatipoListComponent } from "./comidatipo-list/comidatipo-list.component";
import { ComidatipoService } from './comidatipo.service';
// import { ComidatipoCreateComponent } from './comidatipo-create/comidatipo-create.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ComidatipoListComponent], 
  
  exports : [ComidatipoListComponent], 
  providers: [ComidatipoService]
})
export class ComidatipoModule { }