import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AdministradorDetailComponent } from '../administrador/administrador-detail/administrador-detail.component';
import { AdministradorListComponent } from '../administrador/administrador-list/administrador-list.component';



const routes: Routes = [

  {
    path: 'administradores',
    children: [{
      path: 'list',
      component: AdministradorListComponent
    },
    {
      path: ':id',
      component: AdministradorDetailComponent,
      outlet: 'detail'
    }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }