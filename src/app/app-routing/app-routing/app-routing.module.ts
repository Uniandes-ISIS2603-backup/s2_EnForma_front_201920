
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';

const routes: Routes = [

  {
    path: 'clientes',
    children: [{
      path: 'list',
      component: ClienteListComponent
    },
    {
      path: ':id',
      component: ClienteDetailComponent,
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