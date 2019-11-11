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
import { ComidatipoDetailComponent } from '../comidatipo/comidatipo-detail/comidatipo-detail.component';
import { CalificacionListComponent } from '../calificacion/calificacion-list/calificacion-list.component';
import {CalificacionDetailComponent} from '../calificacion/calificacion-detail/calificacion-detail.component';
import { CalificacionCreateComponent } from '../calificacion/calificacion-create/calificacion-create.component';
import { DomicilioListComponent } from '../domicilio/domicilio-list/domicilio-list.component';
import { DomicilioCreateComponent } from '../domicilio/domicilio-create/domicilio-create.component';
import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';

CalificacionCreateComponent


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
            },
            {
              path : ':id',
              component: ComidatipoDetailComponent
            }

            
        ]
    },

    {
        path: 'calificacion',
        children: [
            {
                path: 'list',
                component: CalificacionListComponent
            },
            {
                path: ':id', 
                component: CalificacionDetailComponent,
                outlet: 'detail'
            },
            {
                path: 'create',
                component:CalificacionCreateComponent
            }
            
        ]
    },

    {
        path: 'domicilio',
        children: [
            {
                path: 'create',
                component: DomicilioCreateComponent
            },
            {
                path: 'list',
                component: DomicilioListComponent
            }
            
        ]
    },
    
    {
        path: 'cliente',
        children: [
            {
                path: 'create',
                component: ClienteCreateComponent
            },
            {
                path: 'list',
                component: ClienteListComponent
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
