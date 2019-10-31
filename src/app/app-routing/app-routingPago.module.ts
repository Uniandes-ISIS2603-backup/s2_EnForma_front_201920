import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagoListComponent } from '../pago/pago-list/pago-list.component';

const routes: Routes = [

  {
    path: 'pagos',
    children: [{
      path: 'list',
      component: PagoListComponent
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