import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';


import {DietasListComponent} from '../dietas/dietas-list/dietas-list.component';
import { AdministradorListComponent } from '../administrador/administrador-list/administrador-list.component';
import { AdministradorDetailComponent } from '../administrador/administrador-detail/administrador-detail.component';

import { PagoListComponent } from '../pago/pago-list/pago-list.component';
import { ComidatipoListComponent } from '../comidatipo/comidatipo-list/comidatipo-list.component';
import { ComidatipoDetailComponent } from '../comidatipo/comidatipo-detail/comidatipo-detail.component';
import { ComidatipoCreateComponent } from '../comidatipo/comidatipo-create/comidatipo-create.component';

import { CalificacionListComponent } from '../calificacion/calificacion-list/calificacion-list.component';
import {CalificacionDetailComponent} from '../calificacion/calificacion-detail/calificacion-detail.component';
import { CalificacionCreateComponent } from '../calificacion/calificacion-create/calificacion-create.component';
import { DomicilioListComponent } from '../domicilio/domicilio-list/domicilio-list.component';
import { DomicilioCreateComponent } from '../domicilio/domicilio-create/domicilio-create.component';

import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import {ClienteDetailComponent} from '../cliente/cliente-detail/cliente-detail.component';
import {AdministradorCreateComponent } from '../administrador/administrador-create/administrador-create.component';
import { DomicilioDetailComponent } from '../domicilio/domicilio-detail/domicilio-detail.component';
import { DietaCreateComponent } from '../dietas/dieta-create/dieta-create.component';
import { PaginaGuestComponent } from '../paginaprincipal/pagina-guest/pagina-guest.component';
import { TarjetaListComponent } from '../tarjeta/tarjeta-list/tarjeta-list.component';
import { TarjetaDetailComponent } from '../tarjeta/tarjeta-detail/tarjeta-detail.component';
import { TarjetaCreateComponent } from '../tarjeta/tarjeta-create/tarjeta-create.component';
import { QuejaReclamoDetailComponent } from '../queja-reclamo/queja-reclamo-detail/queja-reclamo-detail.component';
import { QuejaReclamoListComponent } from '../queja-reclamo/queja-reclamo-list/queja-reclamo-list.component';
import { QuejaReclamoCreateComponent } from '../queja-reclamo/queja-reclamo-create/queja-reclamo-create.component';





const routes: Routes = [

     
    {
        path: 'dietas',
        children: [
            {
                path: 'list',
                component: DietasListComponent
            },
            {
                path: 'create',
                component: DietaCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data:{
                    permissions:{
                        only: ['ADMIN']
                    }
                }
            }
            
        ]
    },

    {
        path: 'administradores',
        children: [
            
            {
                path: 'list',
                component: AdministradorListComponent
            },
            {
                path: 'id',
                component: AdministradorDetailComponent
            },
            {
                path: 'create',
                component: AdministradorCreateComponent
            },
            
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
            },
            {
                path: 'create',
                component: ComidatipoCreateComponent
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
        path: 'domicilios',
        children: [
            {
                path: 'create',
                component: DomicilioCreateComponent
            },
            {
                path: 'list',
                component: DomicilioListComponent
            },
            {
                path: 'id',
                component: DomicilioDetailComponent
            }
            
        ]
    },
    
    {
        path: 'cliente',
        children: [
            
            {
                path: 'list',
                component: ClienteListComponent
            },
            {
                path: 'id',
                component: ClienteDetailComponent
            },
            {
                path: 'create',
                component: ClienteCreateComponent
            },
            
        ]
    },

    {
        path: 'tarjeta',
        children: [
            
            {
                path: 'list',
                component: TarjetaListComponent
            },
            {
                path: 'id',
                component:  TarjetaDetailComponent
            },
            {
                path: 'create',
                component:  TarjetaCreateComponent
            },
            
        ]
    },
    {
        path: 'quejasyreclamos',
        children: [
            {
                path: 'list',
                component: QuejaReclamoListComponent,
            },
            {
                path: ':id', 
                component: QuejaReclamoDetailComponent,
                outlet: 'detail'
            },
            {
                path: 'create',
                component:QuejaReclamoCreateComponent
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
        component: PaginaGuestComponent
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
