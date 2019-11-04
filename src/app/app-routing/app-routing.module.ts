import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { AdministradorListComponent } from '../Administrador/administrador-list/administrador-list.component';
import { AdministradorDetailComponent } from '../Administrador/administrador-detail/administrador-detail.component';
import { PagoListComponent } from '../Pago/pago-list/pago-list.component';

const routes: Routes = [

     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: AuthLoginComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    },
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
    },
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
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
