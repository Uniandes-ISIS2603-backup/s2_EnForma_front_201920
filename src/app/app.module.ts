import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';

import { PaginaprincipalModule } from "./paginaprincipal/paginaprincipal.module";

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';


import {AdministradorModule} from './administrador/administrador.module';
import {PagoModule} from './pago/pago.module';
import {DietasModule} from './dietas/dietas.module';
import {ComidatipoModule} from './comidatipo/comidatipo.module';
import {CalificacionModule} from './calificacion/calificacion.module';
import {DomicilioModule} from './domicilio/domicilio.module';
import {ClienteModule} from './cliente/cliente.module';
import { TarjetaModule } from './tarjeta/tarjeta.module';
import {QuejaReclamoModule} from './queja-reclamo/queja-reclamo.module';





@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        AdministradorModule,
        PagoModule,
        DietasModule,
        ComidatipoModule,
        CalificacionModule,
        DomicilioModule, 
        ClienteModule,
        NgbModule,
        PaginaprincipalModule,
        TarjetaModule,
        QuejaReclamoModule

    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
