import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';


import {DietasListComponent} from '../dietas/dietas-list/dietas-list.component';
import { AdministradorListComponent } from '../administrador/administrador-list/administrador-list.component';
import { PagoListComponent } from '../pago/pago-list/pago-list.component';
import { ComidatipoListComponent } from '../comidatipo/comidatipo-list/comidatipo-list.component';



const routes: Routes = [

     
    {
        path: 'dietas',
        children: [
            {
                path: 'list',
                component: DietasListComponent
            }
            
        ]
    },

    {
        path: 'administrador',
        children: [
            {
                path: 'list',
                component: AdministradorListComponent
            }
            
        ]
    },

    {
        path: 'pago',
        children: [
            {
                path: 'list',
                component: PagoListComponent
            }
            
        ]
    },

    {
        path: 'comidas',
        children: [
            {
                path: 'list',
                component: ComidatipoListComponent
            }
            
        ]
    },
    
    
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
